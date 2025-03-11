import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Platform } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function PickAdvisorsScreen({ navigation, route }) {
  const { focus, boardName, description } = route.params;
  const [selectedAdvisors, setSelectedAdvisors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);
  const [showContacts, setShowContacts] = useState(false);

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
      console.log('Contacts loaded:', data);
    }
  };

  const handleContinue = () => {
    navigation.navigate('CreateInvitationScreen', { focus, boardName, description, advisors: selectedAdvisors, firstName, lastName, email });
  };

  const selectContact = (contact) => {
    setSelectedAdvisors([...selectedAdvisors, contact]);
    setShowContacts(false);
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
      {showContacts && (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => selectContact(item)}
            >
              <Text style={styles.contactName}>
                {item.name}
              </Text>
              <Text style={styles.contactEmail}>
                {item.emails && item.emails.length > 0 ? item.emails[0].email : 'No Email'}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainer}>
      <Text style={styles.subtitle}>Or enter their information manually:</Text>
      <View style={styles.nameContainer}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity
        style={[styles.continueButton, selectedAdvisors.length === 0 && styles.disabledButton]}
        onPress={handleContinue}
        disabled={selectedAdvisors.length === 0}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={selectedAdvisors}
      keyExtractor={(item) => item.id.toString()}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
      renderItem={({ item }) => (
        <View style={styles.advisorItem}>
          <Text style={styles.advisorName}>
            {item.name}
          </Text>
          <Text style={styles.advisorEmail}>
            {item.emails && item.emails.length > 0 ? item.emails[0].email : 'No Email'}
          </Text>
        </View>
      )}
    />
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
    width: '95%',
    alignSelf: 'center',
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    fontSize: 16,
    alignSelf: 'center',
    width: '95%',
  },
  halfInput: {
    flex: 1,
    margin: 2.5,
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
});