// This screen will store all of the data that is collected from the board creation process.
// As of now, the data that is being passed to the create board query is causing an error.
// The error is likely due to the data not being in a format that matches the current schema.
// The next step will be to check the schema and make the necessary changes to the 'newBoard' object being
// created to make sure that all of the data it is trying to pass is in the correct format

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { addBoardThunk } from '../../Reducer';

export default function ReviewScreen({ navigation, route }) {
  // Destructure parameters passed from the previous screen
  const {
    focus = '',
    boardName = '',
    boardDescription = '',
    boardDuration = '',
    boardFrequency = '',
    advisors = [],
    selectedDate = '',
    selectedTime = '',
  } = route.params || {};

  // State to track acknowledgment checkbox
  const [acknowledged, setAcknowledged] = useState(false);

  // Get the current user from the Redux store
  const currentUser = useSelector((state) => state.user.currentUser);

  // Redux dispatch function
  const dispatch = useDispatch();

  // Handle the "Confirm" button press
  const handleConfirm = async () => {
    // Create a new board object with the provided data
    const newBoard = {
      name: boardName,
      description: boardDescription,
      focus: focus,
      advisor: advisors.length > 0 ? advisors[0].name : 'No Advisor',
      duration: boardDuration,
      frequency: boardFrequency,
      author: currentUser.id,
    };

    try {
      // Dispatch the action to add the board
      await dispatch(addBoardThunk(newBoard));
      console.log('Board added successfully');
    } catch (error) {
      console.error('Error adding board:', error);
      Alert.alert('Error', 'Failed to create the board. Please try again.');
    } finally {
      // Reset the navigation stack and navigate to the Home screen
      console.log('Navigating to Home');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Main', params: { screen: 'Home' } }],
      });
    }
  };

  // Handle the "Back" button press
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  // Parse duration (e.g., "1 year" -> 12 months)
  const parseDuration = (duration) => {
    const wordToNumber = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
    };

    const lowerDuration = duration.toLowerCase();
    const wordMatch = lowerDuration.match(/one|two|three|four|five|six|seven|eight|nine|ten/);
    const numericValue = wordMatch ? wordToNumber[wordMatch[0]] : parseInt(duration, 10);

    if (lowerDuration.includes('year')) {
      return numericValue * 12; // Convert years to months
    } else if (lowerDuration.includes('month')) {
      return numericValue; // Return months directly
    }

    return 0; // Default to 0 if the format is invalid
  };

  // Parse frequency (e.g., "once a month" -> 1 month)
  const parseFrequency = (frequency) => {
    const lowerFrequency = frequency.toLowerCase();

    if (lowerFrequency.includes('bi-weekly')) {
      return 0.5; // Bi-weekly = 0.5 months (2 weeks)
    } else if (lowerFrequency.includes('once a month')) {
      return 1; // Once a month = 1 month
    } else if (lowerFrequency.includes('every')) {
      const months = parseInt(lowerFrequency.match(/\d+/), 10);
      return months; // Return the number of months directly
    } else if (lowerFrequency.includes('once per year')) {
      return 12; // Once per year = 12 months
    }

    return 0; // Default to 0 if the format is invalid
  };

  // Generate recurring meeting dates
  const generateRecurringDates = (startDate, time, boardDuration, boardFrequency) => {
    const dates = [];
    const durationInMonths = parseDuration(boardDuration);
    const frequencyInMonths = parseFrequency(boardFrequency);

    if (!durationInMonths || !frequencyInMonths) return dates;

    const totalMeetings = Math.floor(durationInMonths / frequencyInMonths);

    for (let i = 0; i < totalMeetings; i++) {
      const newDate = moment(startDate)
        .add(i * frequencyInMonths, 'months')
        .format('dddd, MMMM D, YYYY');
      dates.push(`${newDate}, ${time}`);
    }

    return dates;
  };

  // Get recurring meeting dates
  const recurringDates = generateRecurringDates(selectedDate, selectedTime, boardDuration, boardFrequency);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Review</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.stepCircle,
                step === 5 && styles.activeStepCircle, // Highlight the current step
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step === 5 && styles.activeStepNumber, // Highlight the current step number
                ]}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Subtitle */}
      <Text style={styles.subtitle}>Let's review your board settings before we create it.</Text>

      {/* Board Details */}
      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Name</Text>
        <Text style={styles.sectionContent}>{boardName}</Text>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Description</Text>
        <Text style={styles.sectionContent}>{boardDescription}</Text>
      </View>
      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Focus</Text>
        <Text style={styles.sectionContent}>{focus}</Text>
      </View>

      {/* Scheduled Meetings */}
      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Scheduled Meetings ({boardDuration} | {boardFrequency})</Text>
        {recurringDates.map((date, index) => (
          <Text key={index} style={styles.meetingDate}>{date}</Text>
        ))}
      </View>

      {/* Advisors */}
      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Advisors</Text>
        {advisors.length > 0 ? (
          advisors.map((advisor, index) => (
            <Text key={index} style={styles.sectionContent}>
              {advisor.name} ({advisor.email})
            </Text>
          ))
        ) : (
          <Text style={styles.sectionContent}>No advisors selected</Text>
        )}
      </View>

      {/* Acknowledgment Checkbox */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setAcknowledged(!acknowledged)}
        >
          {acknowledged && <Text style={styles.checkmark}>✓</Text>}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
          I acknowledge that board invite emails will be sent to all invitees
        </Text>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity
        style={[styles.confirmButton, !acknowledged && styles.disabledButton]} // Disable button if not acknowledged
        onPress={handleConfirm}
        disabled={!acknowledged}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleBack}
      >
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
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
  detailSection: {
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 18,
    fontWeight: '500',
  },
  meetingDate: {
    fontSize: 16,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#1EA896',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#1EA896',
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 14,
    flex: 1,
  },
  confirmButton: {
    backgroundColor: '#1EA896',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
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