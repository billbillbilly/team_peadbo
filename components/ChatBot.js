import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed'; // Import Icon component
import { generateMessage } from '../OpenAIService'; // Import the generateMessage function

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: '1', // Unique ID for the default message
      text: 'Hello! I am the PeadBot and I am here to assist you with all of your professional development questions! How can I help you?', // Default bot message
      createdAt: new Date(),
      user: 'bot', // Indicates this is a bot message
    },
  ]);
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();

  const extractDeepLink = (response) => {
    const match = response.match(/navigate to (myapp:\/\/screens\/\S+)/);
    return match ? match[1] : null;
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    // Add user message to the chat
    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      createdAt: new Date(),
      user: 'user',
    };
    setMessages((prevMessages) => [userMessage, ...prevMessages]);
    setInputText('');

    try {
      // Use the generateMessage function to get the bot's response
      const botResponse = await generateMessage(userMessage.text);

      // Add bot response to the chat
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        createdAt: new Date(),
        user: 'bot',
      };
      setMessages((prevMessages) => [botMessage, ...prevMessages]);

      // Check if the response includes a navigation command
      const deepLink = extractDeepLink(botMessage.text);
      if (deepLink) {
        const screenName = deepLink.replace('myapp://screens/', '');
        navigation.navigate(screenName);
      }
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  const renderMessage = ({ item }) => {
    const isUser = item.user === 'user';
    return (
      <View
        style={[
          styles.messageContainer,
          isUser ? styles.userMessage : styles.botMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Help Icon */}
      <TouchableOpacity
        style={styles.helpIcon}
        onPress={() => navigation.navigate('Profile', { screen: 'ContactSupport' })} // Navigate to ContactSupportScreen
      >
        <Icon name="help-circle" type="ionicon" size={50} color="#1EA896" />
      </TouchableOpacity>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        inverted // Show the latest message at the bottom
        contentContainerStyle={styles.chatContainer}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatBot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  chatContainer: {
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#1EA896',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#EFEFEF',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#1EA896',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  helpIcon: {
    position: 'absolute',
    top: '5%',
    right: '5%',
    zIndex: 10,
  },
});