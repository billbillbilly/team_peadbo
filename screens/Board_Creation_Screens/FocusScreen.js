import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

// Predefined focus options for the board
const focuses = [
  { id: 1, name: 'Professional' },
  { id: 2, name: 'Personal' },
  { id: 3, name: 'Wellness' },
  { id: 4, name: 'Friend Circle' },
  { id: 5, name: 'Meeting' },
  { id: 6, name: 'Other' },
];

export default function SetFocusScreen({ navigation }) {
  // State to track the selected focus
  const [selectedFocus, setSelectedFocus] = useState(null);

  // Navigate to the BoardDetailsScreen with the selected focus
  const handleContinue = () => {
    if (selectedFocus) {
      navigation.navigate('BoardDetailsScreen', { focus: selectedFocus });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <Text style={styles.title}>Choose your focus</Text>
      <View style={styles.stepIndicator}>
        {[1, 2, 3, 4, 5].map((step) => (
          <View
            key={step}
            style={[
              styles.stepCircle,
              step === 1 && styles.activeStepCircle, // Highlight the current step
            ]}
          >
            <Text
              style={[
                styles.stepNumber,
                step === 1 && styles.activeStepNumber, // Highlight the current step number
              ]}
            >
              {step}
            </Text>
          </View>
        ))}
      </View>

      {/* Subtitle Section */}
      <Text style={styles.subtitle}>
        Giving your board a focus gives members a better idea of what to expect. You can change this later.
      </Text>

      {/* Focus Options */}
      <View style={styles.focusContainer}>
        {focuses.map((focus) => (
          <TouchableOpacity
            key={focus.id}
            style={[
              styles.focusItem,
              selectedFocus === focus.name && styles.selectedFocus, // Highlight the selected focus
            ]}
            onPress={() => setSelectedFocus(focus.name)} // Set the selected focus
          >
            <Text style={styles.focusText}>{focus.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !selectedFocus && styles.disabledButton]} // Disable button if no focus is selected
        onPress={handleContinue}
        disabled={!selectedFocus} // Disable button if no focus is selected
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const circleSize = 40;

// Styles for the screen
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
    backgroundColor: 'rgba(30, 168, 150, 0.2)', // Highlight selected focus
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
    backgroundColor: '#1EA896', // Highlight the current step
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeStepNumber: {
    color: '#fff', // Highlight the current step number
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
    backgroundColor: '#ccc', // Style for disabled button
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});