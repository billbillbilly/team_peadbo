import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PersonalInformationScreen = ({ navigation }) => {
  const [resume, setResume] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');
  const [education, setEducation] = useState('');

  // Add upload logic
  const handleResumeUpload = () => {
    console.log('Resume upload triggered');
  };

  const handleNext = () => {
    navigation.navigate('CommunicationStyleScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={education}
            onValueChange={(value) => setEducation(value)}
            style={styles.picker}
          >
            <Picker.Item label="Select Education Level" value="" />
            <Picker.Item label="Associate" value="associate" />
            <Picker.Item label="Bachelor's" value="bachelor" />
            <Picker.Item label="Master's" value="master" />
            <Picker.Item label="PhD" value="phd" />
          </Picker>
        </View>

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
  pickerContainer: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    height: 50,
  },
  picker: {
    width: '100%',
    height: 50, 
    fontSize: 14,
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
