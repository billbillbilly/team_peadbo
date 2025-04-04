import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Contacts from 'expo-contacts';

const PEADBO_COLORS = {
  primary: '#1EA896',
  secondary: '#FF715B',
  background: '#F9F9F9',
  text: '#333333',
  lightText: '#777777',
  border: '#DDDDDD',
  white: '#FFFFFF'
};

export default function ContactPickerScreen({ navigation, route }) {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContacts, setSelectedContacts] = useState(route.params?.initialSelected || []);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loadContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails],
        });
        
        if (data.length > 0) {
          const formattedContacts = data
            .filter(c => c.name && c.emails?.[0]?.email)
            .map(c => ({
              id: c.id,
              name: c.name,
              email: c.emails[0].email
            }));
          
          setContacts(formattedContacts);
          setFilteredContacts(formattedContacts);
        }
      }
    };

    loadContacts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [searchQuery, contacts]);

  const toggleContactSelection = (contact) => {
    setSelectedContacts(prev => {
      const isSelected = prev.some(c => c.id === contact.id);
      if (isSelected) {
        return prev.filter(c => c.id !== contact.id);
      } else {
        return [...prev, contact];
      }
    });
  };

  const handleDone = () => {
    route.params?.onSelectContacts(selectedContacts);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={PEADBO_COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Recipients</Text>
        <TouchableOpacity onPress={handleDone}>
          <Text style={styles.doneButton}>Done ({selectedContacts.length})</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search contacts..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[
              styles.contactItem,
              selectedContacts.some(c => c.id === item.id) && styles.selectedContactItem
            ]}
            onPress={() => toggleContactSelection(item)}
          >
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactEmail}>{item.email}</Text>
            </View>
            {selectedContacts.some(c => c.id === item.id) && (
              <Icon name="check" size={24} color={PEADBO_COLORS.primary} />
            )}
          </TouchableOpacity>
        )}
      />
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
  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    margin: 16,
    backgroundColor: PEADBO_COLORS.white,
    color: PEADBO_COLORS.text,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: PEADBO_COLORS.border,
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
  },
  contactEmail: {
    fontSize: 14,
    color: PEADBO_COLORS.lightText,
  },
});