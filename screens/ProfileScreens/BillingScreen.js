import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const BillingScreen = () => {
  // Object containing details about the current plan and available plans
  const planDetails = {
    currentPlan: 'Basic', // The user's current subscription plan
    status: 'Active', // The status of the current plan
    upgradeButtonText: 'Upgrade Plan', // Text for the upgrade button
    planOptions: [
      {
        plan: 'Basic', // Plan name
        price: 'Free', // Plan price
        description: 'Get started with basic functionality', // Plan description
        features: ['Account Creation', 'Create One Board', 'Up to 100 Contacts'], // Features included in the plan
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
      {/* Title Section */}
      <Text style={styles.title}>Billing Info</Text>

      {/* Current Plan Information */}
      <View style={styles.billingInfoContainer}>
        <Text style={styles.planText}>Current Plan: {planDetails.currentPlan}</Text>
        <Text style={styles.statusText}>Status: {planDetails.status}</Text>
        <Button
          title={planDetails.upgradeButtonText}
          onPress={() => alert('Navigating to upgrade screen...')} // Placeholder for navigation to the upgrade screen
        />
      </View>

      {/* Available Plans Section */}
      <Text style={styles.planTitle}>Available Plans</Text>
      {planDetails.planOptions.map((plan, index) => (
        <View key={index} style={styles.planContainer}>
          {/* Plan Name */}
          <Text style={styles.planName}>{plan.plan}</Text>

          {/* Plan Price */}
          <Text style={styles.planPrice}>{plan.price}</Text>

          {/* Plan Description */}
          <Text style={styles.planDescription}>{plan.description}</Text>

          {/* Features List */}
          <View style={styles.featuresList}>
            {plan.features.map((feature, idx) => (
              <Text key={idx} style={styles.featureText}>
                - {feature}
              </Text>
            ))}
          </View>

          {/* Select Plan Button (only for plans other than the current plan) */}
          {plan.plan !== planDetails.currentPlan && (
            <Button
              title={`Select ${plan.plan}`}
              onPress={() => alert(`Selecting the ${plan.plan} plan`)} // Placeholder for selecting a plan
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
    backgroundColor: '#fff', // White background for the screen
    padding: 20, // Padding around the content
  },
  title: {
    fontSize: 24, // Large font size for the title
    fontWeight: 'bold', // Bold font weight for emphasis
    marginBottom: 20, // Space below the title
  },
  billingInfoContainer: {
    marginBottom: 20, // Space below the billing info section
    paddingBottom: 20, // Padding at the bottom of the section
    borderBottomWidth: 1, // Bottom border for separation
    borderBottomColor: '#E5E5E5', // Light gray border color
  },
  planText: {
    fontSize: 18, // Font size for the current plan text
    marginBottom: 10, // Space below the text
  },
  statusText: {
    fontSize: 16, // Font size for the status text
    color: '#888', // Gray color for the status text
    marginBottom: 15, // Space below the text
  },
  planTitle: {
    fontSize: 20, // Font size for the "Available Plans" title
    fontWeight: '600', // Semi-bold font weight
    marginBottom: 15, // Space below the title
  },
  planContainer: {
    marginBottom: 20, // Space below each plan container
    borderWidth: 1, // Border around the plan container
    borderColor: '#E5E5E5', // Light gray border color
    borderRadius: 10, // Rounded corners for the container
    padding: 15, // Padding inside the container
    backgroundColor: '#f9f9f9', // Light gray background for the container
  },
  planName: {
    fontSize: 18, // Font size for the plan name
    fontWeight: 'bold', // Bold font weight for emphasis
    marginBottom: 10, // Space below the plan name
  },
  planPrice: {
    fontSize: 16, // Font size for the plan price
    color: '#28a745', // Green color for the price
    marginBottom: 10, // Space below the price
  },
  planDescription: {
    fontSize: 14, // Font size for the plan description
    color: '#555', // Dark gray color for the description
    marginBottom: 15, // Space below the description
  },
  featuresList: {
    marginBottom: 15, // Space below the features list
  },
  featureText: {
    fontSize: 14, // Font size for each feature
    color: '#777', // Gray color for the feature text
  },
  selectButton: {
    marginTop: 10, // Space above the select button
  },
});

export default BillingScreen;