import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TimeAvailabilityScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Time Availability Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TimeAvailabilityScreen;