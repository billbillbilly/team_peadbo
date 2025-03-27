import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Modal,
  SectionList,
  Alert,
} from 'react-native';
import { Icon } from '@rneui/themed';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  fetchTasksThunk,
  addTaskThunk,
  updateTaskThunk,
  deleteTaskThunk,
} from '../Reducer';
import RenderBoard from '../components/RenderBoard';
import ToDoItem from '../components/ToDoItem';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  // Current user and remote tasks from Redux store
  const currentUser = useSelector((state) => state.user.currentUser);
  const fallbackUser = firebase.auth().currentUser;
  const remoteTasks = useSelector((state) => state.user.tasks) || [];

  // Local tasks state (from AsyncStorage)
  const [localTasks, setLocalTasks] = useState([]);

  // Hard-coded boards for demonstration
  const boards = [
    {
      id: '1',
      title: 'Academic Team',
      description: 'Keep up with team chats, share updates, and stay on top of tasks.',
      type: 'Advisory',
      users: [
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/men/2.jpg',
        'https://randomuser.me/api/portraits/men/3.jpg',
      ],
    },
    {
      id: '2',
      title: 'Swimming Group',
      description: 'Here’s the update on training plans. Also share the progress!',
      type: 'Personal',
      users: [
        'https://randomuser.me/api/portraits/women/4.jpg',
        'https://randomuser.me/api/portraits/men/5.jpg',
      ],
    },
  ];

  // Fetch remote tasks and load local tasks on mount
  useEffect(() => {
    dispatch(fetchTasksThunk());
    loadLocalTasks();
  }, [dispatch]);

  const loadLocalTasks = async () => {
    try {
      const tasksJSON = await AsyncStorage.getItem('localTasks');
      if (tasksJSON) {
        setLocalTasks(JSON.parse(tasksJSON));
      }
    } catch (error) {
      console.error('Error loading local tasks:', error);
    }
  };

  // Merge remote and local tasks without duplication
  const allTasks = [
    ...remoteTasks,
    ...localTasks.filter(
      (localTask) =>
        !remoteTasks.find((remoteTask) => remoteTask.id === localTask.id)
    ),
  ];

  // ========== ADD TASK MODAL ==========
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  // For add modal, use separate DropDownPicker state:
  const [openPriorityAdd, setOpenPriorityAdd] = useState(false);
  const [newPriority, setNewPriority] = useState('Normal');
  const [priorityItems, setPriorityItems] = useState([
    { label: 'Low', value: 'Low' },
    { label: 'Normal', value: 'Normal' },
    { label: 'High', value: 'High' },
  ]);

  const resetAddForm = () => {
    setNewTitle('');
    setNewDescription('');
    setNewDueDate('');
    setNewPriority('Normal');
  };

  const addTask = async () => {
    if (!newTitle.trim()) {
      Alert.alert('Title is required');
      return;
    }
    const task = {
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
      priority: newPriority,
      completed: false,
      id: Date.now().toString(),
    };
    await dispatch(addTaskThunk(task));
    dispatch(fetchTasksThunk());
    // Update local tasks as well
    const updatedLocalTasks = [...localTasks, task];
    setLocalTasks(updatedLocalTasks);
    try {
      await AsyncStorage.setItem('localTasks', JSON.stringify(updatedLocalTasks));
    } catch (error) {
      console.error('Error saving local task:', error);
    }
    resetAddForm();
    setAddModalVisible(false);
  };

  // ========== EDIT TASK MODAL ==========
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editDueDate, setEditDueDate] = useState('');
  // For edit modal, use separate DropDownPicker state:
  const [openPriorityEdit, setOpenPriorityEdit] = useState(false);
  const [editPriority, setEditPriority] = useState('Normal');

  const openEditModal = (task) => {
    setSelectedTask(task);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditDueDate(task.dueDate);
    setEditPriority(task.priority);
    setEditModalVisible(true);
  };

  const resetEditForm = () => {
    setSelectedTask(null);
    setEditTitle('');
    setEditDescription('');
    setEditDueDate('');
    setEditPriority('Normal');
  };

  const saveEditTask = async () => {
    if (!editTitle.trim()) {
      Alert.alert('Title is required');
      return;
    }
    const updatedTask = {
      ...selectedTask,
      title: editTitle,
      description: editDescription,
      dueDate: editDueDate,
      priority: editPriority,
    };
    await dispatch(updateTaskThunk(updatedTask));
    dispatch(fetchTasksThunk());
    resetEditForm();
    setEditModalVisible(false);
  };

  const deleteTask = async () => {
    if (!selectedTask) return;
    await dispatch(deleteTaskThunk(selectedTask.id));
    dispatch(fetchTasksThunk());
    resetEditForm();
    setEditModalVisible(false);
  };

  // ========== TOGGLE COMPLETION ==========
  const toggleTask = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    await dispatch(updateTaskThunk(updatedTask));
    dispatch(fetchTasksThunk());
  };

  // ========== RENDERING TASKS ==========
  // Each task row displays the task with an edit button next to it.
  const renderTask = ({ item }) => (
    <View style={styles.taskRow}>
      <ToDoItem
        text={item.title}
        completed={item.completed}
        onToggle={() => toggleTask(item)}
      />
      <TouchableOpacity style={styles.editButton} onPress={() => openEditModal(item)}>
        <Icon name="edit" type="font-awesome" size={20} color="#1EA896" />
      </TouchableOpacity>
    </View>
  );

  // ========== SECTIONLIST DEFINITION ==========
  const sections = [
    {
      title: 'My Board',
      data: boards,
      renderItem: ({ item }) => <RenderBoard item={item} navigation={navigation} />,
      keyExtractor: (item) => item.id,
    },
    {
      title: '',
      data: [{ key: 'createBoardButton' }],
      renderItem: () => (
        <TouchableOpacity
          style={styles.createBoardButton}
          onPress={() => navigation.navigate('BoardCreation')}
        >
          <Text style={styles.createBoardText}>+ Create a new board</Text>
        </TouchableOpacity>
      ),
      keyExtractor: (item) => item.key,
    },
    {
      title: 'My Tasks',
      data: allTasks,
      renderItem: renderTask,
      keyExtractor: (item) => item.id,
      ListEmptyComponent: () => (
        <Text style={styles.emptyText}>No tasks yet — add one!</Text>
      ),
    },
    {
      title: 'Other Board',
      data: boards,
      renderItem: ({ item }) => <RenderBoard item={item} navigation={navigation} />,
      keyExtractor: (item) => item.id,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.fixedHeader}>
        <Text style={styles.greeting}>
          Hello, {currentUser?.displayName || fallbackUser?.displayName || 'Guest'}
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search here..."
          placeholderTextColor="#666"
        />
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) =>
          item.id ? item.id + index : index.toString()
        }
        renderSectionHeader={({ section }) => {
          if (section.title === 'My Tasks') {
            return (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>My Tasks</Text>
                <TouchableOpacity
                  style={styles.plusButton}
                  onPress={() => setAddModalVisible(true)}
                >
                  <Text style={styles.plusText}>+</Text>
                </TouchableOpacity>
              </View>
            );
          } else if (section.title) {
            return <Text style={styles.sectionTitle}>{section.title}</Text>;
          }
          return null;
        }}
        contentContainerStyle={styles.listContent}
      />

      {/* ========== Add Task Modal ========== */}
      <Modal visible={addModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>New Task</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="#444"
              value={newTitle}
              onChangeText={setNewTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="#444"
              value={newDescription}
              onChangeText={setNewDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Due Date (MM/DD/YYYY)"
              placeholderTextColor="#444"
              value={newDueDate}
              onChangeText={setNewDueDate}
            />
            <DropDownPicker
              open={openPriorityAdd}
              value={newPriority}
              items={priorityItems}
              setOpen={setOpenPriorityAdd}
              setValue={setNewPriority}
              setItems={setPriorityItems}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownBox}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  resetAddForm();
                  setAddModalVisible(false);
                }}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={addTask}>
                <Text style={{ color: '#fff' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* ========== Edit Task Modal ========== */}
      <Modal visible={editModalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="#444"
              value={editTitle}
              onChangeText={setEditTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              placeholderTextColor="#444"
              value={editDescription}
              onChangeText={setEditDescription}
            />
            <TextInput
              style={styles.input}
              placeholder="Due Date (MM/DD/YYYY)"
              placeholderTextColor="#444"
              value={editDueDate}
              onChangeText={setEditDueDate}
            />
            <DropDownPicker
              open={openPriorityEdit}
              value={editPriority}
              items={priorityItems}
              setOpen={setOpenPriorityEdit}
              setValue={setEditPriority}
              setItems={setPriorityItems}
              containerStyle={styles.dropdownContainer}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownBox}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => {
                  resetEditForm();
                  setEditModalVisible(false);
                }}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={saveEditTask}>
                <Text style={{ color: '#fff' }}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 10 }}>
              <TouchableOpacity style={styles.deleteBtn} onPress={deleteTask}>
                <Text style={{ color: '#fff' }}>Delete Task</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 10,
  },
  fixedHeader: {
    marginTop: 50,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    backgroundColor: '#EFEFEF',
    padding: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  plusButton: {
    backgroundColor: '#ECECEC',
    padding: 6,
    borderRadius: 6,
  },
  plusText: {
    fontSize: 20,
    fontWeight: '700',
  },
  createBoardButton: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    marginVertical: 16,
    backgroundColor: '#F9F9F9',
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'lightgrey',
  },
  createBoardText: {
    color: 'lightgrey',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    marginVertical: 20,
  },
  // New style for task row with an edit button next to the task
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  editButton: {
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 6,
    padding: 8,
    marginBottom: 12,
  },
  dropdownContainer: {
    marginBottom: 12,
    zIndex: 1000,
  },
  dropdown: {
    borderColor: '#CCC',
  },
  dropdownBox: {
    borderColor: '#CCC',
    zIndex: 1000,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelBtn: {
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CCC',
    width: '45%',
    alignItems: 'center',
  },
  saveBtn: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#1EA896',
    width: '45%',
    alignItems: 'center',
  },
  deleteBtn: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: 'red',
    alignItems: 'center',
  },
});


