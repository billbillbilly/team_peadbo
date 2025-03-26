import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CreateNewsletterScreen({ navigation, route }) {
  const [contact, setContact] = useState('');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [schedule, setSchedule] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [content, setContent] = useState(route.params?.content || '');

  const handleEditContent = () => {
    navigation.navigate('RichTextEditor', { content });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New Newsletter</Text>
        <View style={{ width: 24 }} />
      </View>

      <TextInput 
        style={styles.input} 
        placeholder="Title" 
        value={title}
        onChangeText={setTitle}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Subject" 
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Schedule at (e.g. 2025-03-30 10:00)" 
        value={schedule}
        onChangeText={setSchedule}
      />

      <Picker
        selectedValue={contact}
        onValueChange={value => setContact(value)}
        style={styles.picker}
      >
        <Picker.Item label="Select Contact" value="" />
        <Picker.Item label="Alice Smith" value="alice" />
        <Picker.Item label="Bob Johnson" value="bob" />
      </Picker>

      <TextInput 
        style={styles.input} 
        placeholder="Add preview text..." 
        multiline 
        value={previewText}
        onChangeText={setPreviewText}
      />

      <TouchableOpacity 
        style={styles.contentButton}
        onPress={handleEditContent}
      >
        <Text style={styles.contentButtonText}>
          {content ? 'Edit Content' : 'Add Content'}
        </Text>
      </TouchableOpacity>

      {content ? (
        <TouchableOpacity 
          style={styles.previewButton}
          onPress={() => navigation.navigate('NewsletterPreview', { content })}
        >
          <Text style={styles.previewButtonText}>Preview Newsletter</Text>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  picker: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    marginBottom: 16,
  },
  contentButton: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  contentButtonText: {
    color: '#007AFF',
    fontSize: 16,
  },
  previewButton: {
    height: 48,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
