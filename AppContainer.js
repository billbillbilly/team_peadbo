import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import React from 'react';

import userSlice from './Reducer';
import ChatBot from './components/ChatBot';
import FloatingButton from './components/FloatingButton';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';
import SignupScreen from './screens/SignupScreen';
import CommunicationStyleScreen from './screens/Onboarding_Screens/CommunicationStyleScreen';
import PersonalInformationScreen from './screens/Onboarding_Screens/PersonalInformationScreen';

import AdvisorSelectionScreen from './screens/Board_Creation_Screens/AdvisorSelectionScreen';
import BoardDetailsScreen from './screens/Board_Creation_Screens/BoardDetailsScreen';
import FocusScreen from './screens/Board_Creation_Screens/FocusScreen';
import CreateInvitationScreen from './screens/Board_Creation_Screens/CreateInvitationScreen';
import TimeAvailabilityScreen from './screens/Board_Creation_Screens/TimeAvailabilityScreen';
import Review from './screens/Board_Creation_Screens/ReviewScreen';

import ProfileScreen from './screens/ProfileScreens/ProfileScreen';
import SettingsScreen from './screens/ProfileScreens/SettingsScreen';
import NotificationScreen from './screens/ProfileScreens/NotificationScreen';
import UpgradePlanScreen from './screens/ProfileScreens/UpgradePlanScreen';
import BillingScreen from './screens/ProfileScreens/BillingScreen';
import FAQScreen from './screens/ProfileScreens/FAQScreen';
import ContactSupportScreen from './screens/ProfileScreens/ContactSupportScreen';

import SendNotificationScreen from './screens/Board_Creation_Screens/SendNotificationScreen';

import BoardDetailScreen from './screens/Board_Detail_Screens/BoardDetailScreen';
import EventScreen from './screens/Board_Detail_Screens/EventScreen';
import NewsletterScreen from './screens/News_Letter_Screens/NewsletterScreen';
import CreateNewsletterScreen from './screens/News_Letter_Screens/CreateNewsletterScreen';

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

const BoardCreationStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='FocusScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AdvisorSelectionScreen' component={AdvisorSelectionScreen}/>
            <Stack.Screen name='BoardDetailsScreen' component={BoardDetailsScreen}/>
            <Stack.Screen name='FocusScreen' component={FocusScreen}/>
            <Stack.Screen name='CreateInvitationScreen' component={CreateInvitationScreen}/>
            <Stack.Screen name='TimeAvailabilityScreen' component={TimeAvailabilityScreen}/>
            <Stack.Screen name='ReviewScreen' component={Review}/>
            <Stack.Screen name='SendNotificationScreen' component={SendNotificationScreen} />
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

const OnboardingStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='PersonalInformation' screenOptions={{ headerShown: true }}>
            <Stack.Screen name='CommunicationStyle' component={CommunicationStyleScreen}/>
            <Stack.Screen name='PersonalInformation' component={PersonalInformationScreen}/>
        </Stack.Navigator>
    )
}

const HomeTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            <Stack.Screen name='BoardCreation' component={BoardCreationStack}/>
            <Stack.Screen name='BoardDetail' component={BoardDetailScreen}/>
            <Stack.Screen name='EventScreen' component={EventScreen}/>
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

const ContactTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='ContactList' screenOptions={{ headerShown: true }}>
            <Stack.Screen name='ContactList' component={ContactsScreen} />
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

const NewsTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='NewsletterMain' screenOptions={{ headerShown: true }}>
            <Stack.Screen name='NewsletterMain' component={NewsletterScreen} />
            <Stack.Screen name='CreateNewsletter' component={CreateNewsletterScreen} />
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

const UserTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='UserProfile' screenOptions={{ headerShown: true }}>
            <Stack.Screen name='UserProfile' component={ProfileScreen}/>
            <Stack.Screen name='Settings' component={SettingsScreen}/>
            <Stack.Screen name='Notifications' component={NotificationScreen}/>
            <Stack.Screen name='UpgradePlan' component={UpgradePlanScreen} />
            <Stack.Screen name='Billing' component={BillingScreen} />
            <Stack.Screen name='FAQ' component={FAQScreen} />
            <Stack.Screen name='ContactSupport' component={ContactSupportScreen} />
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

const DynamicTabsNavigator = () => {
    const Tabs = createBottomTabNavigator();
    return (
      <Tabs.Navigator initialRouteName='HomeTab' screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { display: ['Login', 'Signup'].includes(route.name) ? 'none' : 'flex' },
      })}>
          <Tabs.Screen name="Login" component={LoginScreen} options={{ tabBarIcon: ({ color, size }) => (<Icon name="home" type="font-awesome" color={color} size={size} />), }} />
          <Tabs.Screen name="Signup" component={SignupScreen} options={{ tabBarIcon: ({ color, size }) => (<Icon name="home" type="font-awesome" color={color} size={size} />), }} />
          <Tabs.Screen name="Onboarding" component={OnboardingStack} options={{ tabBarIcon: ({ color, size }) => (<Icon name="home" type="font-awesome" color={color} size={size} />), }} />
          <Tabs.Screen name="HomeTab" component={HomeTabStack} options={{ tabBarIcon: ({ color, size }) => (<Icon name="home" type="font-awesome" color={color} size={size} />), }} />
          <Tabs.Screen name="ContactsTab" component={ContactTabStack} options={{ tabBarIcon: ({ color, size }) => (<Icon name="group" type="font-awesome" color={color} size={size} />), }} />
          <Tabs.Screen name="LetterTab" component={NewsTabStack} options={{ tabBarIcon: ({ color, size }) => (<Icon name="list" type="font-awesome" color={color} size={size} />), }} />
          <Tabs.Screen name="UserTab" component={UserTabStack} options={{ tabBarIcon: ({ color, size }) => (<Icon name="user" type="font-awesome" color={color} size={size} />), }} />
      </Tabs.Navigator>
    );
};

const AppContainer = () => {
    const navigationRef = React.useRef();
    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <DynamicTabsNavigator />
                <FloatingButton onPress={() => navigationRef.current?.navigate('ChatBot')} />
            </NavigationContainer>
        </Provider>
    );
};

export default AppContainer;
