import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PickAdvisorsScreen({ navigation, route }) {
  const { focus, boardName, boardDescription, boardDuration, boardFrequency, advisors, description, selectedDate, selectedTime } = route.params;
  const [selectedAdvisors, setSelectedAdvisors] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [showContacts, setShowContacts] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Modal for adding email
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [newEmail, setNewEmail] = useState('');

  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        loadContacts();
      } else {
        console.log('Permission denied');
      }
    };

    requestPermission();
  }, []);

  const loadContacts = async () => {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails],
    });

    if (data.length > 0) {
      setContacts(data);
      setFilteredContacts(data); // Initialize filteredContacts with all contacts
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = contacts.filter((contact) => {
      const contactName = contact.name ? contact.name.toLowerCase() : '';
      return contactName.includes(query.toLowerCase());
    });
    setFilteredContacts(filtered);
  };

  const selectContact = (contact) => {
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
                  id: Date.now().toString(), // Generate a unique id
                  name: contact.name,
                  emails: [{ email: email.trim() }],
                };
                setSelectedAdvisors([...selectedAdvisors, updatedContact]);
                setShowContacts(false); // Close the contacts modal
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
        id: contact.id || Date.now().toString(), // Use contact.id if available, otherwise generate a unique id
        name: contact.name,
        email: contact.emails[0].email,
      };
      setSelectedAdvisors([...selectedAdvisors, newContact]);
      setShowContacts(false); // Close the contacts modal
    }
  };
  

  const handleAddAdvisor = () => {
    const firstName = firstNameRef.current.trim();
    const lastName = lastNameRef.current.trim();
    const email = emailRef.current.trim();
  
    // Validate that all fields are filled
    if (!firstName || !lastName || !email) {
      Alert.alert('Missing Information', 'Please enter a first name, last name, and a valid email address.');
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
  
    // Add the new advisor with a unique id
    const newAdvisor = {
      id: Date.now().toString(), // Generate a unique id
      name: `${firstName} ${lastName}`,
      emails: [{ email }],
    };
  
    setSelectedAdvisors([...selectedAdvisors, newAdvisor]);
  
    // Clear the input fields
    firstNameRef.current = '';
    lastNameRef.current = '';
    emailRef.current = '';
  };

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Pick Your Advisors</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[styles.stepCircle, step === 3 && styles.activeStepCircle]}
            >
              <Text style={[styles.stepNumber, step === 3 && styles.activeStepNumber]}>
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowContacts(true)}
      >
        <Text style={styles.addButtonText}>Add Advisor from Contacts</Text>
      </TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.subtitle}>Or enter their information manually:</Text>
        <View style={styles.nameContainer}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="First Name"
            placeholderTextColor={'#999'}
            defaultValue={firstNameRef.current}
            onChangeText={(text) => (firstNameRef.current = text)}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Last Name"
            placeholderTextColor={'#999'}
            defaultValue={lastNameRef.current}
            onChangeText={(text) => (lastNameRef.current = text)}
          />
        </View>
        <View style={styles.emailContainer}>
          <TextInput
            style={[styles.input, styles.emailInput]}
            placeholder="Email"
            placeholderTextColor={'#999'}
            defaultValue={emailRef.current}
            onChangeText={(text) => (emailRef.current = text)}
            keyboardType="email-address"
          />
          <TouchableOpacity style={styles.addIcon} onPress={handleAddAdvisor}>
            <Icon name="add-circle-outline" size={30} color="#1EA896" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <TouchableOpacity
      style={[styles.continueButton, selectedAdvisors.length === 0 && styles.disabledButton]}
      onPress={() =>
        navigation.navigate('CreateInvitationScreen', {
          focus,
          boardName,
          boardDescription,
          boardDuration,
          boardFrequency,
          advisors: selectedAdvisors,
        })
      }
      disabled={selectedAdvisors.length === 0}
    >
      <Text style={styles.continueButtonText}>Continue</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <FlatList
        data={selectedAdvisors}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => (
          <View style={styles.advisorItem}>
            <Text style={styles.advisorName}>{item.name}</Text>
            <Text style={styles.advisorEmail}>
              {item.emails && item.emails.length > 0 ? item.emails[0].email : 'No Email'}
            </Text>
          </View>
        )}
      />

      {/* Contact Modal */}
      <Modal
        visible={showContacts}
        animationType="slide"
        onRequestClose={() => setShowContacts(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select a Contact</Text>

          {/* Search Bar */}
          {isSearching ? (
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Search by name"
                value={searchQuery}
                onChangeText={handleSearch}
              />
              <TouchableOpacity
                style={styles.cancelSearchButton}
                onPress={() => {
                  setIsSearching(false);
                  setSearchQuery('');
                  setFilteredContacts(contacts); // Reset to all contacts
                }}
              >
                <Text style={styles.cancelSearchText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.searchButton}
              onPress={() => setIsSearching(true)}
            >
              <Icon name="search" size={24} color="#fff" />
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          )}

          {/* Contact List */}
          <FlatList
            data={filteredContacts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.contactItem}
                onPress={() => selectContact(item)}
              >
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactEmail}>
                  {item.emails && item.emails.length > 0 ? item.emails[0].email : 'No Email'}
                </Text>
              </TouchableOpacity>
            )}
            keyboardShouldPersistTaps="handled"
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowContacts(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const circleSize = 40;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 40,
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  advisorItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
    width: '95%',
  },
  advisorName: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  advisorEmail: {
    fontSize: 16,
    color: '#666',
    alignSelf: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
    alignSelf: 'center',
    width: '50%',
  },
  halfInput: {
    flex: 1,
    margin: 2.5,
  },
  emailInput: {
    flex: 1,
    marginRight: 10,
  },
  addIcon: {
    padding: 5,
  },
  continueButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  stepCircle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepCircle: {
    backgroundColor: '#1EA896',
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeStepNumber: {
    color: '#fff',
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 50,
    alignSelf: 'center',
  },
  footerContainer: {
    width: '100%',
    alignSelf: 'center',
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
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  cancelSearchButton: {
    marginLeft: 10,
    padding: 10,
  },
  cancelSearchText: {
    color: '#1EA896',
    fontSize: 16,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1EA896',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});