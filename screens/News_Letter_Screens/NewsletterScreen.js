import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

export default function NewsletterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Newsletter</Text>
      <TextInput
        style={styles.search}
        placeholder="Search here"
        placeholderTextColor="#999"
      />

      <TouchableOpacity
        style={styles.createCard}
        onPress={() => navigation.navigate('CreateNewsletter')}
      >
        <Icon name="plus" type="font-awesome" size={24} />
        <Text style={styles.createText}>Create new newsletter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  title: { fontSize: 32, fontWeight: '700', marginBottom: 24 },
  search: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 32,
  },
  createCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#AAA',
    borderRadius: 8,
    padding: 24,
  },
  createText: { marginLeft: 12, fontSize: 18, fontWeight: '500' },
});
