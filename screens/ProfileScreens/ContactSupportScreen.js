import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const HelpScreen = () => {
  // Function to open the user's email client with a pre-filled email
  const handleEmailSupport = () => {
    const email = 'support@peadbo.com'; // Support email address
    const subject = encodeURIComponent('Support Request'); // Pre-filled email subject
    const body = encodeURIComponent('Hello Peadbo Support Team,\n\nI need help with...'); // Pre-filled email body
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`; // Construct the mailto URL

    // Open the email client using the Linking API
    Linking.openURL(mailtoUrl).catch((error) => {
      // Handle errors if the email client cannot be opened
      alert('Unable to open email client. Please try again later.');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title Section */}
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
    flexGrow: 1, // Ensure the container grows to fill the screen
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#FFF', // White background
    padding: 20, // Padding around the content
  },
  title: {
    fontSize: 22, // Font size for the title
    fontWeight: 'bold', // Bold font weight for emphasis
    marginBottom: 20, // Space below the title
  },
  emailButton: {
    marginTop: 20, // Space above the button
    paddingVertical: 10, // Vertical padding inside the button
    paddingHorizontal: 20, // Horizontal padding inside the button
    backgroundColor: '#007bff', // Blue background color for the button
    borderRadius: 5, // Rounded corners for the button
  },
  emailText: {
    color: 'white', // White text color for the button
    fontSize: 16, // Font size for the button text
    fontWeight: 'bold', // Bold font weight for the button text
  },
});

export default HelpScreen;