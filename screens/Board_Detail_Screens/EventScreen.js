import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Modal } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from '@rneui/themed';
import BoardMembers from '../../components/BoardMembers';
import ToDoItem from '../../components/ToDoItem';

const EventScreen = ({ navigation, route }) => {
    const { event } = route.params;

    // event info
    const [eventTitle, changeTitle] = useState(event.title);
    const [eventDate, changeDate] = useState(`${event.month}/${event.day}/${event.year}`);
    const [eventTime, changeTime] = useState(event.time);
    const [eventDuration, changeDuration] = useState(event.duration);
    const [eventDescription, changeDescription] = useState(event.description);

    // status dropdown picker
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Finished', value: 'Finished'},
        {label: 'Unfinished', value: 'Unfinished'},
    ]);
    const [status, setStatus] = useState('Finished');
    const [notes, setNotes] = useState('');

    const [todos, setTodos] = useState(event.todos);
    
    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    // Modal for editing event title
    const [tempTitle, setTempTitle] = useState(event.title);
    const [titleModalVisible, setTitleModalVisible] = useState(false);
    const saveTitle = () => {
        changeTitle(tempTitle); // Update the event title
        setTitleModalVisible(false); // Close modal
    };

    // Modal for Editing Date, Time, and Duration
    const [dateTimeModalVisible, setDateTimeModalVisible] = useState(false);
    const [tempDate, setTempDate] = useState(eventDate);
    const [tempTime, setTempTime] = useState(eventTime);
    const [tempDuration, setTempDuration] = useState(eventDuration);
    const saveDateTime = () => {
        changeDate(tempDate);
        changeTime(tempTime);
        changeDuration(tempDuration);
        setDateTimeModalVisible(false); // Close modal
    };

    // Modal for Editing description
    const [descriptionModalVisible, setDescriptionModalVisible] = useState(false);
    const [tempDescription, setTempDescripton] = useState(eventDescription);
    const saveDescription = () => {
        changeDescription(tempDescription);
        setDescriptionModalVisible(false); // Close modal
    };

    // Modal for Adding To-Do
    const [modalVisible, setModalVisible] = useState(false);
    const [newTodo, setNewTodo] = useState('');
    const addTodo = () => {
        if (newTodo.trim().length > 0) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
            setModalVisible(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{fontSize:20}}>{'<'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTitleModalVisible(true)}}>
                    <Text style={styles.headerText}>{eventTitle}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setTitleModalVisible(true)}}>
                    <Icon name="cog" type="font-awesome" size={20} />
                </TouchableOpacity>
            </View>

            {/* Status */}
            <View style={styles.section}>
                <Text style={styles.label}>Status</Text>
                {/* <TouchableOpacity style={styles.statusButton}>
                    <Text>{status}</Text>
                    <Icon name="chevron-down" type="font-awesome" size={12} />
                </TouchableOpacity> */}
                <DropDownPicker
                    placeholder="Select status"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    ArrowDownIconComponent={() => <Icon name="chevron-down" type="font-awesome" size={10} color="white" />}
                    ArrowUpIconComponent={() => <Icon name="chevron-down" type="font-awesome" size={10} color="white" />}
                    containerStyle={{width: '35%'}}
                    style={styles.statusButton}
                    textStyle={{color:'white'}}
                    dropDownContainerStyle={{
                        backgroundColor: 'lightgray',
                        borderWidth: null,
                        borderRadius: 20
                    }}
                    tickIconStyle={{tintColor: 'white'}}
                />
            </View>

            {/* Collaborators */}
            <View style={styles.section}>
                <Text style={styles.label}>Collaborators</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {/* <BoardMembers members={event.users}></BoardMembers> */}
                    <TouchableOpacity style={styles.addButton} onPress={()=>{console.log(event.todos)}}>
                        <Text style={{fontSize:18}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Date and Time */}
            <View style={styles.section}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.label}>Date and Time</Text>
                    <TouchableOpacity onPress={()=>{setDateTimeModalVisible(true)}}>
                        <Text style={{fontSize:12, marginTop: 10, color:'gray'}}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:13, marginBottom:5, color:'gray'}}>
                    Date: {eventDate} | Time: {eventTime} | Duration: {eventDuration}
                </Text>
            </View>

            {/* description */}
            <View style={styles.section}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.label}>Description</Text>
                    <TouchableOpacity onPress={()=>{setDescriptionModalVisible(true)}}>
                        <Text style={{fontSize:12, marginTop: 10, color:'gray'}}>Edit</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:13, marginBottom:5, color:'gray'}}>{eventDescription}</Text>
            </View>

            {/* To-do */}
            <View style={styles.section}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    <Text style={styles.label}>To-do</Text>
                    <TouchableOpacity onPress={()=>{setModalVisible(true)}}>
                        <Text style={{fontSize:12, marginVertical: 10, color:'gray'}}>Add</Text>
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

            {/* Notes */}
            <View style={styles.section}>
                <Text style={styles.label}>Notes</Text>
                <TextInput 
                    style={styles.notesInput} 
                    placeholder="Write your notes here..." 
                    value={notes}
                    onChangeText={setNotes}
                />
            </View>

            {/* Title Edit Modal */}
            <Modal visible={titleModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Title</Text>
                        <TextInput
                            style={styles.modalInput}
                            value={tempTitle}
                            onChangeText={setTempTitle}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setTitleModalVisible(false)}>
                                <Text style={{ color: 'gray' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addTaskButton} onPress={saveTitle}>
                                <Text style={{ color: 'white' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.deleteButton, event.id === '-1'? {backgroundColor:'gray'}:{}]}>
                            <Text style={{ color: 'white' }}>{event.id === '-1'? 'Create Event':'Delete this event'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Date and Time Edit Modal */}
            <Modal visible={dateTimeModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Date and Time</Text>

                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter Date (MM/DD/YYYY)"
                            value={tempDate}
                            onChangeText={setTempDate}
                        />

                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter Time (HH:MM)"
                            value={tempTime}
                            onChangeText={setTempTime}
                        />

                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter Duration (e.g., 50 min)"
                            value={tempDuration}
                            onChangeText={setTempDuration}
                        />

                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setDateTimeModalVisible(false)}>
                                <Text style={{ color: 'gray' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addTaskButton} onPress={saveDateTime}>
                                <Text style={{ color: 'white' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Description Edit Modal */}
            <Modal visible={descriptionModalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Description</Text>

                        <TextInput
                            style={styles.modalInput}
                            placeholder={eventDescription}
                            value={tempDescription}
                            onChangeText={setTempDescripton}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setDescriptionModalVisible(false)}>
                                <Text style={{ color: 'gray' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addTaskButton} onPress={saveDescription}>
                                <Text style={{ color: 'white' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Add To-Do Modal */}
            <Modal visible={modalVisible} transparent animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Add New To-Do</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter to-do item..."
                            value={newTodo}
                            onChangeText={setNewTodo}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                                <Text style={{ color: 'gray' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.addTaskButton} onPress={addTodo}>
                                <Text style={{ color: 'white' }}>Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
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
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    statusButton: {
        backgroundColor: '#1E9278',
        borderRadius: 20,
        borderWidth: null,
        minHeight: 35, 
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 5,
    },
    addButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'gray',
        marginRight: 5,
    },
    notesInput: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    /* Modal Styling */
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
    modalTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
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
    deleteButton: {
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        marginTop:15,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10
    },
});

export default EventScreen;
