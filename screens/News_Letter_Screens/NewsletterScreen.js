// Newsletter funcitonality not implemented yet
// There is the ability to fill out details for a newsletter, but the letter cannot be sent or saved yet
// configuration with database schema will be required to implement this further.


import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { Icon } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

// Key for storing newsletters in AsyncStorage
const STORAGE_KEY = 'newsletters';

export default function CreateNewsletterScreen({ navigation, route }) {
  // Initialize newsletter data from route parameters or default values
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
  // State variables for managing newsletter data and loading state
  const [newsletter, setNewsletter] = useState(newsletterData);
  const [loading, setLoading] = useState(false);

  // Effect to update newsletter content when returning from the RichTextEditor screen
  useEffect(() => {
    if (route.params?.content) {
      setNewsletter(prev => ({ ...prev, content: route.params.content }));
    }
  }, [route.params?.content]);

  // Navigate to the ContactPicker screen to select recipients
  const handleSelectContacts = () => {
    navigation.navigate('ContactPicker', {
      onSelectContacts: (contacts) => {
        // Merge selected contacts with existing recipients, ensuring uniqueness by email
        const uniqueContacts = [
          ...new Map([...newsletter.recipients, ...contacts].map(c => [c.email, c])).values()
        ];
        setNewsletter({ ...newsletter, recipients: uniqueContacts });
      },
      initialSelected: newsletter.recipients // Pass currently selected recipients
    });
  };

  const handleEditContent = () => {
    navigation.navigate('RichTextEditor', {
      content: newsletter.content,
      onSave: (newContent) => setNewsletter({ ...newsletter, content: newContent })
    });
  };

  // Save the newsletter as a draft in AsyncStorage
  const handleSaveDraft = async () => {
    try {
      const updatedNewsletter = { ...newsletter, status: 'draft' }; // Mark as draft
      const saved = await AsyncStorage.getItem(STORAGE_KEY); // Retrieve existing newsletters
      const allNewsletters = saved ? JSON.parse(saved) : [];
      const index = allNewsletters.findIndex(n => n.id === updatedNewsletter.id);

      if (index > -1) {
        allNewsletters[index] = updatedNewsletter; // Update existing newsletter
      } else {
        updatedNewsletter.id = Date.now().toString(); // Assign a unique ID
        allNewsletters.push(updatedNewsletter); // Add new newsletter
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(allNewsletters)); // Save to AsyncStorage
      navigation.navigate('Newsletter', { newNewsletter: updatedNewsletter }); // Navigate back to the newsletter list
    } catch (error) {
      console.error('Error saving draft:', error); // Log any errors
    }
  };

  // Navigate to the NewsletterPreview screen to preview the newsletter
  const handlePreview = () => {
    navigation.navigate('NewsletterPreview', {
      newsletter: newsletter, // Pass the current newsletter for preview
      onSave: (updatedNewsletter) => {
        setNewsletter(updatedNewsletter); // Update newsletter after preview
        navigation.navigate('Newsletter', { newNewsletter: updatedNewsletter }); // Navigate back to the newsletter list
      }
    });
  };

  // Generate a newsletter using AI and update the state
  const handleGenerateAINewsletter = async () => {
    setLoading(true); // Set loading state to true
    try {
      const { title, subject, body } = await generateTemplate(); // Call AI service to generate content
      setNewsletter((prev) => ({
        ...prev,
        title, // Update title
        subject, // Update subject
        content: body // Update content
      }));
    } catch (error) {
      console.error('Error generating AI newsletter:', error); // Log any errors
      Alert.alert('Error', 'Failed to generate AI newsletter. Please try again.'); // Show error alert
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {route.params?.newsletter ? 'Edit Newsletter' : 'New Newsletter'}
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <TouchableOpacity
        style={styles.generateButton}
        onPress={handleGenerateAINewsletter}
        disabled={loading}
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
          onChangeText={(text) => setNewsletter({ ...newsletter, title: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={newsletter.subject}
          onChangeText={(text) => setNewsletter({ ...newsletter, subject: text })}
        />

        <TouchableOpacity
          style={styles.input}
          onPress={() => Alert.alert('Schedule picker not implemented')}
        >
          <Text style={{ color: newsletter.schedule ? PEADBO_COLORS.text : '#999' }}>
            {newsletter.schedule || 'Select Schedule (optional)'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Recipients</Text>

        <TouchableOpacity
          style={styles.input}
          onPress={handleSelectContacts}
        >
          <Text style={{ color: newsletter.recipients.length > 0 ? PEADBO_COLORS.text : '#999' }}>
            {newsletter.recipients.length > 0
              ? `${newsletter.recipients.length} contacts selected`
              : 'Select Recipients'}
          </Text>
        </TouchableOpacity>

        { }
        {newsletter.recipients.length > 0 && (
          <TouchableOpacity
            onPress={() => setNewsletter({ ...newsletter, recipients: [] })}
            style={{
              alignSelf: 'flex-end',
              backgroundColor: PEADBO_COLORS.secondary,
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 6,
              marginTop: 6
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Clear Recipients</Text>
          </TouchableOpacity>
        )}

        {newsletter.recipients.length > 0 && (
          <View style={{ marginTop: 10 }}>
            <FlatList
              data={newsletter.recipients}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
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
          <Text style={styles.contentButtonText}>Edit Newsletter Message</Text>
        </TouchableOpacity>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={handleSaveDraft}
          >
            <Text style={styles.secondaryButtonText}>Save Draft</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.previewButton}
            onPress={handlePreview}
          >
            <Text style={styles.previewButtonText}>Preview</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: PEADBO_COLORS.background },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: PEADBO_COLORS.white,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: PEADBO_COLORS.border,
  },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: PEADBO_COLORS.text },
  generateButton: {
    backgroundColor: PEADBO_COLORS.primary,
    padding: 12,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  generateButtonText: { color: 'white', fontWeight: 'bold' },
  scrollContent: { padding: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginVertical: 10 },
  input: {
    height: 48,
    borderColor: PEADBO_COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    marginBottom: 12,
    backgroundColor: 'white'
  },
  contentButton: {
    borderWidth: 1,
    borderColor: PEADBO_COLORS.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  contentButtonText: {
    color: PEADBO_COLORS.primary,
    fontWeight: '600'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  previewButton: {
    backgroundColor: PEADBO_COLORS.primary,
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    padding: 12,
    marginLeft: 6
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: PEADBO_COLORS.primary,
    flex: 1,
    borderRadius: 8,
    alignItems: 'center',
    padding: 12,
    marginRight: 6
  },
  secondaryButtonText: {
    color: PEADBO_COLORS.primary,
    fontWeight: '600'
  },
  previewButtonText: {
    color: 'white',
    fontWeight: '600'
  },
  contactItem: {
    backgroundColor: 'white',
    borderColor: PEADBO_COLORS.border,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    marginVertical: 4
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: PEADBO_COLORS.text
  },
  contactEmail: {
    fontSize: 12,
    color: PEADBO_COLORS.lightText
  }
});
