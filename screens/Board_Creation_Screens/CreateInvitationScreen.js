// ✅ CreateInvitationScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

function CreateInvitationScreen({ navigation, route }) {
    const { focus, boardName, description, advisor } = route?.params || {};

    const inputRef = useRef(null);
    const [message, setMessage] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [openTemplate, setOpenTemplate] = useState(false);

    useEffect(() => {
        console.log('Route params received:', route?.params);
    }, []);

    useEffect(() => {
        focus?.current?.focus?.();
    }, [focus]);

    const handleSend = () => {
        console.log('Sending invitation to:', advisor);
        navigation.navigate('TimeAvailabilityScreen', {
            focus,
            boardName,
            description,
            advisors: advisor ? [advisor] : [],
            message,
        });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Create Invitation</Text>

            <Text style={styles.label}>Board Name</Text>
            <Text style={styles.value}>{boardName || 'N/A'}</Text>

            <Text style={styles.label}>Description</Text>
            <Text style={styles.value}>{description || 'N/A'}</Text>

            <Text style={styles.label}>Your Message</Text>
            <TextInput
                ref={inputRef}
                style={styles.input}
                placeholder="Write your invitation message..."
                value={message}
                onChangeText={setMessage}
                multiline
            />

            <TouchableOpacity style={styles.button} onPress={handleSend}>
                <Text style={styles.buttonText}>Send Invitation</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 20,
    },
    value: {
        fontSize: 15,
        color: '#333',
        marginTop: 5,
    },
    input: {
        marginTop: 10,
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        minHeight: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#1EA896',
        marginTop: 30,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CreateInvitationScreen;
