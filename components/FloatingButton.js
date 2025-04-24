import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure you have react-native-vector-icons installed

const FloatingButton = ({ onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon name="chatbubble-ellipses-outline" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: '15%',
        right: '5%',
    },
    button: {
        backgroundColor: '#1EA896', // Match your app's theme
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default FloatingButton;