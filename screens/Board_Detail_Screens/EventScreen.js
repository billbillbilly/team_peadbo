import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from '@rneui/themed';

const EventScreen = ({ navigation, route }) => {
    const { event } = route.params;

    // status dropdown picker
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Finished', value: 'Finished'},
        {label: 'Unfinished', value: 'Unfinished'},
    ]);
    const [status, setStatus] = useState('Finished');
    const [todos, setTodos] = useState(['Revise my resume', 'List all the experience bullet points']);
    const [notes, setNotes] = useState('');

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{fontSize:20}}>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>{event.title}</Text>
                <Icon name="cog" type="font-awesome" size={20} />
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
                    <Image source={{uri: 'https://placekitten.com/40/40'}} style={styles.avatar}/>
                    <Image source={{uri: 'https://placekitten.com/40/40'}} style={styles.avatar}/>
                    <TouchableOpacity style={styles.addButton}>
                        <Text style={{fontSize:18}}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Date and Time */}
            <View style={styles.section}>
                <Text style={styles.label}>Date and Time</Text>
                <Text>Discuss strategies for job seeking, and understand how to leverage the advisory board...</Text>
            </View>

            {/* To-do */}
            <View style={styles.section}>
                <Text style={styles.label}>To-do</Text>
                {todos.map((todo, index) => (
                    <View key={index} style={styles.todoItem}>
                        <View style={styles.checkbox}></View>
                        <Text>{todo}</Text>
                    </View>
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
    }
});

export default EventScreen;
