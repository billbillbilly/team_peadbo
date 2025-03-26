import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Contacts from 'expo-contacts';

export default function CreateNewsletterScreen() {
  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        if (data.length > 0) {
          setContacts(data);
        }
      } else {
        Alert.alert('Permission Denied', 'Cannot access contacts without permission.');
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Title" />
      <TextInput style={styles.searchInput} placeholder="Subject" />
      <TextInput style={styles.searchInput} placeholder="Schedule at (e.g. 2025-03-30 10:00)" />

      {/* Dropdown populated with phone contacts */}
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={contact}
          onValueChange={(value) => setContact(value)}
          mode="dropdown"
          style={styles.dropdown}
          itemStyle={styles.itemStyle} 
          dropdownIconColor="#666"
        >
          <Picker.Item label="Select Contact" value={null} />
          {contacts.map((item) => (
            <Picker.Item key={item.id} label={item.name} value={item.id} />
          ))}
        </Picker>
      </View>

      <TextInput
        style={[styles.searchInput, { height: 100 }]}
        placeholder="Add preview text..."
        multiline
      />

      <TouchableOpacity style={styles.addContactButton}>
        <Text style={styles.addContactText}>Preview</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  searchInput: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  dropdownContainer: {
    backgroundColor: '#EFEFEF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    marginBottom: 20,
    height: 48,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  dropdown: {
    width: '100%',
    height: '100%',
  },
  // iOS-specific styling for Picker items:
  itemStyle: {
    color: '#333',
    fontSize: 16,
  },
  addContactButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addContactText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
