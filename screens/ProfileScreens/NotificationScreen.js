import React, { useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileSetting } from '../../Reducer'; 
import { requestNotificationPermission, sendTestNotification } from './NotificationManager';

const NotificationsScreen = () => {
    const dispatch = useDispatch();
    const profileSettings = useSelector((state) => state.user.profileSettings);

    useEffect(() => {
        if (profileSettings?.notificationsEnabled) {
            requestNotificationPermission().then(granted => {
                if (granted) {
                    // Notifications are enabled, show a test notification
                    sendTestNotification(); 
                } else {
                    Alert.alert("Permission Denied", "Unable to get permission for notifications.");
                }
            });
        }
    }, [profileSettings?.notificationsEnabled]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Notifications</Text>

            {/* Enable/Disable Push Notifications */}
            <View style={styles.settingRow}>
                <Text>Enable Push Notifications</Text>
                <Switch 
                    value={profileSettings?.notificationsEnabled || false}
                    onValueChange={(value) => dispatch(updateProfileSetting({ key: 'notificationsEnabled', value }))}
                />
            </View>

            {/* Enable/Disable Email Notifications */}
            <View style={styles.settingRow}>
                <Text>Email Notifications</Text>
                <Switch 
                    value={profileSettings?.emailNotifications || false}
                    onValueChange={(value) => dispatch(updateProfileSetting({ key: 'emailNotifications', value }))}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF', padding: 20 },
    header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15 },
});

export default NotificationsScreen;
