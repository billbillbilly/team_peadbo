import React, { useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileSetting } from '../../Reducer'; 
import { requestNotificationPermission, sendTestNotification } from './NotificationManager';

const NotificationsScreen = () => {
    // Redux dispatch function to update profile settings
    const dispatch = useDispatch();

    // Selector to retrieve the user's profile settings from the Redux store
    const profileSettings = useSelector((state) => state.user.profileSettings);

    // Effect to handle notification permissions when notifications are enabled
    useEffect(() => {
        if (profileSettings?.notificationsEnabled) {
            // Request notification permissions
            requestNotificationPermission().then(granted => {
                if (granted) {
                    // If permissions are granted, send a test notification
                    sendTestNotification(); 
                } else {
                    // Show an alert if permissions are denied
                    Alert.alert("Permission Denied", "Unable to get permission for notifications.");
                }
            });
        }
    }, [profileSettings?.notificationsEnabled]); // Re-run the effect when `notificationsEnabled` changes

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <Text style={styles.header}>Notifications</Text>

            {/* Enable/Disable Push Notifications */}
            <View style={styles.settingRow}>
                <Text>Enable Push Notifications</Text>
                <Switch 
                    value={profileSettings?.notificationsEnabled || false} // Current state of push notifications
                    onValueChange={(value) => 
                        dispatch(updateProfileSetting({ key: 'notificationsEnabled', value })) // Update Redux state
                    }
                />
            </View>

            {/* Enable/Disable Email Notifications */}
            <View style={styles.settingRow}>
                <Text>Email Notifications</Text>
                <Switch 
                    value={profileSettings?.emailNotifications || false} // Current state of email notifications
                    onValueChange={(value) => 
                        dispatch(updateProfileSetting({ key: 'emailNotifications', value })) // Update Redux state
                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, // Take up the full screen height
        backgroundColor: '#FFFFFF', // White background
        padding: 20, // Padding around the content
    },
    header: { 
        fontSize: 22, // Font size for the header
        fontWeight: 'bold', // Bold font weight for emphasis
        marginBottom: 20, // Space below the header
    },
    settingRow: { 
        flexDirection: 'row', // Align items in a row
        justifyContent: 'space-between', // Space between the label and the switch
        alignItems: 'center', // Vertically center items
        paddingVertical: 15, // Vertical padding for each setting row
    },
});

export default NotificationsScreen;