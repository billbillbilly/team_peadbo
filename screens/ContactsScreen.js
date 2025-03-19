import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput, StyleSheet, Modal } from "react-native";
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/Ionicons';

function ContactsScreen({ navigation }) {
  // State for contacts and search
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showAddContactModal, setShowAddContactModal] = useState(false);

  // Fetch contacts from the device
  useEffect(() => {
    const fetchContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        setContacts(data);
        setFilteredContacts(data); // Initialize filteredContacts with all contacts
      }
    };
    fetchContacts();
  }, []);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = contacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : '';
      return contactName.includes(query.toLowerCase());
    });
    setFilteredContacts(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Add Contact Button */}
      <TouchableOpacity
        style={styles.addContactButton}
        onPress={() => setShowAddContactModal(true)}
      >
        <Text style={styles.addContactText}>+ Add Contact</Text>
      </TouchableOpacity>

      {/* Contact List */}
      {filteredContacts.length > 0 ? (
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.contactItem}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactEmail}>
                {item.emails && item.emails.length > 0 ? item.emails[0].email : 'No Email'}
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
          {/* Add your form or logic for adding a new contact here */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowAddContactModal(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  closeButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ContactsScreen;