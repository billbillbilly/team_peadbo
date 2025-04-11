import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

// Configure notification handling (Foreground notifications)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Request permission for notifications
export const requestNotificationPermission = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    return newStatus === 'granted';
  }
  return true;
};

// Send a sample notification
export const sendTestNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hello from Peadbo! 📬",
      body: "This is a test notification.",
      data: { message: "Sample message from Peadbo" },
    },
    trigger: { seconds: 3 },
  });
};

