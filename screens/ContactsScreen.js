import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput, StyleSheet, Modal, Alert } from "react-native";
import * as Contacts from 'expo-contacts';

function ContactsScreen({ navigation }) {
  // State for contacts and search
  const [contacts, setContacts] = useState([]); // Main contact list (manually added or selected)
  const [filteredContacts, setFilteredContacts] = useState([]); // For filtered results
  const [searchQuery, setSearchQuery] = useState(''); // Search query for phone contacts
  const [showAddContactModal, setShowAddContactModal] = useState(false);
  const [showPhoneContactsModal, setShowPhoneContactsModal] = useState(false);
  const [phoneContacts, setPhoneContacts] = useState([]); // Phone contacts for the modal
  const [filteredPhoneContacts, setFilteredPhoneContacts] = useState([]); // Filtered phone contacts for the modal

  // Request permission and load phone contacts
  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        loadPhoneContacts();
      } else {
        Alert.alert('Permission Denied', 'Cannot access phone contacts without permission.');
      }
    };

    requestPermission();
  }, []);

  const loadPhoneContacts = async () => {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails],
    });

    if (data.length > 0) {
      setPhoneContacts(data); // Set phone contacts for the modal
      setFilteredPhoneContacts(data); // Initialize filteredPhoneContacts with all phone contacts
    }
  };

  // Handle search functionality for phone contacts
  const handlePhoneContactsSearch = (query) => {
    setSearchQuery(query);
    const filtered = phoneContacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : '';
      return contactName.includes(query.toLowerCase());
    });
    setFilteredPhoneContacts(filtered);
  };

  // Handle adding a new contact
  const handleAddContact = (newContact) => {
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts); // Update filtered contacts
    setShowAddContactModal(false); // Close the modal
  };

  // Handle selecting a contact from phone contacts
  const selectPhoneContact = (contact) => {
    if (!contact.emails || contact.emails.length === 0) {
      // Prompt the user to add an email if the contact has none
      Alert.prompt(
        'Add Email',
        `The contact "${contact.name}" does not have an email address. Please add one.`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: (email) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (email && emailRegex.test(email.trim())) {
                const updatedContact = {
                  name: contact.name,
                  email: email.trim(),
                };
                handleAddContact(updatedContact); // Add the updated contact to the main list
                setShowPhoneContactsModal(false); // Close the modal
              } else {
                Alert.alert('Invalid Email', 'Please enter a valid email address.');
              }
            },
          },
        ],
        'plain-text'
      );
    } else {
      // Add the contact directly if it has an email
      const newContact = {
        name: contact.name,
        email: contact.emails[0].email,
      };
      handleAddContact(newContact); // Add the selected contact to the main list
      setShowPhoneContactsModal(false); // Close the modal
    }
  };

  return (
    <View style={styles.container}>
      {/* Add Contact Button */}
      <TouchableOpacity
        style={styles.addContactButton}
        onPress={() => setShowAddContactModal(true)}
      >
        <Text style={styles.addContactText}>+ Add Contact</Text>
      </TouchableOpacity>

      {/* Add from Phone Contacts Button */}
      <TouchableOpacity
        style={styles.addContactButton}
        onPress={() => setShowPhoneContactsModal(true)}
      >
        <Text style={styles.addContactText}>+ Add from Phone Contacts</Text>
      </TouchableOpacity>

      {/* Contact List */}
      {contacts.length > 0 ? (
        <FlatList
          data={contacts} // Use contacts here
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactEmail}>
                {item.email ? item.email : 'No Email'}
              </Text>
            </View>
          )}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <Text style={styles.emptyStateText}>No contacts found. Add a new contact to get started!</Text>
      )}

      {/* Add Contact Modal */}
      <Modal
        visible={showAddContactModal}
        animationType="slide"
        onRequestClose={() => setShowAddContactModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add a New Contact</Text>
          <AddContactForm onAddContact={handleAddContact} onClose={() => setShowAddContactModal(false)} />
        </View>
      </Modal>

      {/* Phone Contacts Modal */}
      <Modal
        visible={showPhoneContactsModal}
        animationType="slide"
        onRequestClose={() => setShowPhoneContactsModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a Contact</Text>
          {/* Search Bar for Phone Contacts */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search phone contacts..."
            value={searchQuery}
            onChangeText={handlePhoneContactsSearch} // Call handlePhoneContactsSearch on text change
          />
          <FlatList
            data={filteredPhoneContacts} // Use filteredPhoneContacts for the modal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => selectPhoneContact(item)}
              >
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactEmail}>
                  {item.emails && item.emails.length > 0 ? item.emails[0].email : 'No Email'}
                </Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowPhoneContactsModal(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

// Component for adding a new contact manually
function AddContactForm({ onAddContact, onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (firstName.trim() === '' || lastName.trim() === '') {
      Alert.alert('Missing Information', 'First name and last name are required.');
      return;
    }
    if (email.trim() === '') {
      Alert.alert('Missing Information', 'Email is required.');
      return;
    }
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
  
    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    onAddContact({ name: fullName, email: email.trim() });
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor={'#444'}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor={'#444'}
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={'#444'}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>Add Contact</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
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
  },
  addContactButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  addContactText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactEmail: {
    fontSize: 16,
    color: '#666',
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyStateText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 50,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ContactsScreen;