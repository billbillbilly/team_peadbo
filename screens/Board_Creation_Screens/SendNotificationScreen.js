// SendNotificationScreen.js
// This screen will be used to send notifications to the advisors
// We ran out of time to implement this screen, and were unsure how to configure email notificaitons
// with the provided database.

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

function SendNotificationScreen({ navigation, route }) {
  const { focus, boardName, description, advisors: selectedAdvisors, message } = route.params;
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSendInvitations = async () => {
    setIsSending(true);
    const subject = 'Invitation to Join My Personal Advisory Board';
    // Loop through each advisor and send email
    for (const advisor of selectedAdvisors) {
      if (advisor.email) {
        try {
          const result = await MailComposer.composeAsync({
            recipients: [advisor.email],
            subject,
            body: message,
          });
          console.log(`Email sent to ${advisor.email}:`, result);
        } catch (error) {
          console.error(`Error sending email to ${advisor.email}:`, error);
        }
      } else {
        console.warn(`Advisor ${advisor.name} does not have an email address.`);
      }
    }
    setIsSending(false);
    setSent(true);
  };

  const handleGoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        {!sent ? (
          <>
            <Text style={styles.title}>Send Invitation</Text>
            <Text style={styles.subtitle}>
              Review your invitation below. When you're ready, tap "Send Invitation" to notify your advisors.
            </Text>
            <Text style={styles.messagePreview}>{message}</Text>
            {isSending ? (
              <ActivityIndicator size="large" color="#1EA896" />
            ) : (
              <TouchableOpacity style={styles.sendButton} onPress={handleSendInvitations}>
                <Text style={styles.sendButtonText}>Send Invitation</Text>
              </TouchableOpacity>
            )}
          </>
        ) : (
          <>
            <Text style={styles.title}>Success!</Text>
            <Text style={styles.subtitle}>
              Your invitation has been sent to all selected advisors.
            </Text>
            <TouchableOpacity style={styles.goHomeButton} onPress={handleGoHome}>
              <Text style={styles.goHomeButtonText}>Return Home</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  messagePreview: {
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  sendButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  goHomeButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  goHomeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SendNotificationScreen;
