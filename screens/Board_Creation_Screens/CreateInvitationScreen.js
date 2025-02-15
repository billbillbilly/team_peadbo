import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CreateInvitationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Invitation Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('TimeAvailabilityScreen')}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Muller, Sans-serif',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#1EA896',
        borderRadius: 50,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default CreateInvitationScreen;