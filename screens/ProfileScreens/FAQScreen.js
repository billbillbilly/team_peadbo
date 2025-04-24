// For now, this screen has been excluded from the profile screen, can be added later if FAQs are added

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQScreen = () => {
  const faqs = [
    { question: 'What is Peadbo?', answer: 'Peadbo is a platform for managing personal advisory boards.' },
    { question: 'How can I upgrade my plan?', answer: 'Go to your profile settings and select Upgrade Plan.' },
    { question: 'How can I contact support?', answer: 'Use the "Contact Support" button in the settings menu.' },
    { question: 'What is included in the Basic Plan?', answer: 'The Basic Plan includes basic features like account creation, one board, and more.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqContainer}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqContainer: {
    marginBottom: 15,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
  },
  answer: {
    fontSize: 14,
    color: '#555',
  },
});

export default FAQScreen;

