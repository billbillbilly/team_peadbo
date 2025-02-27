import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const BoardDetailsScreen = ({ navigation }) => {
  const [boardName, setBoardName] = useState('');
  const [boardDescription, setBoardDescription] = useState('');
  const [boardDuration, setBoardDuration] = useState('');
  const [boardFrequency, setBoardFrequency] = useState('');

  const handleContinue = () => {
    navigation.navigate('AdvisorSelectionScreen', { boardName, boardDescription, boardDuration, boardFrequency });
  };

  const getInputStyle = (value) => ({
    borderColor: value ? '#1EA896' : '#CCC',
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Board Details</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.stepCircle,
                step === 2 && styles.activeStepCircle,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step === 2 && styles.activeStepNumber,
                ]}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Board Name</Text>
        <TextInput
          style={[styles.input, getInputStyle(boardName)]}
          placeholder="Enter board name"
          value={boardName}
          onChangeText={setBoardName}
        />

        <Text style={styles.label}>Board Description</Text>
        <TextInput
          style={[styles.input, styles.multilineInput, getInputStyle(boardDescription)]}
          placeholder="Enter board description"
          value={boardDescription}
          onChangeText={setBoardDescription}
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>How long will your board last?</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select duration...',
            value: null,
          }}
          items={[
            { label: 'One Year (Most Common)', value: 'One Year' },
            { label: '3 Months', value: '3 Months' },
            { label: '6 Months', value: '6 Months' },
            { label: '9 Months', value: '9 Months' },
          ]}
          value={boardDuration}
          onValueChange={(value) => setBoardDuration(value)}
          style={{
            ...pickerSelectStyles,
            inputIOS: { ...pickerSelectStyles.inputIOS, ...getInputStyle(boardDuration) },
            inputAndroid: { ...pickerSelectStyles.inputAndroid, ...getInputStyle(boardDuration) },
          }}
          useNativeAndroidPickerStyle={false}
        />

        <Text style={styles.label}>How often will your board meet?</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select frequency...',
            value: null,
          }}
          items={[
            { label: 'Bi-Weekly', value: 'Bi-Weekly' },
            { label: 'Once a Month', value: 'Once a Month' },
            { label: 'Every 3 Months', value: 'Every 3 Months' },
            { label: 'Every 6 Months', value: 'Every 6 Months' },
            { label: 'Once Per Year', value: 'Once Per Year' },
          ]}
          value={boardFrequency}
          onValueChange={(value) => setBoardFrequency(value)}
          style={{
            ...pickerSelectStyles,
            inputIOS: { ...pickerSelectStyles.inputIOS, ...getInputStyle(boardFrequency) },
            inputAndroid: { ...pickerSelectStyles.inputAndroid, ...getInputStyle(boardFrequency) },
          }}
          useNativeAndroidPickerStyle={false}
        />
      </View>
      <TouchableOpacity
        style={[styles.continueButton, (!boardName || !boardDescription || !boardDuration || !boardFrequency) && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!boardName || !boardDescription || !boardDuration || !boardFrequency}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const circleSize = 40;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
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
  form: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  continueButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 8,
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

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 20,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 20,
  },
});

export default BoardDetailsScreen;