import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { generateText } from '../../OpenAIService';

// Predefined templates for invitations and agendas
const templates = {
  'Board Invite Template 1': 'Hello,\n\nI hope this email finds you well. I am reaching out to invite you to be part of my Personal Advisory Board...',
  'Board Invite Template 2': 'Hello,\n\nI admire your expertise and accomplishments, and I would be honored to have you on my Personal Advisory Board...',
  'Board Invite Template 3': 'Hello,\n\nI hope this message finds you in good spirits. I am reaching out to extend a special invitation to you...',
  'Board Kickoff Agenda 1': "Meeting's Purpose:\n\nKick off the board, establish a meeting cadence, and begin to discuss strategies...",
  'Board Kickoff Agenda 2': "Meeting's Purpose:\n\nKick off the board, establish a meeting cadence, and begin to discuss strategies...",
  'Meeting Agenda': "Meeting's Purpose:\n\nTo review individual progress, provide updates, and ensure accountability towards set goals...",
};

// Convert templates into dropdown items
const templateItems = Object.keys(templates).map(key => ({
  label: key,
  value: key,
}));

function CreateInvitationScreen({ navigation, route }) {
  // Destructure parameters passed from the previous screen
  const {
    focus = '',
    boardName = '',
    boardDescription = '',
    boardDuration = '',
    boardFrequency = '',
    advisors = [],
  } = route.params || {};

  // State variables for managing the invitation message and templates
  const [message, setMessage] = useState(''); // The invitation message
  const [selectedTemplate, setSelectedTemplate] = useState(null); // Selected template
  const [openTemplate, setOpenTemplate] = useState(false); // Dropdown state for templates
  const [valueTemplate, setValueTemplate] = useState(null); // Selected template value
  const [loading, setLoading] = useState(false); // Loading state for AI template generation

  // Navigate to the TimeAvailabilityScreen with the form data
  const handleContinue = () => {
    navigation.navigate('TimeAvailabilityScreen', { 
      focus,
      boardName,
      boardDescription,
      boardDuration,
      boardFrequency,
      advisors,
      message,
    });
  };

  // Navigate back to the previous screen
  const handleBack = () => {
    navigation.goBack();
  };

  // Generate an AI-based template for the invitation message
  const generateTemplate = async () => {
    setLoading(true); // Set loading to true
    try {
      const generatedMessage = await generateText(); // Call the AI service to generate text
      setMessage(generatedMessage); // Update the message with the generated text
    } catch (error) {
      console.error('Error generating template:', error); // Log any errors
    } finally {
      setLoading(false); // Set loading to false
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* FlatList to wrap the content */}
      <FlatList
        contentContainerStyle={styles.scrollContainer}
        data={[{}]} // Empty array to simulate the wrapping container
        renderItem={() => (
          <View style={styles.content}>
            {/* Header Section */}
            <View style={styles.header}>
              <Text style={styles.title}>Create Invitation</Text>
              <View style={styles.stepIndicator}>
                {[1, 2, 3, 4, 5].map((step) => (
                  <View
                    key={step}
                    style={[styles.stepCircle, step === 4 && styles.activeStepCircle]}
                  >
                    <Text style={[styles.stepNumber, step === 4 && styles.activeStepNumber]}>
                      {step}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              This is the email that will be sent to your invitees. You can personalize the invite to each invitee.
            </Text>

            {/* Template Dropdown */}
            <DropDownPicker
              open={openTemplate}
              value={valueTemplate}
              items={templateItems}
              setOpen={setOpenTemplate}
              setValue={setValueTemplate}
              placeholder="Select a template"
              onChangeValue={(value) => {
                setSelectedTemplate(value); // Update the selected template
                setMessage(templates[value]); // Set the message to the selected template
              }}
              style={styles.picker}
              dropDownContainerStyle={styles.dropDownContainer}
            />

            {/* Generate AI Template Button */}
            <TouchableOpacity
              style={styles.generateButton}
              onPress={generateTemplate}
              disabled={loading} // Disable button while loading
            >
              <Text style={styles.generateButtonText}>
                {loading ? 'Loading...' : 'Generate AI Template'}
              </Text>
            </TouchableOpacity>

            {/* Message Input */}
            <TextInput
              style={styles.messageInput}
              multiline
              numberOfLines={25}
              placeholder="Write your message here..."
              value={message}
              onChangeText={setMessage}
            />

            {/* Continue Button */}
            <TouchableOpacity
              style={[styles.continueButton, !message && styles.disabledButton]}
              onPress={handleContinue}
              disabled={!message} // Disable button if no message is provided
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
          </View>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const circleSize = 40;

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  content: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
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
  messageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flex: 1,
    textAlignVertical: 'top',
    minHeight: 200,
  },
  continueButton: {
    backgroundColor: '#1EA896',
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
  generateButton: {
    backgroundColor: '#1EA896',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 16,
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
  picker: {
    borderColor: '#CCC',
    marginBottom: 20,
  },
  dropDownContainer: {
    borderColor: '#CCC',
    zIndex: 1000,
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

export default CreateInvitationScreen;