import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function CreateNewsletterScreen() {
  const [contact, setContact] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>New Newsletter</Text>

      <TextInput style={styles.input} placeholder="Title" />
      <TextInput style={styles.input} placeholder="Subject" />
      <TextInput style={styles.input} placeholder="Schedule at (e.g. 2025-03-30 10:00)" />

      <Picker
        selectedValue={contact}
        onValueChange={value => setContact(value)}
        style={styles.picker}
      >
        <Picker.Item label="Select Contact" value="" />
        <Picker.Item label="Alice Smith" value="alice" />
        <Picker.Item label="Bob Johnson" value="bob" />
      </Picker>

      <TextInput style={styles.input} placeholder="Add preview text..." multiline />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Preview</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  header: { fontSize: 28, fontWeight: '700', marginBottom: 24 },
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
  button: {
    marginTop: 24,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: { fontSize: 16, fontWeight: '600' },
});
