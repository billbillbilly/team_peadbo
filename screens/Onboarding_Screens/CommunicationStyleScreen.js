// screens/Onboarding_Screens/CommunicationStyleScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// List of questions for the onboarding process
const questions = [
  {
    key: 'goal',
    question: 'What is your primary goal for using Peadbo?',
    options: [
      'Build and manage a personal advisory board',
      'Share updates and insights with my network through a newsletter',
      'Organize and strengthen my professional relationships',
      'I’m not sure yet; just exploring',
    ],
  },
  {
    key: 'updateMethod',
    question: 'How do you currently keep your supporters (friends, family, colleagues) updated?',
    options: [
      'Social media (LinkedIn, Twitter, Instagram, etc.)',
      'Email updates or newsletters',
      'One-on-one messages or calls',
      'I don’t regularly share updates',
    ],
  },
  {
    key: 'connectWith',
    question: 'Who do you primarily want to connect with through Peadbo?',
    options: [
      'Close mentors and advisors',
      'Peers and colleagues in my industry',
      'A broader audience of supporters and followers',
      'A mix of all the above',
    ],
  },
  {
    key: 'supportType',
    question: 'What type of support do you expect from your advisory network?',
    options: [
      'Career or business advice',
      'Feedback on ideas and projects',
      'Introductions and networking opportunities',
      'General encouragement and accountability',
    ],
  },
  {
    key: 'writingComfort',
    question: 'How comfortable are you with writing and sharing updates?',
    options: [
      'Very comfortable – I already do this regularly',
      'Somewhat comfortable – I share updates occasionally',
      'Not very comfortable – I could use guidance and templates',
      'Uncomfortable – I’m new to this and need a lot of help',
    ],
  },
];

const CommunicationStyleScreen = () => {
  // State to track the current question index
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // State to store user responses
  const [responses, setResponses] = useState({});

  // Navigation object to navigate between screens
  const navigation = useNavigation();

  // Get the current question based on the active index
  const current = questions[activeQuestionIndex];

  // Handle selecting an option for the current question
  const handleOptionSelect = (option) => {
    setResponses((prev) => ({
      ...prev,
      [current.key]: option, // Store the selected option using the question key
    }));
  };

  // Navigate to the next question or finish the onboarding process
  const goNext = () => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1); // Move to the next question
    } else {
      console.log('All responses:', responses); // Log all responses for debugging
      // Navigate to the main screen or home after completing the onboarding
      navigation.navigate('Main', { screen: 'Home' });
    }
  };

  // Navigate to the previous question
  const goBack = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex((prev) => prev - 1); // Move to the previous question
    }
  };

  // Check if an option is selected for the current question
  const isOptionSelected = responses[current.key];

  return (
    <View style={styles.container}>
      {/* Display the question counter */}
      <Text style={styles.questionCounter}>
        Question {activeQuestionIndex + 1} of {questions.length}
      </Text>

      {/* Display the current question */}
      <Text style={styles.questionText}>{current.question}</Text>

      {/* Render the options for the current question */}
      {current.options.map((option) => (
        <TouchableOpacity
          key={option} // Use the option text as the key
          style={[
            styles.optionButton,
            responses[current.key] === option && styles.selectedOption, // Highlight the selected option
          ]}
          onPress={() => handleOptionSelect(option)} // Handle option selection
        >
          <Text
            style={[
              styles.optionText,
              responses[current.key] === option && styles.selectedOptionText, // Change text color for the selected option
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Navigation buttons */}
      <View style={styles.navigationButtons}>
        {/* Back button */}
        {activeQuestionIndex > 0 && (
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}

        {/* Next or Finish button */}
        <TouchableOpacity
          onPress={goNext}
          style={[styles.nextButton, !isOptionSelected && styles.disabled]} // Disable the button if no option is selected
          disabled={!isOptionSelected} // Disable the button if no option is selected
        >
          <Text style={styles.buttonText}>
            {activeQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'} {/* Show "Finish" on the last question */}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommunicationStyleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9', // Light gray background
    padding: 24, // Padding around the content
    justifyContent: 'center', // Center the content vertically
  },
  questionCounter: {
    fontSize: 14, // Small font size for the counter
    color: '#888', // Gray color for the counter text
    marginBottom: 8, // Space below the counter
  },
  questionText: {
    fontSize: 20, // Larger font size for the question
    fontWeight: '600', // Semi-bold font weight
    marginBottom: 20, // Space below the question
  },
  optionButton: {
    backgroundColor: '#fff', // White background for options
    borderColor: '#ccc', // Light gray border color
    borderWidth: 1, // Border width
    borderRadius: 8, // Rounded corners
    padding: 14, // Padding inside the button
    marginVertical: 6, // Space between options
  },
  selectedOption: {
    backgroundColor: '#1EA896', // Green background for the selected option
    borderColor: '#1EA896', // Green border for the selected option
  },
  optionText: {
    color: '#333', // Default text color for options
  },
  selectedOptionText: {
    color: '#fff', // White text color for the selected option
    fontWeight: 'bold', // Bold text for the selected option
  },
  navigationButtons: {
    marginTop: 30, // Space above the navigation buttons
    flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-between', // Space between the buttons
  },
  nextButton: {
    backgroundColor: '#1EA896', // Green background for the next button
    paddingHorizontal: 24, // Horizontal padding
    paddingVertical: 12, // Vertical padding
    borderRadius: 8, // Rounded corners
  },
  backButton: {
    backgroundColor: '#ccc', // Gray background for the back button
    paddingHorizontal: 24, // Horizontal padding
    paddingVertical: 12, // Vertical padding
    borderRadius: 8, // Rounded corners
  },
  buttonText: {
    color: '#fff', // White text color for buttons
    fontWeight: 'bold', // Bold text for buttons
  },
  disabled: {
    backgroundColor: '#ccc', // Gray background for disabled buttons
  },
});