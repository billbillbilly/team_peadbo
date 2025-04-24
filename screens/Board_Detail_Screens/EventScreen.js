// This screen shows users details of an event when they click on it.
// At the moment, navigation to this screen is disabled due to issues with matching the information on this
// screen with the structure of the data in the database.

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from '@rneui/themed';
import ToDoItem from '../../components/ToDoItem';

const EventScreen = ({ navigation, route }) => {
  // Destructure the `event` object passed from the previous screen
  const { event } = route.params;

  // State variables for managing event details
  const [eventTitle, changeTitle] = useState(event.title || 'Untitled Event'); // Event title
  const [eventDate, changeDate] = useState(
    event.startDateTime
      ? new Date(event.startDateTime).toLocaleDateString()
      : 'No Date' // Event date
  );
  const [eventTime, changeTime] = useState(
    event.startDateTime
      ? new Date(event.startDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : 'No Time' // Event time
  );
  const [eventDuration, changeDuration] = useState(
    event.endDateTime && event.startDateTime
      ? `${Math.round(
          (new Date(event.endDateTime) - new Date(event.startDateTime)) / (1000 * 60)
        )} minutes` // Event duration in minutes
      : 'No Duration'
  );
  const [eventDescription, changeDescription] = useState(event.descriptionText || 'No Description'); // Event description
  const [notes, setNotes] = useState(''); // Notes for the event
  const [todos, setTodos] = useState([]); // List of todos for the event

  // Modal states for editing event details
  const [titleModalVisible, setTitleModalVisible] = useState(false); // Title edit modal visibility
  const [dateTimeModalVisible, setDateTimeModalVisible] = useState(false); // Date/time edit modal visibility
  const [descriptionModalVisible, setDescriptionModalVisible] = useState(false); // Description edit modal visibility
  const [modalVisible, setModalVisible] = useState(false); // Todo creation modal visibility

  // Temporary states for editing event details
  const [tempTitle, setTempTitle] = useState(event.title || 'Untitled Event'); // Temporary title for editing
  const [tempDate, setTempDate] = useState(eventDate); // Temporary date for editing
  const [tempTime, setTempTime] = useState(eventTime); // Temporary time for editing
  const [tempDescription, setTempDescription] = useState(eventDescription); // Temporary description for editing
  const [newTodo, setNewTodo] = useState(''); // New todo text

  // Load todos from AsyncStorage when the component mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem(`todos_${event.id}`);
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos)); // Load todos from storage
        } else {
          setTodos([]); // Initialize with an empty list if no todos are found
        }
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    };

    loadTodos();
  }, [event.id]);

  // Save todos to AsyncStorage whenever they are updated
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(`todos_${event.id}`, JSON.stringify(todos)); // Save todos to storage
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    };

    saveTodos();
  }, [todos, event.id]);

  // Toggle the completion status of a todo
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; // Toggle the `completed` status
    setTodos(newTodos);
  };

  // Save the edited title
  const saveTitle = () => {
    changeTitle(tempTitle); // Update the event title
    setTitleModalVisible(false); // Close the title edit modal
  };

  // Save the edited date and time
  const saveDateTime = () => {
    changeDate(tempDate); // Update the event date
    changeTime(tempTime); // Update the event time
    setDateTimeModalVisible(false); // Close the date/time edit modal
  };

  // Save the edited description
  const saveDescription = () => {
    changeDescription(tempDescription); // Update the event description
    setDescriptionModalVisible(false); // Close the description edit modal
  };

  // Add a new todo to the list
  const addTodo = () => {
    if (newTodo.trim().length > 0) {
      setTodos([...todos, { text: newTodo, completed: false }]); // Add the new todo
      setNewTodo(''); // Clear the input field
      setModalVisible(false); // Close the todo creation modal
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" type="font-awesome" size={20} color="#1E9278" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{eventTitle}</Text>
        <TouchableOpacity onPress={() => setTitleModalVisible(true)}>
          <Icon name="edit" type="font-awesome" size={20} color="#1E9278" />
        </TouchableOpacity>
      </View>

      {/* Date and Time Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.label}>Date and Time</Text>
          <TouchableOpacity onPress={() => setDateTimeModalVisible(true)}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.infoText}>
          Date: {eventDate} | Time: {eventTime} | Duration: {eventDuration}
        </Text>
      </View>

      {/* Description Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.label}>Description</Text>
          <TouchableOpacity onPress={() => setDescriptionModalVisible(true)}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.infoText}>{eventDescription}</Text>
      </View>

      {/* Notes Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.notesInput}
          placeholder="Write your notes here..."
          value={notes}
          onChangeText={setNotes}
          multiline
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E9278',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  editText: {
    fontSize: 14,
    color: '#1E9278',
    fontWeight: '500',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  notesInput: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontSize: 14,
    color: '#333',
    textAlignVertical: 'top',
    minHeight: 100,
  },
});

export default EventScreen;