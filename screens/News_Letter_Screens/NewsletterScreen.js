import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { generateTemplate } from '../../OpenAIService';

export default function NewsletterScreen({ navigation }) {
  const [templates, setTemplates] = useState([]); // Array to store multiple templates
  const [selectedTemplate, setSelectedTemplate] = useState(''); // Template to display in the modal
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility

  const handleGenerateTemplate = async () => {
    try {
      const generatedTemplate = await generateTemplate(); // Call the generateTemplate function
      setTemplates((prevTemplates) => [...prevTemplates, generatedTemplate]); // Add the new template to the array
    } catch (error) {
      console.error('Error generating template:', error);
    }
  };

  const openTemplateModal = (template) => {
    setSelectedTemplate(template); // Set the selected template for the modal
    setIsModalVisible(true); // Open the modal
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Newsletter</Text>
      <TextInput
        style={styles.search}
        placeholder="Search here"
        placeholderTextColor="#999"
      />

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.createCard}
          onPress={() => navigation.navigate('CreateNewsletter')}
        >
          <Icon name="plus" type="font-awesome" size={24} />
          <Text style={styles.createText}>Create new newsletter</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createCard}
          onPress={handleGenerateTemplate} // Call the handler to generate the template
        >
          <Icon name="plus" type="font-awesome" size={24} />
          <Text style={styles.createText}>Generate AI newsletter template</Text>
        </TouchableOpacity>
      </View>

      {/* Container for the templates */}
      <View style={styles.templateContainer}>
        <FlatList
          data={templates}
          keyExtractor={(item, index) => index.toString()} // Use index as key
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.templateCard}
              onPress={() => openTemplateModal(item)} // Open the modal with the selected template
            >
              <Text style={styles.templatePreview}>
                {item.length > 50 ? `${item.substring(0, 50)}...` : item}
              </Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={styles.placeholderText}>No templates generated yet.</Text>
          }
        />
      </View>

      {/* Modal to display the full template */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setIsModalVisible(false)} // Close the modal
      >
        <SafeAreaView style={styles.modalContainer}>
          <ScrollView>
            <Text style={styles.modalTitle}>Generated Template</Text>
            <Text style={styles.modalContent}>{selectedTemplate}</Text>
          </ScrollView>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setIsModalVisible(false)} // Close the modal
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  title: { fontSize: 32, fontWeight: '700', marginBottom: 24 },
  search: {
    height: 48,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 32,
  },
  createCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#AAA',
    borderRadius: 8,
    padding: 24,
    marginBottom: 16,
    width: '40%',
  },
  createText: { marginLeft: 12, fontSize: 18, fontWeight: '500', alignSelf: 'center' },
  cardContainer: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  templateContainer: {
    flex: 1, // Allow the container to take up remaining space
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#F9F9F9',
  },
  templateCard: {
    marginBottom: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#FFF',
  },
  templatePreview: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  modalContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  closeButton: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#1EA896',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});