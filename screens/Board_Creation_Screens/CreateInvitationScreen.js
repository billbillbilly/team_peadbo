import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { generateText } from '../../OpenAIService';

const templates = {
  'Board Invite Template 1': 'Hello,\n\nI hope this email finds you well. I am reaching out to invite you to be part of my Personal Advisory Board. Your expertise and achievements have always impressed and inspired me, and I genuinely admire your valuable insights.\n\nI believe that your guidance would significantly contribute to my personal and professional growth. With a commitment of just six hours per year, your input would make a meaningful impact on my professional journey.\n\nIf you are interested in accepting this invitation, I would be thrilled to have you on board. I am more than happy to provide further details and answer any questions you may have. Your contribution would be truly appreciated and respected.\n\nThank you for considering this opportunity, and I eagerly await your response.',
  'Board Invite Template 2': 'Hello,\n\nI admire your expertise and accomplishments, and I would be honored to have you on my Personal Advisory Board.\n\nWith a commitment of only six hours per year, your guidance would greatly contribute to my personal and professional growth. Your involvement would make a significant impact, and I genuinely appreciate your time and expertise. Your participation would mean a lot to me, and I am eager to discuss further details.\n\nThank you for considering this opportunity, and I look forward to hearing from you.',
  'Board Invite Template 3': 'Hello,\n\nI hope this message finds you in good spirits. I am reaching out to extend a special invitation to you to join my Personal Advisory Board. Your expertise and accomplishments have consistently impressed me, and I believe your insights are exactly what I need to achieve my own goals.\n\nI greatly admire your profound knowledge and experience in <specific area>. As I embark on this journey, I recognize the immense value your guidance could bring. Considering your busy schedule, I want to emphasize that this commitment would require just six hours of your time per year. Your contributions would play a crucial role in assisting me with the challenges and complexities I may encounter along the way. I genuinely hope that you will accept this invitation and join me in this endeavor. I am more than happy to provide additional details and address any questions or concerns you may have.\n\nThank you for considering this opportunity, and I eagerly await your response.',
  'Board Kickoff Agenda 1': "Meeting's Purpose:\n\nKick off the board, establish a meeting cadence, and begin to discuss strategies\n\nAgenda:\n\n\u2022 Welcome & Icebreaker\n\u2022 Peadbo Overview\n\u2022 Board Member Introductions\n\u2022 My Mission & Goals\n\u2022 Recent Accomplishments/Current Activities\n\u2022 Strategic Discussion\n\u2022 Specific Asks\n\u2022 Recap of Action Items & Next Steps\n\u2022 Closing\n\nIf this time doesn’t work, please let me know as soon as possible.",
  'Board Kickoff Agenda 2': "Meeting's Purpose:\n\nKick off the board, establish a meeting cadence, and begin to discuss strategies\n\nAgenda:\n\n\u2022 Welcome and Opening Remarks\n\u2022 Goals and Objectives\n\u2022 Discussion on Current Challenges\n\u2022 Brainstorming and Idea Generation\n\u2022 Wrap-up and Next Steps\n\u2022 Meeting Cadence and Logistics\n\nIf this time doesn’t work, please let me know as soon as possible.",
  'Meeting Agenda' : "Meeting's Purpose:\n\nTo review individual progress, provide updates, and ensure accountability towards set goals.\n\nAgenda:\n\n\u2022 Welcome and Introduction (5 minutes)\n\u2022 Progress Update and Achievements (15 minutes)\n\u2022 Challenges and Lessons Learned (10 minutes)\n\u2022 Goal Evaluation and Assessment (15 minutes)\n\u2022 Action Plan Adjustments (5 minutes)\n\u2022 Next Steps and Commitments (5 minutes)\n\u2022 Closing Remarks (5 minutes)",
}

function CreateInvitationScreen({ navigation, route }) {
  const { focus, boardName, description, advisors } = route.params;
  const [message, setMessage] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleContinue = () => {
    navigation.navigate('TimeAvailabilityScreen', { focus, boardName, description, advisors, message });
  };

  const generateTemplate = async () => {
    try {
      const generatedMessage = await generateText();
      setMessage(generatedMessage);
    } catch (error) {
      console.error('Error generating template:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Create Invitation</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.stepCircle,
                step === 4 && styles.activeStepCircle,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step === 4 && styles.activeStepNumber,
                ]}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.subtitle}>This is the email that will be sent to your invitees. You can personalize the invite to each invitee.</Text>
      <RNPickerSelect
        placeholder={{
          label: 'Select a template...',
          value: null,
        }}
        items={Object.keys(templates).map((templateKey) => ({
          label: templateKey,
          value: templates[templateKey],
        }))}
        onValueChange={(value) => {
          setSelectedTemplate(value);
          setMessage(value);
        }}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        Icon={() => <Ionicons name="caret-down-outline" size={24} color="gray" />}
      />
      <TouchableOpacity style={styles.generateButton} onPress={generateTemplate}>
        <Text style={styles.generateButtonText}>Generate AI Template</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.messageInput}
        multiline
        numberOfLines={25}
        placeholder="Write your message here..."
        value={message}
        onChangeText={setMessage}
      />
      <TouchableOpacity
        style={[styles.continueButton, !message && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!message}
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
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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
    borderColor: '#ccc',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 20,
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
});

export default CreateInvitationScreen;