// No further in-app logic has been implemented for mangaing what gets sent as a notification and when.

import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

// Configure notification handling (Foreground notifications)
// This ensures that notifications are displayed properly when the app is in the foreground.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, // Show an alert for the notification
    shouldPlaySound: true, // Play a sound for the notification
    shouldSetBadge: false, // Do not update the app badge
  }),
});

// Request permission for notifications
// This function checks if the user has granted notification permissions.
// If not, it prompts the user to grant permissions.
export const requestNotificationPermission = async () => {
  const { status } = await Notifications.getPermissionsAsync(); // Check current notification permissions
  if (status !== 'granted') {
    // If permissions are not granted, request them
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    return newStatus === 'granted'; // Return true if permissions are granted
  }
  return true; // Return true if permissions are already granted
};

// Send a sample notification
// This function schedules a test notification to be sent after 3 seconds.
export const sendTestNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hello from Peadbo! 📬", // Title of the notification
      body: "This is a test notification.", // Body text of the notification
      data: { message: "Sample message from Peadbo" }, // Additional data sent with the notification
    },
    trigger: { seconds: 3 }, // Trigger the notification after 3 seconds
  });
};