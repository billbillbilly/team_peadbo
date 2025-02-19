import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const advisors = [
  { id: 1, name: 'David Carter', expertise: 'Design, Project, Leadership', experience: '8 Years Experience' },
  { id: 2, name: 'Sophia Bennett', expertise: 'Advisor, Networking', experience: '7 Years Experience' },
  { id: 3, name: 'Emma Hayes', expertise: 'Design, Project, Leadership', experience: '6 Years Experience' },
];

export default function PickAdvisorsScreen({ navigation, route }) {
  const { focus, boardName, description } = route.params;
  const [selectedAdvisors, setSelectedAdvisors] = useState([]);

  const handleContinue = () => {
    navigation.navigate('CreateInvitationScreen', { focus, boardName, description, advisors: selectedAdvisors });
  };

  const toggleAdvisor = (advisor) => {
    if (selectedAdvisors.includes(advisor)) {
      setSelectedAdvisors(selectedAdvisors.filter((a) => a.id !== advisor.id));
    } else {
      setSelectedAdvisors([...selectedAdvisors, advisor]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Pick Your Advisors</Text>
        <View style={styles.stepIndicator}>
          {[1, 2, 3, 4, 5].map((step) => (
            <View
              key={step}
              style={[
                styles.stepCircle,
                step === 3 && styles.activeStepCircle,
              ]}
            >
              <Text
                style={[
                  styles.stepNumber,
                  step === 3 && styles.activeStepNumber,
                ]}
              >
                {step}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <FlatList
        data={advisors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.advisorItem, selectedAdvisors.includes(item) && styles.selectedAdvisor]}
            onPress={() => toggleAdvisor(item)}
          >
            <Text style={styles.advisorName}>{item.name}</Text>
            <Text style={styles.advisorExpertise}>{item.expertise}</Text>
            <Text style={styles.advisorExperience}>{item.experience}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        style={[styles.continueButton, selectedAdvisors.length === 0 && styles.disabledButton]}
        onPress={handleContinue}
        disabled={selectedAdvisors.length === 0}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 20,
  },
  advisorItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedAdvisor: {
    backgroundColor: 'rgba(30, 168, 150, 0.2)',
    borderColor: '#1EA896',
  },
  advisorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  advisorExpertise: {
    fontSize: 16,
    color: '#666',
  },
  advisorExperience: {
    fontSize: 14,
    color: '#999',
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