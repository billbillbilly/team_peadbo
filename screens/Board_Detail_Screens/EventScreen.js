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
  const { event } = route.params;

  // State variables
  const [eventTitle, changeTitle] = useState(event.title || 'Untitled Event');
  const [eventDate, changeDate] = useState(
    event.startDateTime
      ? new Date(event.startDateTime).toLocaleDateString()
      : 'No Date'
  );
  const [eventTime, changeTime] = useState(
    event.startDateTime
      ? new Date(event.startDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      : 'No Time'
  );
  const [eventDuration, changeDuration] = useState(
    event.endDateTime && event.startDateTime
      ? `${Math.round(
          (new Date(event.endDateTime) - new Date(event.startDateTime)) / (1000 * 60)
        )} minutes`
      : 'No Duration'
  );
  const [eventDescription, changeDescription] = useState(event.descriptionText || 'No Description');
  const [notes, setNotes] = useState('');
  const [todos, setTodos] = useState([]);

  // Modal states
  const [titleModalVisible, setTitleModalVisible] = useState(false);
  const [dateTimeModalVisible, setDateTimeModalVisible] = useState(false);
  const [descriptionModalVisible, setDescriptionModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Temporary states for editing
  const [tempTitle, setTempTitle] = useState(event.title || 'Untitled Event');
  const [tempDate, setTempDate] = useState(eventDate);
  const [tempTime, setTempTime] = useState(eventTime);
  const [tempDescription, setTempDescription] = useState(eventDescription);
  const [newTodo, setNewTodo] = useState('');

  // Load todos from AsyncStorage when the component mounts
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem(`todos_${event.id}`);
        if (storedTodos) {
          setTodos(JSON.parse(storedTodos));
        } else {
          setTodos([]);
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
        await AsyncStorage.setItem(`todos_${event.id}`, JSON.stringify(todos));
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    };

    saveTodos();
  }, [todos, event.id]);

  // Functions
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const saveTitle = () => {
    changeTitle(tempTitle);
    setTitleModalVisible(false);
  };

  const saveDateTime = () => {
    changeDate(tempDate);
    changeTime(tempTime);
    setDateTimeModalVisible(false);
  };

  const saveDescription = () => {
    changeDescription(tempDescription);
    setDescriptionModalVisible(false);
  };

  const addTodo = () => {
    if (newTodo.trim().length > 0) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
      setModalVisible(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
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