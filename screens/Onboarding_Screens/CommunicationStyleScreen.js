// screens/Onboarding_Screens/CommunicationStyleScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const navigation = useNavigation();

  const current = questions[activeQuestionIndex];

  const handleOptionSelect = (option) => {
    setResponses((prev) => ({
      ...prev,
      [current.key]: option,
    }));
  };

  const goNext = () => {
    if (activeQuestionIndex < questions.length - 1) {
      setActiveQuestionIndex((prev) => prev + 1);
    } else {
      console.log('All responses:', responses);
      // Navigate to next onboarding screen or home
      navigation.navigate('Home'); // or wherever you want next
    }
  };

  const goBack = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex((prev) => prev - 1);
    }
  };

  const isOptionSelected = responses[current.key];

  return (
    <View style={styles.container}>
      <Text style={styles.questionCounter}>
        Question {activeQuestionIndex + 1} of {questions.length}
      </Text>

      <Text style={styles.questionText}>{current.question}</Text>

      {current.options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            responses[current.key] === option && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect(option)}
        >
          <Text
            style={[
              styles.optionText,
              responses[current.key] === option && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}

      <View style={styles.navigationButtons}>
        {activeQuestionIndex > 0 && (
          <TouchableOpacity onPress={goBack} style={styles.backButton}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={goNext}
          style={[styles.nextButton, !isOptionSelected && styles.disabled]}
          disabled={!isOptionSelected}
        >
          <Text style={styles.buttonText}>
            {activeQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
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
    backgroundColor: '#F9F9F9',
    padding: 24,
    justifyContent: 'center',
  },
  questionCounter: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    marginVertical: 6,
  },
  selectedOption: {
    backgroundColor: '#1EA896',
    borderColor: '#1EA896',
  },
  optionText: {
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  navigationButtons: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    backgroundColor: '#1EA896',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  backButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: '#ccc',
  },
});
