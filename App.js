import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SetFocusScreen from './screens/SetFocusScreen';
import PickAdvisorsScreen from './screens/PickAdvisorsScreen';
import CreateInvitationScreen from './screens/CreateInvitationScreen';
import React from 'react';
import Secrets from './Secrets';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SetFocus">
        <Stack.Screen name="SetFocus" component={SetFocusScreen} />
        <Stack.Screen name="PickAdvisors" component={PickAdvisorsScreen} />
        <Stack.Screen name="CreateInvitation" component={CreateInvitationScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}