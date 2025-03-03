import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed'; // Using RNEUI for checkbox icon

const ToDoItem = ({ text, completed, onToggle }) => {
    return (
        <TouchableOpacity 
            style={[styles.item, completed && styles.itemCompleted]}
            onPress={onToggle}
        >
            <View style={styles.checkbox}>
                {completed && <Icon name="check" type="font-awesome" size={14} color="black" />}
            </View>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemCompleted: {
        opacity: 0.6,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 14,
        color: 'black',
    },
});

export default ToDoItem;
