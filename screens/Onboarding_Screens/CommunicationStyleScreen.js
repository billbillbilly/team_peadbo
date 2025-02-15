// New User Onboarding Screen for Communication Style

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommunicationStyleScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Communication Style Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CommunicationStyleScreen;