import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function AddBoardDetailsScreen({ navigation, route }) {
  const { focus } = route.params;
  const [boardName, setBoardName] = useState('');
  const [description, setDescription] = useState('');

  const handleContinue = () => {
    if (boardName && description) {
      navigation.navigate('PickAdvisors', { focus, boardName, description });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Board Details</Text>
      <Text style={styles.subtitle}>Example: Cameron’s Career Advancement Board (This will be visible to Board Members)</Text>
      <TextInput
        style={styles.input}
        placeholder="Board Name"
        value={boardName}
        onChangeText={setBoardName}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Description"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={[styles.continueButton, (!boardName || !description) && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!boardName || !description}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#00bcd4',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});