import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

function UpgradePlanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>There's a plan for everyone</Text>
      
      {/* Plan Options */}
      <View style={styles.planCard}>
        <Text style={styles.planTitle}>Basic</Text>
        <Text style={styles.planPrice}>Free</Text>
        <Text style={styles.planDescription}>Get started with basic functionality</Text>
        <Button title="Select this plan" onPress={() => alert('Basic Plan selected!')} />
      </View>

      <View style={styles.planCard}>
        <Text style={styles.planTitle}>Professional</Text>
        <Text style={styles.planPrice}>$9.99/month</Text>
        <Text style={styles.planDescription}>Unlock the full Peadbo experience</Text>
        <Button title="Select this plan" onPress={() => alert('Professional Plan selected!')} />
      </View>

      <View style={styles.planCard}>
        <Text style={styles.planTitle}>Enterprise</Text>
        <Text style={styles.planPrice}>Contact us for pricing</Text>
        <Text style={styles.planDescription}>Empower your employees/students</Text>
        <Button title="Contact Sales" onPress={() => alert('Contact Sales for Enterprise!')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  planCard: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  planTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  planPrice: {
    fontSize: 18,
    color: '#008080',
    marginVertical: 5,
  },
  planDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
});

export default UpgradePlanScreen;
