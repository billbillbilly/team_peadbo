import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './Reducer';
import ChatBot from './components/ChatBot';
import FloatingButton from './components/FloatingButton';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';

import CommunicationStyleScreen from './screens/Onboarding_Screens/CommunicationStyleScreen';
import PersonalInformationScreen from './screens/Onboarding_Screens/PersonalInformationScreen';

import AdvisorSelectionScreen from './screens/Board_Creation_Screens/AdvisorSelectionScreen';
import BoardDetailsScreen from './screens/Board_Creation_Screens/BoardDetailsScreen';
import FocusScreen from './screens/Board_Creation_Screens/FocusScreen';
import CreateInvitationScreen from './screens/Board_Creation_Screens/CreateInvitationScreen';
import TimeAvailabilityScreen from './screens/Board_Creation_Screens/TimeAvailabilityScreen';
import Review from './screens/Board_Creation_Screens/ReviewScreen';
import SendNotificationScreen from './screens/Board_Creation_Screens/SendNotificationScreen';

import BoardDetailScreen from './screens/Board_Detail_Screens/BoardDetailScreen';
import EventScreen from './screens/Board_Detail_Screens/EventScreen';

import NewsletterScreen from './screens/News_Letter_Screens/NewsletterScreen';
import CreateNewsletterScreen from './screens/News_Letter_Screens/CreateNewsletterScreen';
import RichTextEditorScreen from './screens/News_Letter_Screens/RichTextEditorScreen';
import NewsletterPreviewScreen from './screens/News_Letter_Screens/NewsletterPreviewScreen';
import ContactPickerScreen from './screens/News_Letter_Screens/ContactPickerScreen';

import ProfileScreen from './screens/ProfileScreens/ProfileScreen';
import SettingsScreen from './screens/ProfileScreens/SettingsScreen';
import NotificationScreen from './screens/ProfileScreens/NotificationScreen';
import UpgradePlanScreen from './screens/ProfileScreens/UpgradePlanScreen';
import BillingScreen from './screens/ProfileScreens/BillingScreen';
import FAQScreen from './screens/ProfileScreens/FAQScreen';
import ContactSupportScreen from './screens/ProfileScreens/ContactSupportScreen';

// Store setup
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// Stacks

const OnboardingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='PersonalInformationScreen' screenOptions={{ headerShown: true, headerTitle: '', headerStyle: { backgroundColor: '#F9F9F9' } }}>
      <Stack.Screen name='CommunicationStyleScreen' component={CommunicationStyleScreen} />
      <Stack.Screen name='PersonalInformationScreen' component={PersonalInformationScreen} />
    </Stack.Navigator>
  );
};

const BoardCreationStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='FocusScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='AdvisorSelectionScreen' component={AdvisorSelectionScreen} />
      <Stack.Screen name='BoardDetailsScreen' component={BoardDetailsScreen} />
      <Stack.Screen name='FocusScreen' component={FocusScreen} />
      <Stack.Screen name='CreateInvitationScreen' component={CreateInvitationScreen} />
      <Stack.Screen name='TimeAvailabilityScreen' component={TimeAvailabilityScreen} />
      <Stack.Screen name='ReviewScreen' component={Review} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  );
};

const HomeTabStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='HomeMain' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeMain' component={HomeScreen} />
      <Stack.Screen name='BoardCreation' component={BoardCreationStack} />
      <Stack.Screen name='SendNotificationScreen' component={SendNotificationScreen} />
      <Stack.Screen name='BoardDetail' component={BoardDetailScreen} />
      <Stack.Screen name='EventScreen' component={EventScreen} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  );
};

const ContactTabStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Contacts' screenOptions={{ headerShown: true, headerTitle: 'Contacts' }}>
      <Stack.Screen name='Contacts' component={ContactsScreen} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  );
};

const NewsTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator initialRouteName='Newsletter' screenOptions={{ headerShown: true, headerTitle: 'Newsletter' }}>
        <Stack.Screen name='Newsletter' component={NewsletterScreen} />
        <Stack.Screen name='CreateNewsletter' component={CreateNewsletterScreen} options={{ title: 'New Newsletter' }} />
        <Stack.Screen name='RichTextEditor' component={RichTextEditorScreen} options={{ title: 'Edit Content' }} />
        <Stack.Screen name='NewsletterPreview' component={NewsletterPreviewScreen} options={{ title: 'Preview Newsletter' }} />
        <Stack.Screen name='ContactPicker' component={ContactPickerScreen} options={{ title: 'Select Recipients' }} />
      </Stack.Navigator>
    );
  };

const UserTabStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: true, headerTitle: '', headerStyle: { backgroundColor: '#F9F9F9' } }}>
      <Stack.Screen name='Profile' component={ProfileScreen} />
      <Stack.Screen name='Settings' component={SettingsScreen} />
      <Stack.Screen name='Notifications' component={NotificationScreen} />
      <Stack.Screen name='UpgradePlan' component={UpgradePlanScreen} />
      <Stack.Screen name='Billing' component={BillingScreen} />
      <Stack.Screen name='FAQ' component={FAQScreen} />
      <Stack.Screen name='ContactSupport' component={ContactSupportScreen} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  );
};

// Tabs
const DynamicTabsNavigator = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display: ['Login', 'Signup', 'ForgotPassword'].includes(route.name) ? 'none' : 'flex',
        },
      })}
    >
      <Tabs.Screen
        name='Login'
        component={LoginScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='sign-in' type='font-awesome' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='Signup'
        component={SignupScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='user-plus' type='font-awesome' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='ForgotPassword'
        component={ForgotPasswordScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='unlock-alt' type='font-awesome' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='NewUserOnboarding'
        component={OnboardingStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='rocket' type='font-awesome' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='Home'
        component={HomeTabStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='home' type='font-awesome' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='Contacts'
        component={ContactTabStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='group' type='font-awesome' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='Newsletter'
        component={NewsTabStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='envelope' type='font-awesome' color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={UserTabStack}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='user' type='font-awesome' color={color} size={size} />,
        }}
      />
    </Tabs.Navigator>
  );
};

// Root Stack for Auth + Main App
const RootStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Tabs' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Tabs' component={DynamicTabsNavigator} />
    </Stack.Navigator>
  );
};

// App Container
const App = () => {
  const navigationRef = React.useRef();

  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStack />
        <FloatingButton onPress={() => navigationRef.current?.navigate('ChatBot')} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
