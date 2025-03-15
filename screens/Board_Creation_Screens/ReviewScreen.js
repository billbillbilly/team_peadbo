import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function ReviewScreen({ navigation, route }) {
  const { focus, boardName, description, advisors, selectedDate, selectedTime } = route.params;
  const [acknowledged, setAcknowledged] = useState(false);

  const handleConfirm = () => {
    // Submit data to Firestore or backend
    navigation.navigate('SuccessScreen');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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

      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Name</Text>
        <Text style={styles.sectionContent}>{boardName}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Description</Text>
        <Text style={styles.sectionContent}>{description}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Focus</Text>
        <Text style={styles.sectionContent}>{focus}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.sectionLabel}>Scheduled Meetings (1 Year | Meeting Quarterly)</Text>
        <Text style={styles.meetingDate}>{formatDate(selectedDate)}, {selectedTime}</Text>
        {selectedDate && (
          <>
            <Text style={styles.meetingDate}>
              {new Date(new Date(selectedDate).setMonth(new Date(selectedDate).getMonth() + 3))
                .toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}, {selectedTime}
            </Text>
            <Text style={styles.meetingDate}>
              {new Date(new Date(selectedDate).setMonth(new Date(selectedDate).getMonth() + 6))
                .toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}, {selectedTime}
            </Text>
            <Text style={styles.meetingDate}>
              {new Date(new Date(selectedDate).setMonth(new Date(selectedDate).getMonth() + 9))
                .toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}, {selectedTime}
            </Text>
          </>
        )}
      </View>

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

      <TouchableOpacity
        style={[styles.confirmButton, !acknowledged && styles.disabledButton]}
        onPress={handleConfirm}
        disabled={!acknowledged}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>

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