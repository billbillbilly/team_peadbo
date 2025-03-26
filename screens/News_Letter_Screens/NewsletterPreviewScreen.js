import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NewsletterPreviewScreen({ navigation, route }) {
  const { content } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Newsletter Preview</Text>
        <View style={{ width: 24 }} />
      </View>

      <WebView
        originWhitelist={['*']}
        source={{ html: `
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
                img {
                  max-width: 100%;
                  height: auto;
                }
                a {
                  color: #007AFF;
                }
              </style>
            </head>
            <body>
              ${content}
            </body>
          </html>
        ` }}
        style={styles.preview}
      />

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.editButtonText}>Edit Content</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={() => navigation.navigate('CreateNewsletter', { content })}
        >
          <Text style={styles.sendButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  preview: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
  },
  editButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  sendButton: {
    flex: 1,
    padding: 12,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginLeft: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#333',
    fontWeight: '600',
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: '600',
  },
});