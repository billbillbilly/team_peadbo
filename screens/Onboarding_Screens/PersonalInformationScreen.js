import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import { Storage } from 'aws-amplify';
// import { ResumeData } from '../../models';
// import { DataStore } from 'aws-amplify';

const defaultUserId = 'user1';

export default function PersonalInformationScreen({ navigation }) {
  const [resumeUrls, setResumeUrls] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');

  const [openEducation, setOpenEducation] = useState(false);
  const [valueEducation, setValueEducation] = useState(null);
  const [educationItems, setEducationItems] = useState([
    { label: 'Select Education Level', value: null },
    { label: 'Associate', value: 'associate' },
    { label: "Bachelor's", value: 'bachelor' },
    { label: "Master's", value: 'master' },
    { label: 'PhD', value: 'phd' },
  ]);

  const handleResumeUpload = async () => {
    try {
      if (resumeUrls.length >= 5) {
        Alert.alert('Limit reached', 'You can only upload up to 5 resumes.');
        return;
      }

      const result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
      if (result.type === 'success') {
        const response = await fetch(result.uri);
        const blob = await response.blob();

        const fileName = `${defaultUserId}_${Date.now()}_${result.name}`;
        await Storage.put(`resumes/${fileName}`, blob, {
          contentType: 'application/pdf',
        });
        const downloadUrl = await Storage.get(`resumes/${fileName}`);

        const updatedResumes = [...resumeUrls, downloadUrl];
        setResumeUrls(updatedResumes);

        console.log('Resume uploaded to:', downloadUrl);
      }
    } catch (error) {
      console.error('Upload error:', error);
      Alert.alert('Upload failed', 'Could not upload resume');
    }
  };

  const handleNext = async () => {
    if (!firstName || !lastName || !phone || !email || !city || !stateVal || !valueEducation) {
      Alert.alert('Error', 'Please fill all personal information fields');
      return;
    }

    try {
      console.log('Simulate resume save');
      // Uncomment below when DataStore and model are ready
      // await DataStore.save(
      //   new ResumeData({
      //     userId: defaultUserId,
      //     resumes: resumeUrls,
      //     firstName,
      //     lastName,
      //     phone,
      //     email,
      //     city,
      //     state: stateVal,
      //     education: valueEducation,
      //   })
      // );

      Alert.alert('Success', 'Personal information saved');
      navigation.navigate('CommunicationStyleScreen');
    } catch (error) {
      console.error('Save error:', error);
      Alert.alert('Error', 'Could not save personal information');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <ScrollView
        style={{ flex: 1 }}
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
          <TouchableOpacity style={styles.resumeUpload} onPress={handleResumeUpload}>
            <Text style={styles.uploadText}>
              {resumeUrls.length > 0 ? `${resumeUrls.length} Resumes Uploaded` : 'Upload your resume'}
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
            listMode="SCROLLVIEW"
            open={openEducation}
            value={valueEducation}
            items={educationItems}
            setOpen={setOpenEducation}
            setValue={setValueEducation}
            setItems={setEducationItems}
            placeholder="Select Education Level"
            style={styles.picker}
            dropDownContainerStyle={styles.dropDownContainer}
          />

          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const DOT_SIZE = 12;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
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
  picker: {
    borderColor: '#CCC',
    marginBottom: 20,
  },
  dropDownContainer: {
    borderColor: '#CCC',
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