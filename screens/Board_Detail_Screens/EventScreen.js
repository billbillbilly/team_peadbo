// Full updated EventScreen.js with reflection modal & removed status dropdown

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  ScrollView
} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  ScrollView
} from 'react-native';
import { Icon } from '@rneui/themed';
import BoardMembers from '../../components/BoardMembers';
import ToDoItem from '../../components/ToDoItem';

const EventScreen = ({ navigation, route }) => {
  const { event } = route.params;

  const [eventTitle, changeTitle] = useState(event.title);
  const [eventDate, changeDate] = useState(`${event.month}/${event.day}/${event.year}`);
  const [eventTime, changeTime] = useState(event.time);
  const [eventDuration, changeDuration] = useState(event.duration);
  const [eventDescription, changeDescription] = useState(event.description);
  const [notes, setNotes] = useState('');
  const [todos, setTodos] = useState(event.todos);

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const [tempTitle, setTempTitle] = useState(event.title);
  const [titleModalVisible, setTitleModalVisible] = useState(false);
  const saveTitle = () => {
    changeTitle(tempTitle);
    setTitleModalVisible(false);
  };

  const [dateTimeModalVisible, setDateTimeModalVisible] = useState(false);
  const [tempDate, setTempDate] = useState(eventDate);
  const [tempTime, setTempTime] = useState(eventTime);
  const [tempDuration, setTempDuration] = useState(eventDuration);
  const saveDateTime = () => {
    changeDate(tempDate);
    changeTime(tempTime);
    changeDuration(tempDuration);
    setDateTimeModalVisible(false);
  };

  const [descriptionModalVisible, setDescriptionModalVisible] = useState(false);
  const [tempDescription, setTempDescripton] = useState(eventDescription);
  const saveDescription = () => {
    changeDescription(tempDescription);
    setDescriptionModalVisible(false);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const addTodo = () => {
    if (newTodo.trim().length > 0) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
      setModalVisible(false);
    }
  };

  const [reflectionModalVisible, setReflectionModalVisible] = useState(false);
  const [meetingOccurred, setMeetingOccurred] = useState(null);
  const [whatWentWell, setWhatWentWell] = useState('');
  const [whatCouldBeBetter, setWhatCouldBeBetter] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 20 }}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTitleModalVisible(true)}>
          <Text style={styles.headerText}>{eventTitle}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTitleModalVisible(true)}>
          <Icon name="cog" type="font-awesome" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Collaborators</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {/* <BoardMembers members={event.users}></BoardMembers> */}
          <TouchableOpacity style={styles.addButton} onPress={() => console.log(event.todos)}>
            <Text style={{ fontSize: 18 }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.label}>Date and Time</Text>
          <TouchableOpacity onPress={() => setDateTimeModalVisible(true)}>
            <Text style={{ fontSize: 12, marginTop: 10, color: 'gray' }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 13, marginBottom: 5, color: 'gray' }}>
          Date: {eventDate} | Time: {eventTime} | Duration: {eventDuration}
        </Text>
      </View>
      <View style={styles.section}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.label}>Date and Time</Text>
          <TouchableOpacity onPress={() => setDateTimeModalVisible(true)}>
            <Text style={{ fontSize: 12, marginTop: 10, color: 'gray' }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 13, marginBottom: 5, color: 'gray' }}>
          Date: {eventDate} | Time: {eventTime} | Duration: {eventDuration}
        </Text>
      </View>

      <View style={styles.section}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.label}>Description</Text>
          <TouchableOpacity onPress={() => setDescriptionModalVisible(true)}>
            <Text style={{ fontSize: 12, marginTop: 10, color: 'gray' }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 13, marginBottom: 5, color: 'gray' }}>{eventDescription}</Text>
      </View>

      <View style={styles.section}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.label}>To-do</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={{ fontSize: 12, marginVertical: 10, color: 'gray' }}>Add</Text>
          </TouchableOpacity>
        </View>
        {todos.map((item, index) => (
          <ToDoItem
            key={index}
            text={item.text}
            completed={item.completed}
            onToggle={() => toggleTodo(index)}
          />
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Notes</Text>
        <TextInput
          style={styles.notesInput}
          placeholder="Write your notes here..."
          value={notes}
          onChangeText={setNotes}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => setReflectionModalVisible(true)}>
          <Text style={{ fontSize: 14, color: '#1E9278', marginTop: 10 }}>+ Add Reflection</Text>
        </TouchableOpacity>
      </View>

      {/* Reflection Modal */}
      <Modal visible={reflectionModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Meeting Reflection</Text>

            <Text style={{ alignSelf: 'flex-start', marginBottom: 5 }}>Did the meeting happen?</Text>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <TouchableOpacity
                style={[styles.reflectionOption, meetingOccurred === true && styles.selectedOption]}
                onPress={() => setMeetingOccurred(true)}
              >
                <Text style={meetingOccurred === true && { color: 'white' }}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.reflectionOption, meetingOccurred === false && styles.selectedOption]}
                onPress={() => setMeetingOccurred(false)}
              >
                <Text style={meetingOccurred === false && { color: 'white' }}>No</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.modalInput}
              placeholder="What went well?"
              value={whatWentWell}
              onChangeText={setWhatWentWell}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="What could be improved?"
              value={whatCouldBeBetter}
              onChangeText={setWhatCouldBeBetter}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Any additional notes?"
              value={additionalNotes}
              onChangeText={setAdditionalNotes}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="What went well?"
              value={whatWentWell}
              onChangeText={setWhatWentWell}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="What could be improved?"
              value={whatCouldBeBetter}
              onChangeText={setWhatCouldBeBetter}
            />
            <TextInput
              style={styles.modalInput}
              placeholder="Any additional notes?"
              value={additionalNotes}
              onChangeText={setAdditionalNotes}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setReflectionModalVisible(false)}>
                <Text style={{ color: 'gray' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addTaskButton}
                onPress={() => {
                  console.log({ meetingOccurred, whatWentWell, whatCouldBeBetter, additionalNotes });
                  setReflectionModalVisible(false);
                }}
              >
                <Text style={{ color: 'white' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setReflectionModalVisible(false)}>
                <Text style={{ color: 'gray' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.addTaskButton}
                onPress={() => {
                  console.log({ meetingOccurred, whatWentWell, whatCouldBeBetter, additionalNotes });
                  setReflectionModalVisible(false);
                }}
              >
                <Text style={{ color: 'white' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F9F9', padding: 20 },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: { fontSize: 18, fontWeight: 'bold' },
  section: { marginBottom: 15 },
  label: { fontWeight: 'bold', marginBottom: 5 },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notesInput: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  modalInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  addTaskButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#1E9278',
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  reflectionOption: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#1E9278',
    borderColor: '#1E9278',
  },
});

export default EventScreen;

