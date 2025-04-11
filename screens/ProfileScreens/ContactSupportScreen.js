import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const HelpScreen = () => {

  // Function to open email client
  const handleEmailSupport = () => {
    const email = 'support@peadbo.com';
    const subject = encodeURIComponent('Support Request');
    const body = encodeURIComponent('Hello Peadbo Support Team,\n\nI need help with...');
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    Linking.openURL(mailtoUrl).catch((error) => {
      alert('Unable to open email client. Please try again later.');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Need Help?</Text>
      
      {/* Contact Support via Email Button */}
      <TouchableOpacity onPress={handleEmailSupport} style={styles.emailButton}>
        <Text style={styles.emailText}>Click Here to Email Us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emailButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  emailText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HelpScreen;



