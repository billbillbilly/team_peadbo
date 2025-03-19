import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, TextInput, StyleSheet, Modal } from "react-native";

function ContactsScreen({ navigation }) {
  // State for contacts and search
  const [contacts, setContacts] = useState([]); // Start with an empty list
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showAddContactModal, setShowAddContactModal] = useState(false);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = contacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : '';
      return contactName.includes(query.toLowerCase());
    });
    setFilteredContacts(filtered);
  };

  // Handle adding a new contact
  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setFilteredContacts([...contacts, newContact]); // Update filtered contacts
    setShowAddContactModal(false); // Close the modal
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
    </View>
  );
}

// Component for adding a new contact
function AddContactForm({ onAddContact, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name.trim() === '') {
      alert('Name is required');
      return;
    }
    onAddContact({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
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