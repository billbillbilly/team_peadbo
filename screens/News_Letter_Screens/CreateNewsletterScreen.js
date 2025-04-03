import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  const [newsletter, setNewsletter] = useState({
    title: '',
    subject: '',
    schedule: '',
    recipients: '',
    template: '',
    content: route.params?.content || `
      <p>Greetings,</p>
      <p>I hope this email finds you well.</p>
      <p>You are receiving this note because I would like to share some recent updates from my journey.</p>
      <ul>
        <li>&lt;List Updates Here&gt;</li>
      </ul>
      <p>Thanks so much for taking time out of your busy schedule to read this. I'll be in touch soon!</p>
    `
  });

  const handleEditContent = () => {
    navigation.navigate('RichTextEditor', { 
      content: newsletter.content,
      onSave: (newContent) => setNewsletter({...newsletter, content: newContent})
    });
  };

  const handlePreview = () => {
    navigation.navigate('NewsletterPreview', { 
      newsletter: newsletter,
      onSave: (updatedNewsletter) => {
        setNewsletter(updatedNewsletter);
        // In a real app, you would save to your backend here
        navigation.navigate('Newsletter', { newNewsletter: updatedNewsletter });
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={PEADBO_COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Newsletter</Text>
        <View style={{ width: 24 }} />
      </View>

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
        
        <TextInput 
          style={styles.input} 
          placeholder="Schedule at (e.g. 2025-03-30 10:00) (optional)" 
          value={newsletter.schedule}
          onChangeText={(text) => setNewsletter({...newsletter, schedule: text})}
        />

        <Text style={styles.sectionTitle}>Recipients</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter recipients (comma-separated)"
          placeholderTextColor="#999"
          value={newsletter.recipients}
          onChangeText={(text) => setNewsletter({ ...newsletter, recipients: text })}
        />

        <TouchableOpacity 
          style={styles.previewButton}
          onPress={handlePreview}
          disabled={!newsletter.title || !newsletter.content}
        >
          <Text style={styles.previewButtonText}>Preview Newsletter</Text>
        </TouchableOpacity>
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
  },
  picker: {
    height: 48,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: PEADBO_COLORS.white,
    color: PEADBO_COLORS.text,
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
  previewButton: {
    height: 48,
    backgroundColor: PEADBO_COLORS.primary,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewButtonText: {
    color: PEADBO_COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});