import React from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

export default function NewsletterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchField}
          placeholder="Search here"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addContactButton}
        onPress={() => navigation.navigate('CreateNewsletter')}
      >
        <Icon name="plus" type="font-awesome" size={20} color="#fff" />
        <Text style={styles.addContactText}>Create new newsletter</Text>
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
  searchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 25,
    overflow: 'hidden',
    height: 48,
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  searchField: {
    flex: 1,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  searchButton: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#DDD',
    backgroundColor: '#FFF',
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  addContactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
  },
  addContactText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
