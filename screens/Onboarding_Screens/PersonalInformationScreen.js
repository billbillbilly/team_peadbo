import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const PersonalInformationScreen = ({ navigation }) => {
  const [resume, setResume] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');

  // Replace education Picker with DropDownPicker states
  const [openEducation, setOpenEducation] = useState(false);
  const [valueEducation, setValueEducation] = useState(null);
  const [educationItems, setEducationItems] = useState([
    { label: 'Select Education Level', value: null },
    { label: 'Associate', value: 'associate' },
    { label: "Bachelor's", value: 'bachelor' },
    { label: "Master's", value: 'master' },
    { label: 'PhD', value: 'phd' },
  ]);

  // Upload logic
  const handleResumeUpload = () => {
    console.log('Resume upload triggered');
  };

  const handleNext = () => {
    navigation.navigate('CommunicationStyleScreen');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.stepIndicatorContainer}>
          <View style={[styles.dotBase, styles.filledDot]} />
          <View style={[styles.dotBase, styles.partialDot]} />
          <View style={styles.dotBase} />
          <View style={styles.dotBase} />
          <View style={styles.dotBase} />
        </View>

        <Text style={styles.headerTitle}>Resume Input</Text>
        <TouchableOpacity
          style={styles.resumeUpload}
          onPress={handleResumeUpload}
        >
          <Text style={styles.uploadText}>
            {resume ? 'Resume Uploaded' : 'Upload your resume'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.subHeaderTitle}>Personal Information</Text>
        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>

        <View style={styles.inputRow}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="State"
              value={stateVal}
              onChangeText={setStateVal}
            />
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.subHeaderTitle}>Education</Text>
        <DropDownPicker
          open={openEducation}
          value={valueEducation}
          items={educationItems}
          setOpen={setOpenEducation}
          setValue={setValueEducation}
          setItems={setEducationItems}
          placeholder="Select Education Level"
          style={styles.picker}
          dropDownContainerStyle={styles.dropDownContainer}
          onChangeValue={(value) => {
            console.log('Selected education:', value);
          }}
          listMode="MODAL" // Use modal to avoid nested VirtualizedLists
        />

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PersonalInformationScreen;

const DOT_SIZE = 12;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    alignItems: 'flex-start',
    zIndex: 0,
  },
  stepIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginBottom: 40,
  },
  dotBase: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#EEE',
    marginHorizontal: 5,
  },
  filledDot: {
    backgroundColor: '#1EA896',
  },
  partialDot: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#1EA896',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  resumeUpload: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 8,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadText: {
    color: '#999',
  },
  subHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  dropDownContainer: {
    borderColor: '#ccc',
    borderWidth: 1,
    zIndex: 1000,
  },
  nextButton: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#1EA896',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 8,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
