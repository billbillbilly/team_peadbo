import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const focuses = [
  { id: 1, name: 'Professional' },
  { id: 2, name: 'Personal' },
  { id: 3, name: 'Wellness' },
  { id: 4, name: 'Friend Circle' },
  { id: 5, name: 'Meeting' },
  { id: 6, name: 'Other' },
];

export default function SetFocusScreen({ navigation }) {
  const [selectedFocus, setSelectedFocus] = useState(null);

  const handleContinue = () => {
    if (selectedFocus) {
      navigation.navigate('BoardDetailsScreen', { focus: selectedFocus });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Choose your focus</Text>
      <View style={styles.stepIndicator}>
        {[1, 2, 3, 4, 5].map((step) => (
          <View
            key={step}
            style={[
              styles.stepCircle,
              step === 1 && styles.activeStepCircle,
            ]}
          >
            <Text
              style={[
                styles.stepNumber,
                step === 1 && styles.activeStepNumber,
              ]}
            >
              {step}
            </Text>
          </View>
        ))}
      </View>
      <Text style={styles.subtitle}>
        Giving your board a focus gives members a better idea of what to expect. You can change this later.
      </Text>
      <View style={styles.focusContainer}>
        {focuses.map((focus) => (
          <TouchableOpacity
            key={focus.id}
            style={[styles.focusItem, selectedFocus === focus.name && styles.selectedFocus]}
            onPress={() => setSelectedFocus(focus.name)}
          >
            <Text style={styles.focusText}>{focus.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.continueButton, !selectedFocus && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!selectedFocus}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const circleSize = 40;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  focusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  focusItem: {
    width: '48%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedFocus: {
    backgroundColor: 'rgba(30, 168, 150, 0.2)',
    borderColor: '#1EA896',
  },
  focusText: {
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
  continueButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});