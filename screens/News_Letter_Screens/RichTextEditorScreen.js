import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RichTextEditorScreen({ navigation, route }) {
  // Reference to the RichEditor component
  const richText = useRef();

  // State to manage the content of the editor
  const [content, setContent] = useState(route.params?.content || ''); // Initialize with content passed via route.params or an empty string

  // Function to handle the "Preview" button press
  const handlePreview = () => {
    const newsletter = route.params?.newsletter || {}; // Retrieve the newsletter object from route.params
    navigation.navigate('NewsletterPreview', {
      newsletter: { ...newsletter, content }, // Pass the updated content along with the newsletter object
      onSave: (updatedNewsletter) => {
        // Callback to handle saving the updated newsletter
        navigation.navigate('Newsletter', { newNewsletter: updatedNewsletter });
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>

        {/* Header Title */}
        <Text style={styles.headerTitle}>Newsletter Editor</Text>
      </View>

      {/* Rich Text Toolbar */}
      <RichToolbar
        editor={richText} // Link the toolbar to the RichEditor
        actions={[
          'bold', 'italic', 'underline', 'strikethrough', // Text formatting actions
          'insertBulletsList', 'insertOrderedList', // List actions
          'insertLink', 'insertImage', // Insert actions
          'setHeading', 'fontSize', // Heading and font size actions
        ]}
        style={styles.toolbar}
      />

      {/* Rich Text Editor */}
      <RichEditor
        ref={richText} // Reference to the editor
        style={styles.editor}
        initialContentHTML={content} // Set the initial content of the editor
        onChange={html => setContent(html)} // Update the content state whenever the editor content changes
        placeholder="Write your newsletter content here..." // Placeholder text for the editor
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF', // White background for the editor screen
  },
  header: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Vertically center items
    justifyContent: 'space-between', // Space between back button, title, and preview button
    padding: 16, // Padding around the header
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: '#EEE', // Light gray border color
  },
  backButton: {
    position: 'absolute',
    left: 16, // Align back button to the left
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center', // Center the title
    fontSize: 18, // Font size for the title
    fontWeight: '600', // Semi-bold font weight
  },
  previewButtonContainer: {
    position: 'absolute',
    right: 16, // Align preview button to the right
  },
  previewButton: {
    color: '#007AFF', // Blue color for the preview button
    fontSize: 16, // Font size for the preview button
  },
  toolbar: {
    backgroundColor: '#F5F5F5', // Light gray background for the toolbar
    borderBottomWidth: 1, // Add a bottom border
    borderBottomColor: '#EEE', // Light gray border color
  },
  editor: {
    flex: 1, // Take up the remaining space
    paddingHorizontal: 16, // Horizontal padding for the editor
  },
});