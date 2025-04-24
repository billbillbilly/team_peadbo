import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Define color constants for consistent styling
const PEADBO_COLORS = {
  primary: '#1EA896',
  secondary: '#FF715B',
  background: '#F9F9F9',
  text: '#333333',
  lightText: '#777777',
  border: '#DDDDDD',
  white: '#FFFFFF',
};

export default function NewsletterPreviewScreen({ navigation, route }) {
  // Destructure the `newsletter` object and `onSave` callback from route parameters
  const { newsletter, onSave } = route.params;

  // Handle the "Send Now" button press
  const handleContinue = () => {
    const updatedNewsletter = { ...newsletter, status: 'sent' }; // Mark the newsletter as sent
    onSave(updatedNewsletter); // Call the onSave callback with the updated newsletter
  };

  // Handle the "Save Draft" button press
  const handleSaveDraft = () => {
    onSave(newsletter); // Save the current newsletter as a draft
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color={PEADBO_COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Newsletter Preview</Text>
        <View style={{ width: 24 }} />
      </View>


      <ScrollView style={styles.scrollContainer}>

        <View style={styles.recipientSection}>
          <Text style={styles.sectionTitle}>
            Recipients ({newsletter.recipients?.length || 0})
          </Text>
          {newsletter.recipients && newsletter.recipients.length > 0 ? (
            newsletter.recipients.map((recipient, index) => (
              <View key={index} style={styles.recipientItem}>
                <Text style={styles.recipientName}>
                  {recipient.name || `${recipient.firstName} ${recipient.lastName}`}
                </Text>
                <Text style={styles.recipientEmail}>{recipient.email}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.noRecipientsText}>No recipients added yet.</Text>
          )}
        </View>


        <View style={styles.previewContainer}>
          <WebView
            originWhitelist={['*']}
            source={{
              html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                    body {
                      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                      padding: 16px;
                      color: #333;
                    }
                    h1 {
                      color: ${PEADBO_COLORS.primary};
                    }
                    img {
                      max-width: 100%;
                      height: auto;
                    }
                    a {
                      color: ${PEADBO_COLORS.primary};
                    }
                  </style>
                </head>
                <body>
                  <h1>${newsletter.title}</h1>
                  <h2>${newsletter.subject}</h2>
                  ${newsletter.content}
                  ${newsletter.schedule
                  ? `<p><strong>Scheduled:</strong> ${newsletter.schedule}</p>`
                  : ''
                }
                </body>
              </html>
            `,
            }}
            style={styles.preview}
          />
        </View>
      </ScrollView>


      <View style={styles.footer}>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.goBack()}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.draftButton} onPress={handleSaveDraft}>
          <Text style={styles.draftButtonText}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleContinue}>
          <Text style={styles.sendButtonText}>Send Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PEADBO_COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: PEADBO_COLORS.border,
    backgroundColor: PEADBO_COLORS.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: PEADBO_COLORS.text,
  },
  scrollContainer: {
    flex: 1,
  },
  recipientSection: {
    padding: 16,
    backgroundColor: PEADBO_COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: PEADBO_COLORS.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: PEADBO_COLORS.text,
  },
  recipientItem: {
    padding: 12,
    borderWidth: 1,
    borderColor: PEADBO_COLORS.border,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: PEADBO_COLORS.background,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: '600',
    color: PEADBO_COLORS.text,
    marginBottom: 4,
  },
  recipientEmail: {
    fontSize: 14,
    color: PEADBO_COLORS.lightText,
  },
  previewContainer: {
    height: 500, // Fixed height or you can calculate based on content
  },
  preview: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: PEADBO_COLORS.border,
    backgroundColor: PEADBO_COLORS.white,
  },
  editButton: {
    padding: 12,
    backgroundColor: PEADBO_COLORS.white,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PEADBO_COLORS.primary,
    flex: 1,
  },
  draftButton: {
    padding: 12,
    backgroundColor: PEADBO_COLORS.white,
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: PEADBO_COLORS.secondary,
    flex: 1,
  },
  sendButton: {
    padding: 12,
    backgroundColor: PEADBO_COLORS.primary,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
    flex: 1,
  },
  editButtonText: {
    color: PEADBO_COLORS.primary,
    fontWeight: '600',
  },
  draftButtonText: {
    color: PEADBO_COLORS.secondary,
    fontWeight: '600',
  },
  sendButtonText: {
    color: PEADBO_COLORS.white,
    fontWeight: '600',
  },
});