import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch, Alert, Linking } from 'react-native';
import { Calendar } from 'react-native-calendars';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as Notifications from 'expo-notifications';
import * as ExpoCalendar from 'expo-calendar';
import moment from 'moment';

export default function TimeAvailabilityScreen({ navigation, route }) {
  const {
    focus = '',
    boardName = '',
    boardDescription = '',
    boardDuration = '', // Add default value for boardDuration
    boardFrequency = '', // Add default value for boardFrequency
    advisors = [],
    message = '',
  } = route.params || {};
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [timeError, setTimeError] = useState('');
  const [tasks, setTasks] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(true);
  const [notificationPermission, setNotificationPermission] = useState(null);
  const [calendarPermission, setCalendarPermission] = useState(null);

  // Define markedDates based on tasks
  const markedDates = tasks.reduce((acc, task) => {
    acc[task.date] = { marked: true, dotColor: '#1EA896' };
    return acc;
  }, {});

  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, marked: true, dotColor: '#1EA896' };
  }

  // Show time picker
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  // Hide time picker
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // Handle time selection
  const handleTimeConfirm = (time) => {
    const formattedTime = moment(time).format('h:mm A');
    setSelectedTime(formattedTime);
    setTimeError('');
    hideTimePicker();
  };

  // Handle continue button press
  const handleContinue = async () => {
    if (!selectedDate || !selectedTime) {
      setTimeError('Please select a date and time before continuing.');
      return;
    }
  
    try {
      console.log('Selected Date:', selectedDate);
      console.log('Selected Time:', selectedTime);
  
      navigation.navigate('ReviewScreen', {
        focus,
        boardName,
        boardDescription, // Use the correct parameter name
        boardDuration,
        boardFrequency,
        advisors,
        message,
        selectedDate,
        selectedTime
      });
    } catch (error) {
      console.error('Error during handleContinue:', error);
      Alert.alert('Error', 'An error occurred while processing your request.');
    }
  };

  // Rest of the existing code (e.g., handleCreateTask, scheduleNotification, addEventToCalendar, etc.) remains unchanged...

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

      {/* Time Selection */}
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
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        is24Hour={false} // Ensure 12-hour format with AM/PM
      />

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
});