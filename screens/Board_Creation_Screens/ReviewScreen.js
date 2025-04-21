import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addBoardThunk } from '../../Reducer';
import { useSelector } from 'react-redux';

export default function ReviewScreen({ navigation, route }) {
  const { focus = '', boardName = '', boardDescription = '', boardDuration = '', boardFrequency = '', advisors = [], selectedDate = '', selectedTime = '' } = route.params || {};
  const [acknowledged, setAcknowledged] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const handleConfirm = async () => {
    // Create the new board object
    const newBoard = {
      name: boardName,
      description: boardDescription,
      focus: focus,
      advisor: advisors.length > 0 ? advisors[0].name : 'No Advisor', // Use the first advisor or a default value
      duration: boardDuration,
      frequency: boardFrequency,
      author: currentUser.id, // Replace with the logged-in user's ID
    };
  
    try {
      // Dispatch the thunk to add the board to the database
      await dispatch(addBoardThunk(newBoard));
      console.log('Board added successfully');
  
      // Navigate to the HomeScreen
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error adding board:', error);
      Alert.alert('Error', 'Failed to create the board. Please try again.');
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  // Parse duration (e.g., "1 year" -> 12 months)
  const parseDuration = (duration) => {
    // Map words to numbers
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
  
    // Convert the duration to lowercase for easier matching
    const lowerDuration = duration.toLowerCase();
  
    // Check if the duration contains a word number (e.g., "one")
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
  console.log('Inputs to generateRecurringDates:', {
    selectedDate,
    selectedTime,
    boardDuration,
    boardFrequency,
  });
  console.log('Parsed Duration:', parseDuration(boardDuration));
  console.log('Parsed Frequency:', parseFrequency(boardFrequency));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Review</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.stepCircle,
                step === 5 && styles.activeStepCircle,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step === 5 && styles.activeStepNumber,
                ]}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={styles.subtitle}>Let's review your board settings before we create it.</Text>

      {/* Board Name */}
      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Name</Text>
        <Text style={styles.sectionContent}>{boardName}</Text>
      </View>

      {/* Board Description */}
      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Description</Text>
        <Text style={styles.sectionContent}>{boardDescription}</Text>
      </View>

      {/* Board Focus */}
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
        style={[styles.confirmButton, !acknowledged && styles.disabledButton]}
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