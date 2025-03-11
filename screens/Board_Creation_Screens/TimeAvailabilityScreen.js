import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function TimeAvailabilityScreen({ navigation, route }) {
  const { focus, boardName, description, advisors, message } = route.params;
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      navigation.navigate('ReviewScreen', { focus, boardName, description, advisors, message, selectedDate, selectedTime });
    }
  };

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

      <View style={styles.calendar}>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
          theme={{
            selectedDayBackgroundColor: '#1EA896',
            selectedDayTextColor: '#fff',
            arrowColor: '#1EA896',
            todayTextColor: '#1EA896'
          }}
        />
      </View>

      <View style={styles.timeSlots}>
        <Text style={styles.timeSlotTitle}>Morning</Text>
        <View style={styles.timeSlotContainer}>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '9:00' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('9:00')}
          >
            <Text style={styles.timeSlotText}>9:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '10:00' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('10:00')}
          >
            <Text style={styles.timeSlotText}>10:00 AM</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timeSlotTitle}>Afternoon</Text>
        <View style={styles.timeSlotContainer}>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '14:00' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('14:00')}
          >
            <Text style={styles.timeSlotText}>2:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '15:00' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('15:00')}
          >
            <Text style={styles.timeSlotText}>3:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeSlot, selectedTime === '16:00' && styles.selectedTimeSlot]}
            onPress={() => setSelectedTime('16:00')}
          >
            <Text style={styles.timeSlotText}>4:00 PM</Text>
          </TouchableOpacity>
        </View>
      </View>

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