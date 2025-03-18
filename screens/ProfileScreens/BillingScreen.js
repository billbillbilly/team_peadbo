import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const BillingScreen = () => {
  const planDetails = {
    currentPlan: 'Basic',
    status: 'Active',
    upgradeButtonText: 'Upgrade Plan',
    planOptions: [
      {
        plan: 'Basic',
        price: 'Free',
        description: 'Get started with basic functionality',
        features: ['Account Creation', 'Create One Board', 'Up to 100 Contacts'],
      },
      {
        plan: 'Professional',
        price: '$9.99/month',
        description: 'Unlock the full Peadbo experience',
        features: ['Unlimited Boards', 'Uncapped Board Members', 'Up to 500 Contacts'],
      },
      {
        plan: 'Enterprise',
        price: 'Contact us for pricing',
        description: 'Empower your employees/students by sponsoring their Personal Advisory Boards',
        features: ['Dedicated Affiliate Codes', 'Admin Portal Access', 'User Insights Reporting'],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Billing Info</Text>
      <View style={styles.billingInfoContainer}>
        <Text style={styles.planText}>Current Plan: {planDetails.currentPlan}</Text>
        <Text style={styles.statusText}>Status: {planDetails.status}</Text>
        <Button title={planDetails.upgradeButtonText} onPress={() => alert('Navigating to upgrade screen...')} />
      </View>

      <Text style={styles.planTitle}>Available Plans</Text>
      {planDetails.planOptions.map((plan, index) => (
        <View key={index} style={styles.planContainer}>
          <Text style={styles.planName}>{plan.plan}</Text>
          <Text style={styles.planPrice}>{plan.price}</Text>
          <Text style={styles.planDescription}>{plan.description}</Text>
          <View style={styles.featuresList}>
            {plan.features.map((feature, idx) => (
              <Text key={idx} style={styles.featureText}>- {feature}</Text>
            ))}
          </View>
          {plan.plan !== planDetails.currentPlan && (
            <Button
              title={`Select ${plan.plan}`}
              onPress={() => alert(`Selecting the ${plan.plan} plan`)}
              style={styles.selectButton}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  billingInfoContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  planText: {
    fontSize: 18,
    marginBottom: 10,
  },
  statusText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 15,
  },
  planTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  planContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  planName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  planPrice: {
    fontSize: 16,
    color: '#28a745',
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  featuresList: {
    marginBottom: 15,
  },
  featureText: {
    fontSize: 14,
    color: '#777',
  },
  selectButton: {
    marginTop: 10,
  },
});

export default BillingScreen;

