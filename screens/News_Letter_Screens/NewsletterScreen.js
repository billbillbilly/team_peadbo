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

const STORAGE_KEY = 'newsletters';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (route.params?.content) {
      setNewsletter(prev => ({...prev, content: route.params.content}));
    }
  }, [route.params?.content]);

  const handleSelectContacts = () => {
    navigation.navigate('ContactPicker', {
      onSelectContacts: (contacts) => {
        
        const uniqueContacts = [
          ...new Map([...newsletter.recipients, ...contacts].map(c => [c.email, c])).values()
        ];
        setNewsletter({...newsletter, recipients: uniqueContacts});
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
      const saved = await AsyncStorage.getItem(STORAGE_KEY);
      const allNewsletters = saved ? JSON.parse(saved) : [];
      const index = allNewsletters.findIndex(n => n.id === updatedNewsletter.id);
      if (index > -1) {
        allNewsletters[index] = updatedNewsletter;
      } else {
        updatedNewsletter.id = Date.now().toString();
        allNewsletters.push(updatedNewsletter);
      }
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(allNewsletters));
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
      const { title, subject, body } = await generateTemplate();
      setNewsletter((prev) => ({
        ...prev,
        title,
        subject,
        content: body,
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

        {}
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
          <Text style={styles.contentButtonText}>Edit Newsletter Content</Text>
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
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: PEADBO_COLORS.white,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: PEADBO_COLORS.border
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
