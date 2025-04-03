import React, { useRef, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RichEditor, RichToolbar } from 'react-native-pell-rich-editor';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RichTextEditorScreen({ navigation, route }) {
  const richText = useRef();
  const [content, setContent] = useState(route.params?.content || '');
  
  const handlePreview = () => {
    navigation.navigate('NewsletterPreview', { content });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Newsletter Editor</Text>
        <TouchableOpacity onPress={handlePreview}>
          <Text style={styles.previewButton}>Preview</Text>
        </TouchableOpacity>
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