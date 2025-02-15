// Screen for Board Creation: Focus
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FocusScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Focus Screen</Text>
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

export default FocusScreen;
