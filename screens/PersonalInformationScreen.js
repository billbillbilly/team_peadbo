// New User Onboarding Screen for Personal Information

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonalInformationScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Personal Information Screen</Text>
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
export default PersonalInformationScreen;