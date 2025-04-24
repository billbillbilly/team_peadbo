import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Notifications from 'expo-notifications';
import * as ExpoCalendar from 'expo-calendar';
import moment from 'moment';

export default function TimeAvailabilityScreen({ navigation, route }) {
  // Destructure parameters passed from the previous screen
  const {
    focus = '',
    boardName = '',
    boardDescription = '',
    boardDuration = '',
    boardFrequency = '',
    advisors = [],
    message = '',
  } = route.params || {};

  // State variables for managing date and time selection
  const [selectedDate, setSelectedDate] = useState(null); // Selected date
  const [selectedTime, setSelectedTime] = useState(null); // Selected time
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false); // Time picker visibility
  const [timeError, setTimeError] = useState(''); // Error message for time selection

  // State variables for managing tasks and calendar visibility
  const [tasks, setTasks] = useState([]); // List of tasks
  const [calendarVisible, setCalendarVisible] = useState(true); // Calendar visibility toggle

  // State variables for permissions
  const [notificationPermission, setNotificationPermission] = useState(null); // Notification permission status
  const [calendarPermission, setCalendarPermission] = useState(null); // Calendar permission status

  // Define marked dates based on tasks
  const markedDates = tasks.reduce((acc, task) => {
    acc[task.date] = { marked: true, dotColor: '#1EA896' }; // Mark task dates with a dot
    return acc;
  }, {});

  // Highlight the selected date
  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, marked: true, dotColor: '#1EA896' };
  }

  // Show the time picker modal
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  // Hide the time picker modal
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // Handle time selection from the time picker
  const handleTimeConfirm = (time) => {
    const formattedTime = moment(time).format('h:mm A'); // Format time as "12:00 PM"
    setSelectedTime(formattedTime); // Update selected time
    setTimeError(''); // Clear any existing error
    hideTimePicker(); // Hide the time picker
  };

  // Handle the "Continue" button press
  const handleContinue = async () => {
    // Validate that both date and time are selected
    if (!selectedDate || !selectedTime) {
      setTimeError('Please select a date and time before continuing.');
      return;
    }

    try {
      console.log('Selected Date:', selectedDate);
      console.log('Selected Time:', selectedTime);

      // Navigate to the ReviewScreen with the selected data
      navigation.navigate('ReviewScreen', {
        focus,
        boardName,
        boardDescription,
        boardDuration,
        boardFrequency,
        advisors,
        message,
        selectedDate,
        selectedTime,
      });
    } catch (error) {
      console.error('Error during handleContinue:', error);
      Alert.alert('Error', 'An error occurred while processing your request.');
    }
  };

  // Handle the "Back" button press
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Set Time Availability</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.stepCircle,
                step === 4 && styles.activeStepCircle, // Highlight the current step
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step === 4 && styles.activeStepNumber, // Highlight the current step number
                ]}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Subtitle Section */}
      <Text style={styles.subtitle}>
        Let's pick a date and time for your first meeting. You can always change it later.
      </Text>

      {/* Toggle Calendar Visibility */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Show Calendar</Text>
        <Switch
          value={calendarVisible}
          onValueChange={(value) => setCalendarVisible(value)} // Toggle calendar visibility
          trackColor={{ false: '#ccc', true: '#1EA896' }}
        />
      </View>

      {/* Calendar Section */}
      {calendarVisible && (
        <View style={styles.calendar}>
          <Calendar
            onDayPress={(day) => setSelectedDate(day.dateString)} // Handle date selection
            markedDates={markedDates} // Highlight marked dates
            theme={{
              selectedDayBackgroundColor: '#1EA896',
              selectedDayTextColor: '#fff',
              arrowColor: '#1EA896',
              todayTextColor: '#1EA896',
            }}
          />
        </View>
      )}

      {/* Time Selection Button */}
      <TouchableOpacity style={styles.timePickerButton} onPress={showTimePicker}>
        <Text style={styles.timePickerButtonText}>
          {selectedTime ? `Selected Time: ${selectedTime}` : 'Select Time'}
        </Text>
      </TouchableOpacity>

      {/* Error Message */}
      {timeError ? <Text style={styles.errorText}>{timeError}</Text> : null}

      {/* Time Picker Modal */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm} // Handle time selection
        onCancel={hideTimePicker} // Handle cancel action
        is24Hour={false} // Use 12-hour format with AM/PM
        textColor="black" // Set text color
      />

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, (!selectedDate || !selectedTime) && styles.disabledButton]} // Disable button if date or time is not selected
        onPress={handleContinue}
        disabled={!selectedDate || !selectedTime} // Disable button if date or time is not selected
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const circleSize = 40;

// Styles for the screen
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
  timePickerButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  timePickerButtonText: {
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
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
  backButton: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#1EA896',
    fontSize: 16,
  },
});