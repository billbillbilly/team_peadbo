import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import React, { useRef } from 'react';
import { ThemeProvider } from './ThemeContext';

import userSlice from './Reducer';
import ChatBot from './components/ChatBot';
import FloatingButton from './components/FloatingButton';

// Auth Screens
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// Onboarding Screens
import CommunicationStyleScreen from './screens/Onboarding_Screens/CommunicationStyleScreen';
import PersonalInformationScreen from './screens/Onboarding_Screens/PersonalInformationScreen';

// Home
import HomeScreen from './screens/HomeScreen';

// Contacts
import ContactsScreen from './screens/ContactsScreen';

// Board Creation Screens
import AdvisorSelectionScreen from './screens/Board_Creation_Screens/AdvisorSelectionScreen';
import BoardDetailsScreen from './screens/Board_Creation_Screens/BoardDetailsScreen';
import FocusScreen from './screens/Board_Creation_Screens/FocusScreen';
import CreateInvitationScreen from './screens/Board_Creation_Screens/CreateInvitationScreen';
import TimeAvailabilityScreen from './screens/Board_Creation_Screens/TimeAvailabilityScreen';
import Review from './screens/Board_Creation_Screens/ReviewScreen';
import SendNotificationScreen from './screens/Board_Creation_Screens/SendNotificationScreen';
// import SuccessScreen from './screens/Board_Creation_Screens/SuccessScreen';

// Profile Screens
import ProfileScreen from './screens/ProfileScreens/ProfileScreen';
import SettingsScreen from './screens/ProfileScreens/SettingsScreen';
import NotificationScreen from './screens/ProfileScreens/NotificationScreen';
import UpgradePlanScreen from './screens/ProfileScreens/UpgradePlanScreen';
import BillingScreen from './screens/ProfileScreens/BillingScreen';
import FAQScreen from './screens/ProfileScreens/FAQScreen';
import ContactSupportScreen from './screens/ProfileScreens/ContactSupportScreen';
import MyResumeSection from './screens/ProfileScreens/MyResumeSection';

// Board Detail Screens
import BoardDetailScreen from './screens/Board_Detail_Screens/BoardDetailScreen';
import EventScreen from './screens/Board_Detail_Screens/EventScreen';

// Newsletter Screens
import NewsletterScreen from './screens/News_Letter_Screens/NewsletterScreen';
import ContactPickerScreen from './screens/News_Letter_Screens/ContactPickerScreen';
import RichTextEditorScreen from './screens/News_Letter_Screens/RichTextEditorScreen';
import NewsletterPreviewScreen from './screens/News_Letter_Screens/NewsletterPreviewScreen';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// Board Creation Flow
const BoardCreationStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="FocusScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdvisorSelectionScreen" component={AdvisorSelectionScreen} />
      <Stack.Screen name="BoardDetailsScreen" component={BoardDetailsScreen} />
      <Stack.Screen name="FocusScreen" component={FocusScreen} />
      <Stack.Screen name="CreateInvitationScreen" component={CreateInvitationScreen} />
      <Stack.Screen name="TimeAvailabilityScreen" component={TimeAvailabilityScreen} />
      <Stack.Screen name="ReviewScreen" component={Review} />
      <Stack.Screen name="SendNotificationScreen" component={SendNotificationScreen} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
    </Stack.Navigator>
  );
};

// Onboarding Flow
const OnboardingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="PersonalInformationScreen" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="CommunicationStyleScreen" component={CommunicationStyleScreen} />
      <Stack.Screen name="PersonalInformationScreen" component={PersonalInformationScreen} />
    </Stack.Navigator>
  );
};

const HomeTabStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="BoardCreation" component={BoardCreationStack} />
      <Stack.Screen name="BoardDetail" component={BoardDetailScreen} options={{ headerShown: false }} />
      <Stack.Screen name="EventScreen" component={EventScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const ContactTabStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Contacts" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
    </Stack.Navigator>
  );
};

const NewsTabStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Newsletter" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Newsletter" component={NewsletterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ContactPicker" component={ContactPickerScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="RichTextEditor" component={RichTextEditorScreen} options={{ title: 'Edit Newsletter', headerShown: false }} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
      <Stack.Screen name="NewsletterPreview" component={NewsletterPreviewScreen} options={{ title: 'Preview Newsletter', headerShown: false }} />
    </Stack.Navigator>
  );
};

const UserTabStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="UpgradePlan" component={UpgradePlanScreen} />
      <Stack.Screen name="Billing" component={BillingScreen} />
      <Stack.Screen name="FAQ" component={FAQScreen} />
      <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ResumeLibrary" component={MyResumeSection} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const RootStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const DynamicTabsNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { display: route.name === 'Login' || route.name === 'Signup' ? 'none' : 'flex' },
        tabBarActiveTintColor: '#1EA896',
        tabBarInactiveTintColor: '#B0B0B0',
      })}
    >
      <Tabs.Screen name="Home" component={HomeTabStack} options={{
        tabBarIcon: ({ color, size }) => <Icon name="home" type="font-awesome" color={color} size={size} />,
      }} />
      <Tabs.Screen name="Contacts" component={ContactTabStack} options={{
        tabBarIcon: ({ color, size }) => <Icon name="group" type="font-awesome" color={color} size={size} />,
      }} />
      <Tabs.Screen name="Letter" component={NewsTabStack} options={{
        tabBarIcon: ({ color, size }) => <Icon name="list" type="font-awesome" color={color} size={size} />,
      }} />
      <Tabs.Screen name="Setting" component={UserTabStack} options={{
        tabBarIcon: ({ color, size }) => <Icon name="user" type="font-awesome" color={color} size={size} />,
      }} />
    </Tabs.Navigator>
  );
};

// Final App Container
const AppContainer = () => {
  const navigationRef = useRef();
  const [currentRouteName, setCurrentRouteName] = React.useState('');

  // Screens in which the chatbot should not appear (before being logged in or during onboarding, adjust as new screens are added)
  const excludedScreens = ['Login', 'Signup', 'ForgotPassword', 'PersonalInformationScreen', 'CommunicationStyleScreen', 'ChatBot',];


  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer
          ref={navigationRef}
          onStateChange={() => {
            const route = navigationRef.current?.getCurrentRoute();
            setCurrentRouteName(route?.name || ''); // Update the current route name
            console.log('Updated Route:', route?.name); // Debugging
          }}
          onReady={() => {
            const route = navigationRef.current?.getCurrentRoute();
            setCurrentRouteName(route?.name || ''); // Update the current route name
            console.log('Initial Route:', route?.name); // Debugging
          }}
        >
          <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {/* Screens not part of the tab bar */}
            <RootStack.Screen name="Login" component={LoginScreen} />
            <RootStack.Screen name="Signup" component={SignupScreen} />
            <RootStack.Screen name="NewUserOnboarding" component={OnboardingStack} />

            {/* Tab Navigator */}
            <RootStack.Screen name="Main" component={DynamicTabsNavigator} />
          </RootStack.Navigator>

          {/* Floating Button */}
          {!excludedScreens.includes(currentRouteName) && (
            <FloatingButton onPress={() => navigationRef.current?.navigate('ChatBot')} />
          )}
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default AppContainer;
