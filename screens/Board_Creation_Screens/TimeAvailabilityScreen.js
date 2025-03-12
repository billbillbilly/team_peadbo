import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars'; // Calendar from react-native-calendars
import * as Notifications from 'expo-notifications';
import * as ExpoCalendar from 'expo-calendar'; // Renamed to ExpoCalendar

export default function TimeAvailabilityScreen({ navigation, route }) {
  const { focus, boardName, description, advisors, message } = route.params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(true);

  // Request notification permissions
  useEffect(() => {
    const requestNotificationPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to send notifications was denied.');
      }
    };
    requestNotificationPermissions();
  }, []);

  // Handle task creation
  const handleCreateTask = async (date, time) => {
    const newTask = {
      id: Date.now().toString(),
      title: `Meeting on ${date}`,
      date,
      time,
    };
    setTasks([...tasks, newTask]);
    await scheduleNotification(newTask); // Schedule a notification for the task
    await addEventToCalendar(newTask); // Add the task to the phone's calendar
  };

  // Convert 12-hour time to 24-hour time
  const convertTo24HourFormat = (time) => {
    const [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}:00`;
  };

  // Schedule a notification for the task
  const scheduleNotification = async (task) => {
    try {
      const time24Hour = convertTo24HourFormat(task.time);
      const triggerDate = new Date(`${task.date}T${time24Hour}`);
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Upcoming Task',
          body: `Don't forget: ${task.title} at ${task.time}`,
        },
        trigger: {
          date: triggerDate,
        },
      });
    } catch (error) {
      Alert.alert('Failed to schedule notification', error.message);
    }
  };

  // Add the task to the phone's calendar
  const addEventToCalendar = async (task) => {
    try {
      const { status } = await ExpoCalendar.requestCalendarPermissionsAsync(); // Use ExpoCalendar
      if (status === 'granted') {
        const calendars = await ExpoCalendar.getCalendarsAsync(); // Use ExpoCalendar
        const defaultCalendar = calendars.find((cal) => cal.isPrimary);

        if (defaultCalendar) {
          const time24Hour = convertTo24HourFormat(task.time);
          await ExpoCalendar.createEventAsync(defaultCalendar.id, { // Use ExpoCalendar
            title: task.title,
            startDate: new Date(`${task.date}T${time24Hour}`),
            endDate: new Date(`${task.date}T${time24Hour}`),
            timeZone: 'UTC',
          });
        } else {
          Alert.alert('No default calendar found');
        }
      } else {
        Alert.alert('Calendar permission denied');
      }
    } catch (error) {
      Alert.alert('Failed to add event to calendar', error.message);
    }
  };

  // Handle continue button press
  const handleContinue = async () => {
    if (selectedDate && selectedTime) {
      await handleCreateTask(selectedDate, selectedTime); // Create a task for the selected date/time
      navigation.navigate('ReviewScreen', { focus, boardName, description, advisors, message, selectedDate, selectedTime });
    }
  };

  // Marked dates for the calendar
  const markedDates = tasks.reduce((acc, task) => {
    acc[task.date] = { marked: true, dotColor: '#1EA896' };
    return acc;
  }, {});

  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, marked: true, dotColor: '#1EA896' };
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Set Time Availability</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.stepCircle,
                step === 4 && styles.activeStepCircle,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step === 4 && styles.activeStepNumber,
                ]}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.subtitle}>Let's pick a date and time for your first meeting. You can always change it later.</Text>

      {/* Toggle Calendar Visibility */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Show Calendar</Text>
        <Switch
          value={calendarVisible}
          onValueChange={(value) => setCalendarVisible(value)}
          trackColor={{ false: '#ccc', true: '#1EA896' }}
        />
      </View>

      {/* Calendar */}
      {calendarVisible && (
        <View style={styles.calendar}>
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)}
            markedDates={markedDates}
            theme={{
              selectedDayBackgroundColor: '#1EA896',
              selectedDayTextColor: '#fff',
              arrowColor: '#1EA896',
              todayTextColor: '#1EA896',
            }}
          />
        </View>
      )}

      {/* Time Slots */}
      <View style={styles.timeSlots}>
        <Text style={styles.timeSlotTitle}>Morning</Text>
        <View style={styles.timeSlotContainer}>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '9:00 AM' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('9:00 AM')}
          >
            <Text style={styles.timeSlotText}>9:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '10:00 AM' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('10:00 AM')}
          >
            <Text style={styles.timeSlotText}>10:00 AM</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timeSlotTitle}>Afternoon</Text>
        <View style={styles.timeSlotContainer}>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '2:00 PM' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('2:00 PM')}
          >
            <Text style={styles.timeSlotText}>2:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '3:00 PM' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('3:00 PM')}
          >
            <Text style={styles.timeSlotText}>3:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '4:00 PM' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('4:00 PM')}
          >
            <Text style={styles.timeSlotText}>4:00 PM</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, (!selectedDate || !selectedTime) && styles.disabledButton]}
        onPress={handleContinue}
        disabled={!selectedDate || !selectedTime}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const circleSize = 40;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleText: {
    fontSize: 16,
    marginRight: 10,
  },
  calendar: {
    marginBottom: 20,
  },
  timeSlots: {
    marginBottom: 20,
  },
  timeSlotTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  timeSlot: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedTimeSlot: {
    backgroundColor: 'rgba(30, 168, 150, 0.2)',
    borderColor: '#1EA896',
  },
  timeSlotText: {
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  stepCircle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeStepCircle: {
    backgroundColor: '#1EA896',
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  activeStepNumber: {
    color: '#fff',
  },
});