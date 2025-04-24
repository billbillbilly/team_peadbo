import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RichTextEditorScreen({ navigation, route }) {
  const richText = useRef();
  const [content, setContent] = useState(route.params?.content || '');

  const handlePreview = () => {
    const newsletter = route.params?.newsletter || {}; // Get the newsletter from route.params
    navigation.navigate('NewsletterPreview', {
      newsletter: { ...newsletter, content }, // Include all fields and the updated content
      onSave: (updatedNewsletter) => {
        navigation.navigate('Newsletter', { newNewsletter: updatedNewsletter });
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Newsletter Editor</Text>
        {/* <TouchableOpacity onPress={handlePreview} style={styles.previewButtonContainer}>
          <Text style={styles.previewButton}>Preview</Text>
        </TouchableOpacity> */}
      </View>

      <RichToolbar
        editor={richText}
        actions={[
          'bold', 'italic', 'underline', 'strikethrough',
          'insertBulletsList', 'insertOrderedList',
          'insertLink', 'insertImage',
          'setHeading', 'fontSize',
        ]}
        style={styles.toolbar}
      />

      <RichEditor
        ref={richText}
        style={styles.editor}
        initialContentHTML={content}
        onChange={html => setContent(html)}
        placeholder="Write your newsletter content here..."
      />
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
    alignItems: 'center',
    justifyContent: 'space-between', // Space between back button, title, and preview button
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  backButton: {
    position: 'absolute',
    left: 16, // Align back button to the left
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center', // Center the title
    fontSize: 18,
    fontWeight: '600',
  },
  previewButtonContainer: {
    position: 'absolute',
    right: 16, // Align preview button to the right
  },
  previewButton: {
    color: '#007AFF',
    fontSize: 16,
  },
  toolbar: {
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  editor: {
    flex: 1,
    paddingHorizontal: 16,
  },
});