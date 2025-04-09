import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { generateTemplate } from '../../OpenAIService';

const PEADBO_COLORS = {
  primary: '#1EA896',
  secondary: '#FF715B',
  background: '#F9F9F9',
  text: '#333333',
  lightText: '#777777',
  border: '#DDDDDD',
  white: '#FFFFFF'
};

export default function CreateNewsletterScreen({ navigation, route }) {
  const newsletterData = route.params?.newsletter || {
    title: '',
    subject: '',
    schedule: null,
    recipients: [],
    template: '',
    content: `
      <p>Greetings,</p>
      <p>I hope this email finds you well.</p>
      <p>You are receiving this note because I would like to share some recent updates from my journey.</p>
      <ul>
        <li>&lt;List Updates Here&gt;</li>
      </ul>
      <p>Thanks so much for taking time out of your busy schedule to read this. I'll be in touch soon!</p>
    `,
    status: 'draft',
    createdAt: new Date().toISOString()
  };

  const [newsletter, setNewsletter] = useState(newsletterData);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [minDate] = useState(new Date());
  const [loading, setLoading] = useState(false); // State to handle loading for AI generation

  useEffect(() => {
    if (route.params?.content) {
      setNewsletter(prev => ({...prev, content: route.params.content}));
    }
  }, [route.params?.content]);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = selectedDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      setNewsletter({...newsletter, schedule: formattedDate});
    }
  };

  const showDateTimePicker = () => {
    setShowDatePicker(true);
  };

  const handleSelectContacts = () => {
    navigation.navigate('ContactPicker', {
      onSelectContacts: (contacts) => {
        setNewsletter({...newsletter, recipients: contacts});
      },
      initialSelected: newsletter.recipients
    });
  };

  const handleEditContent = () => {
    navigation.navigate('RichTextEditor', { 
      content: newsletter.content,
      onSave: (newContent) => setNewsletter({...newsletter, content: newContent})
    });
  };

  const handleSaveDraft = async () => {
    try {
      const updatedNewsletter = {...newsletter, status: 'draft'};
      // In a real app, you would save to your backend here
      navigation.navigate('Newsletter', { newNewsletter: updatedNewsletter });
    } catch (error) {
      console.error('Error saving draft:', error);
    }
  };

  const handlePreview = () => {
    navigation.navigate('NewsletterPreview', { 
      newsletter: newsletter,
      onSave: (updatedNewsletter) => {
        setNewsletter(updatedNewsletter);
        navigation.navigate('Newsletter', { newNewsletter: updatedNewsletter });
      }
    });
  };

  const handleGenerateAINewsletter = async () => {
    setLoading(true);
    try {
      const { title, subject, body } = await generateTemplate(); // Call the AI function
      setNewsletter((prev) => ({
        ...prev,
        title,
        subject,
        content: body, // Populate the content with the AI-generated body
      }));
    } catch (error) {
      console.error('Error generating AI newsletter:', error);
      Alert.alert('Error', 'Failed to generate AI newsletter. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={PEADBO_COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {route.params?.newsletter ? 'Edit Newsletter' : 'New Newsletter'}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <TouchableOpacity
        style={styles.generateButton}
        onPress={handleGenerateAINewsletter}
        disabled={loading} // Disable the button while loading
      >
        <Text style={styles.generateButtonText}>
          {loading ? 'Generating...' : 'Generate AI Newsletter'}
        </Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.sectionTitle}>Newsletter Details</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Title" 
          value={newsletter.title}
          onChangeText={(text) => setNewsletter({...newsletter, title: text})}
        />
        
        <TextInput 
          style={styles.input} 
          placeholder="Subject" 
          value={newsletter.subject}
          onChangeText={(text) => setNewsletter({...newsletter, subject: text})}
        />
        
        <TouchableOpacity 
          style={styles.input} 
          onPress={showDateTimePicker}
        >
          <Text style={{color: newsletter.schedule ? PEADBO_COLORS.text : '#999'}}>
            {newsletter.schedule || 'Select Schedule (optional)'}
          </Text>
        </TouchableOpacity>

        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="datetime"
            display="default"
            onChange={handleDateChange}
            minimumDate={minDate}
          />
        )}

        <Text style={styles.sectionTitle}>Recipients</Text>
        <TouchableOpacity 
          style={styles.input}
          onPress={handleSelectContacts}
        >
          <Text style={{color: newsletter.recipients.length > 0 ? PEADBO_COLORS.text : '#999'}}>
            {newsletter.recipients.length > 0 ? `${newsletter.recipients.length} contacts selected` : 'Select Recipients'}
          </Text>
        </TouchableOpacity>

        {newsletter.recipients.length > 0 && (
          <View style={styles.selectedContactsContainer}>
            <Text style={styles.selectedContactsTitle}>Selected Contacts:</Text>
            <FlatList
              data={newsletter.recipients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.contactItem}>
                  <Text style={styles.contactName}>{item.name}</Text>
                  <Text style={styles.contactEmail}>{item.email}</Text>
                </View>
              )}
            />
          </View>
        )}

        <TouchableOpacity 
          style={styles.contentButton}
          onPress={handleEditContent}
        >
          <Text style={styles.contentButtonText}>Edit Newsletter Content</Text>
        </TouchableOpacity>

        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.secondaryButton, (!newsletter.title || !newsletter.content) && styles.disabledButton]}
            onPress={handleSaveDraft}
            disabled={!newsletter.title || !newsletter.content}
          >
            <Text style={styles.secondaryButtonText}>Save Draft</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.previewButton, (!newsletter.title || !newsletter.content) && styles.disabledButton]}
            onPress={handlePreview}
            disabled={!newsletter.title || !newsletter.content}
          >
            <Text style={styles.previewButtonText}>Preview</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PEADBO_COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: PEADBO_COLORS.border,
    backgroundColor: PEADBO_COLORS.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: PEADBO_COLORS.text,
  },
  scrollContent: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
    color: PEADBO_COLORS.text,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: PEADBO_COLORS.white,
    color: PEADBO_COLORS.text,
    justifyContent: 'center',
  },
  contentButton: {
    height: 48,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: PEADBO_COLORS.white,
  },
  contentButtonText: {
    color: PEADBO_COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  previewButton: {
    height: 48,
    flex: 1,
    backgroundColor: PEADBO_COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  secondaryButton: {
    height: 48,
    flex: 1,
    backgroundColor: PEADBO_COLORS.white,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  secondaryButtonText: {
    color: PEADBO_COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  previewButtonText: {
    color: PEADBO_COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
  selectedContactsContainer: {
    marginBottom: 16,
  },
  selectedContactsTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: PEADBO_COLORS.text,
  },
  contactItem: {
    padding: 8,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 4,
    marginBottom: 4,
    backgroundColor: PEADBO_COLORS.white,
  },
  contactName: {
    fontSize: 14,
    fontWeight: '600',
    color: PEADBO_COLORS.text,
  },
  contactEmail: {
    fontSize: 12,
    color: PEADBO_COLORS.lightText,
  },
  generateButton: {
    margin: 16,
    padding: 12,
    backgroundColor: PEADBO_COLORS.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  generateButtonText: {
    color: PEADBO_COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});