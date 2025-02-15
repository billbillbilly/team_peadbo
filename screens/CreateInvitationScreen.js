import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const templates = [
  'Template 1: Join my board to help me achieve my goals!',
  'Template 2: I would love your mentorship on my new board.',
  'Template 3: Let’s collaborate and make great things happen!',
];

export default function CreateInvitationScreen({ navigation, route }) {
  const { focus, boardName, description, advisors } = route.params;
  const [message, setMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleContinue = () => {
    navigation.navigate('SetTimeAvailability', { focus, boardName, description, advisors, message });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Invitation</Text>
      <Text style={styles.subtitle}>This is the email that will be sent to your invitees. You can personalize the invite to each invitee.</Text>
      {templates.map((template, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.templateButton, selectedTemplate === template && styles.selectedTemplate]}
          onPress={() => {
            setSelectedTemplate(template);
            setMessage(template);
          }}
        >
          <Text style={styles.templateText}>{template}</Text>
        </TouchableOpacity>
      ))}
      <TextInput
        style={styles.messageInput}
        multiline
        numberOfLines={4}
        placeholder="Write your message here..."
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity
        style={[styles.continueButton, !message && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!message}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  templateButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedTemplate: {
    backgroundColor: '#e0f7fa',
    borderColor: '#00bcd4',
  },
  templateText: {
    fontSize: 16,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    height: 100,
  },
  continueButton: {
    backgroundColor: '#00bcd4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});