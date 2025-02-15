import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const AdvisorSelectionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Select Advisors Screen</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CreateInvitationScreen')}
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

export default AdvisorSelectionScreen;