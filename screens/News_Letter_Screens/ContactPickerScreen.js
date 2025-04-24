import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Contacts from 'expo-contacts';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define color constants for consistent styling
const PEADBO_COLORS = {
  primary: '#1EA896',
  secondary: '#FF715B',
  background: '#F9F9F9',
  text: '#333333',
  lightText: '#777777',
  border: '#DDDDDD',
  white: '#FFFFFF',
};

// Key for storing manually added contacts in AsyncStorage
const STORAGE_KEY = 'manualContacts';

export default function ContactPickerScreen({ navigation, route }) {
  // State variables for managing contacts and user interactions
  const [contacts, setContacts] = useState([]); // All available contacts
  const [filteredContacts, setFilteredContacts] = useState([]); // Filtered contacts based on search query
  const [selectedContacts, setSelectedContacts] = useState(route.params?.initialSelected || []); // Contacts selected by the user
  const [searchQuery, setSearchQuery] = useState(''); // Search query for filtering contacts
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility for adding a new contact
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
  }); // State for storing new contact details

  // Load contacts from the device and AsyncStorage when the component mounts
  useEffect(() => {
    const loadContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      let deviceContacts = [];

      // If permission is granted, fetch contacts from the device
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });

        // Filter contacts with valid names and emails
        if (data.length > 0) {
          deviceContacts = data
            .filter((c) => c.name && c.emails?.[0]?.email)
            .map((c) => ({
              id: c.id,
              name: c.name,
              email: c.emails[0].email,
            }));
        }
      }

      // Load manually added contacts from AsyncStorage
      const stored = await AsyncStorage.getItem(STORAGE_KEY);
      const manualContacts = stored ? JSON.parse(stored) : [];

      // Combine device and manually added contacts
      const allContacts = [...deviceContacts, ...manualContacts];
      setContacts(allContacts);
      setFilteredContacts(allContacts);
    };

    loadContacts();
  }, []);

  // Filter contacts based on the search query
  useEffect(() => {
    if (searchQuery) {
      const filtered = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [searchQuery, contacts]);

  // Toggle the selection of a contact
  const toggleContactSelection = (contact) => {
    setSelectedContacts((prev) => {
      const isSelected = prev.some((c) => c.id === contact.id);
      return isSelected ? prev.filter((c) => c.id !== contact.id) : [...prev, contact];
    });
  };

  // Handle the "Done" button press to return selected contacts
  const handleDone = () => {
    route.params?.onSelectContacts(selectedContacts);
    navigation.goBack();
  };

  // Open the modal for adding a new contact
  const handleAddContact = () => {
    setIsModalVisible(true);
  };

  // Save a new contact to the list and AsyncStorage
  const handleSaveNewContact = async () => {
    const { firstName, lastName, email } = newContact;

    // Validate input fields
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Error', 'Invalid email');
      return;
    }

    // Check for duplicate contacts
    const isDuplicate = contacts.concat(selectedContacts).some((c) => c.email.toLowerCase() === email.toLowerCase());
    if (isDuplicate) {
      Alert.alert('Error', 'Contact already exists');
      return;
    }

    // Create a new contact object
    const contact = {
      id: `manual-${Date.now()}`, // Generate a unique ID for the contact
      name: `${firstName} ${lastName}`,
      email,
    };

    // Update the contact lists and save manually added contacts to AsyncStorage
    const updated = [...contacts, contact];
    const manualOnly = [...updated.filter((c) => c.id.startsWith('manual-'))];

    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(manualOnly));
    setContacts(updated);
    setFilteredContacts(updated);
    setSelectedContacts((prev) => [...prev, contact]);
    setNewContact({ firstName: '', lastName: '', email: '' });
    setIsModalVisible(false);
  };

  // Remove a contact from the selected list
  const removeSelectedContact = (contactId) => {
    setSelectedContacts((prev) => prev.filter((c) => c.id !== contactId));
  };

  // Render a single contact item
  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.contactItem,
        selectedContacts.some((c) => c.id === item.id) && styles.selectedContactItem,
      ]}
      onPress={() => toggleContactSelection(item)}
    >
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactEmail}>{item.email}</Text>
      </View>
      {selectedContacts.some((c) => c.id === item.id) && (
        <Icon name="check" size={24} color={PEADBO_COLORS.primary} />
      )}
    </TouchableOpacity>
  );

  // Render the list of selected contacts
  const renderSelectedContacts = () => (
    <View style={styles.selectedContactsContainer}>
      <Text style={styles.sectionTitle}>Selected Contacts ({selectedContacts.length})</Text>
      {selectedContacts.map((item, index) => (
        <View key={`selected-${index}`} style={styles.contactItem}>
          <View style={styles.contactInfo}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactEmail}>{item.email}</Text>
          </View>
          <TouchableOpacity onPress={() => removeSelectedContact(item.id)}>
            <Icon name="close" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={PEADBO_COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Recipients</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.doneButton}>Done</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search contacts..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddContact}>
          <Icon name="add" size={24} color={PEADBO_COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Selected Contacts */}
      {selectedContacts.length > 0 && renderSelectedContacts()}

      {/* All Contacts */}
      <Text style={styles.sectionTitle}>All Contacts</Text>
      <FlatList
        data={filteredContacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
      />

      {/* Modal for Adding New Contact */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Contact</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="First Name"
              placeholderTextColor="#777"
              value={newContact.firstName}
              onChangeText={(text) => setNewContact({ ...newContact, firstName: text })}
            />

            <TextInput
              style={styles.modalInput}
              placeholder="Last Name"
              placeholderTextColor="#777"
              value={newContact.lastName}
              onChangeText={(text) => setNewContact({ ...newContact, lastName: text })}
            />

            <TextInput
              style={styles.modalInput}
              placeholder="Email"
              placeholderTextColor="#777"
              keyboardType="email-address"
              value={newContact.email}
              onChangeText={(text) => setNewContact({ ...newContact, email: text })}
            />

            <View style={styles.modalButtonRow}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setIsModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.saveButton]}
                onPress={handleSaveNewContact}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
    fontSize: 18,
    fontWeight: '600',
    color: PEADBO_COLORS.text,
  },
  doneButton: {
    color: PEADBO_COLORS.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: PEADBO_COLORS.white,
  },
  searchInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: PEADBO_COLORS.white,
    color: PEADBO_COLORS.text,
  },
  addButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: PEADBO_COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: PEADBO_COLORS.text,
    backgroundColor: PEADBO_COLORS.white,
  },
  selectedContactsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: PEADBO_COLORS.white,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 8,
    backgroundColor: PEADBO_COLORS.white,
  },
  selectedContactItem: {
    backgroundColor: '#E8F5E9',
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: PEADBO_COLORS.text,
    marginBottom: 4,
  },
  contactEmail: {
    fontSize: 14,
    color: PEADBO_COLORS.lightText,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: PEADBO_COLORS.white,
    borderRadius: 8,
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: PEADBO_COLORS.text,
    textAlign: 'center',
  },
  modalInput: {
    height: 48,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: PEADBO_COLORS.white,
    color: PEADBO_COLORS.text,
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  modalButton: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: PEADBO_COLORS.white,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    marginRight: 8,
  },
  saveButton: {
    backgroundColor: PEADBO_COLORS.primary,
    marginLeft: 8,
  },
  cancelButtonText: {
    color: PEADBO_COLORS.text,
    fontSize: 16,
    fontWeight: '600',
  },
  saveButtonText: {
    color: PEADBO_COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});