import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const BoardDetailsScreen = ({ navigation, route }) => {
  // Destructure the `focus` parameter passed from the previous screen
  const { focus } = route.params;

  // State variables for managing form inputs
  const [boardName, setBoardName] = useState(''); // Board name input
  const [boardDescription, setBoardDescription] = useState(''); // Board description input
  const [boardDuration, setBoardDuration] = useState(''); // Selected board duration
  const [boardFrequency, setBoardFrequency] = useState(''); // Selected board frequency

  // State variables for managing dropdowns
  const [openDuration, setOpenDuration] = useState(false); // Dropdown state for duration
  const [valueDuration, setValueDuration] = useState(null); // Selected value for duration
  const [openFrequency, setOpenFrequency] = useState(false); // Dropdown state for frequency
  const [valueFrequency, setValueFrequency] = useState(null); // Selected value for frequency

  // Dropdown options for duration and frequency
  const [durations, setDurations] = useState([
    { label: 'One Year (Most Common)', value: 'One Year' },
    { label: '3 Months', value: '3 Months' },
    { label: '6 Months', value: '6 Months' },
    { label: '9 Months', value: '9 Months' },
  ]);
  const [frequencies, setFrequencies] = useState([
    { label: 'Bi-Weekly', value: 'Bi-Weekly' },
    { label: 'Once a Month', value: 'Once a Month' },
    { label: 'Every 3 Months', value: 'Every 3 Months' },
    { label: 'Every 6 Months', value: 'Every 6 Months' },
    { label: 'Once Per Year', value: 'Once Per Year' },
  ]);

  // Navigate to the AdvisorSelectionScreen with the form data
  const handleContinue = () => {
    navigation.navigate('AdvisorSelectionScreen', { 
      focus,
      boardName,
      boardDescription: boardDescription,
      boardDuration: valueDuration,
      boardFrequency: valueFrequency
    });
  };

  // Navigate back to the previous screen
  const handleBack = () => {
    navigation.goBack();
  };

  // Dynamically style input fields based on whether they have a value
  const getInputStyle = (value) => ({
    borderColor: value ? '#1EA896' : '#CCC',
  });

  // Form data configuration for rendering inputs and dropdowns
  const formData = [
    {
      label: 'Board Name',
      value: boardName,
      onChange: setBoardName,
      component: (
        <TextInput
          style={[styles.input, getInputStyle(boardName)]}
          placeholder="Enter board name"
          value={boardName}
          onChangeText={setBoardName}
        />
      ),
    },
    {
      label: 'Board Description',
      value: boardDescription,
      onChange: setBoardDescription,
      component: (
        <TextInput
          style={[styles.input, styles.multilineInput, getInputStyle(boardDescription)]}
          placeholder="Enter board description"
          value={boardDescription}
          onChangeText={setBoardDescription}
          multiline
          numberOfLines={4}
        />
      ),
    },
    {
      label: 'How long will your board last?',
      component: (
        <DropDownPicker
          open={openDuration}
          value={valueDuration}
          items={durations}
          setOpen={setOpenDuration}
          setValue={setValueDuration}
          setItems={setDurations}
          containerStyle={{ marginBottom: 20 }}
          style={[styles.picker, getInputStyle(valueDuration)]}
          dropDownContainerStyle={{ borderColor: '#CCC', zIndex: 1000 }}
          onChangeValue={(value) => setBoardDuration(value)}
          zIndex={1000}
          zIndexInverse={3000}
        />
      ),
    },
    {
      label: 'How often will your board meet?',
      component: (
        <DropDownPicker
          open={openFrequency}
          value={valueFrequency}
          items={frequencies}
          setOpen={setOpenFrequency}
          setValue={setValueFrequency}
          setItems={setFrequencies}
          containerStyle={{ marginBottom: 140 }}
          style={[styles.picker, getInputStyle(valueFrequency)]}
          dropDownContainerStyle={{ borderColor: '#CCC', zIndex: 500 }}
          onChangeValue={(value) => setBoardFrequency(value)}
          zIndex={500}
          zIndexInverse={2000}
        />
      ),
    },
  ];

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Header Section */}
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

      {/* Form Fields */}
      <FlatList
        data={formData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.formItem}>
            <Text style={styles.label}>{item.label}</Text>
            {item.component}
          </View>
        )}
        contentContainerStyle={styles.scrollContainer}
      />

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, (!boardName || !boardDescription || !boardDuration || !boardFrequency) && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!boardName || !boardDescription || !boardDuration || !boardFrequency}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBack}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const circleSize = 40;

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  formItem: {
    marginBottom: 20,
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
  picker: {
    borderColor: '#CCC',
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
  backButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#1EA896',
    fontSize: 16,
  },
});

export default BoardDetailsScreen;