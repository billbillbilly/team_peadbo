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

import LoginScreen from './screens/LoginScreen';  // Import LoginScreen
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
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

const BoardCreationStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();

    return (
        <Stack.Navigator initialRouteName='FocusScreen' screenOptions={{ 
            headerShown: false, 
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#F9F9F9',
                shadowOpacity: 0,
                elevation: 0
            },
        }}>
            <Stack.Screen name='AdvisorSelectionScreen' component={AdvisorSelectionScreen}/>
            <Stack.Screen name='BoardDetailsScreen' component={BoardDetailsScreen}/>
            <Stack.Screen name='FocusScreen' component={FocusScreen}/>
            <Stack.Screen name='CreateInvitationScreen' component={CreateInvitationScreen}/>
            <Stack.Screen name='TimeAvailabilityScreen' component={TimeAvailabilityScreen}/>
            <Stack.Screen name='ReviewScreen' component={Review}/>
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

// Onboarding Stack
const OnboardingStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();

    return (
        <Stack.Navigator initialRouteName='PersonalInformationScreen' screenOptions={{ 
            headerShown: true, 
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#F9F9F9',
                shadowOpacity: 0,
                elevation: 0
            },
        }}>
            <Stack.Screen name='CommunicationStyleScreen' component={CommunicationStyleScreen}/>
            <Stack.Screen name='PersonalInformationScreen' component={PersonalInformationScreen}/>
        </Stack.Navigator>
    )
}

// Home Tab Stack - renamed inner "Home" screen to "HomeMain"
const HomeTabStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();

    return (
        <Stack.Navigator initialRouteName='HomeMain' 
            screenOptions={{ 
                headerShown: true, 
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#F9F9F9',
                    shadowOpacity: 0,
                    elevation: 0
                },
                tabBarStyle: {
                    display: 'none',
                },
        }}>
            <Stack.Screen 
                name='HomeMain' // changed from 'Home' to 'HomeMain'
                component={HomeScreen} 
                options={{ headerShown: false}}
            />
            
            <Stack.Screen name='BoardCreation' component={BoardCreationStack}/>
            <Stack.Screen name='FocusScreen' component={FocusScreen}/>
            <Stack.Screen name='BoardDetailsScreen' component={BoardDetailsScreen}/>
            <Stack.Screen name='AdvisorSelectionScreen' component={AdvisorSelectionScreen}/>
            <Stack.Screen name='CreateInvitationScreen' component={CreateInvitationScreen}/>
            <Stack.Screen name='SendNotificationScreen' component={SendNotificationScreen} />
            <Stack.Screen name='TimeAvailabilityScreen' component={TimeAvailabilityScreen}/>
            <Stack.Screen name='ReviewScreen' component={Review}/>
            {/* Board management screens */}
            <Stack.Screen name='BoardDetail' component={BoardDetailScreen} options={{ headerShown: false}}/>
            <Stack.Screen name='EventScreen' component={EventScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

// Contact Tab Stack
const ContactTabStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();

    return (
        <Stack.Navigator initialRouteName='Contacts' screenOptions={{ 
            headerShown: true, 
            headerTitle: 'Contacts',
            headerStyle: {
                backgroundColor: '#F9F9F9',
            },
        }}>
            <Stack.Screen name='Contacts' component={ContactsScreen} />
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

// Newsletter Tab Stack
const NewsTabStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();
  
    return (
        <Stack.Navigator initialRouteName='Newsletter' screenOptions={{ 
            headerShown: true, 
            headerTitle: 'Newsletter',
            headerStyle: {
                backgroundColor: '#F9F9F9',
            },
        }}>
            <Stack.Screen name='Newsletter' component={NewsletterScreen} />
            <Stack.Screen
                name='CreateNewsletter'
                component={CreateNewsletterScreen}
                options={{ title: 'New Newsletter' }}
            />
            <Stack.Screen name="ChatBot" component={ChatBot} />
        </Stack.Navigator>
    )
}

// User Tab Stack
const UserTabStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();
  
    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{ 
            headerShown: true, 
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#F9F9F9',
            },
        }}>
            <Stack.Screen name='Profile' component={ProfileScreen}/>
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
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            display:
              route.name === 'Login' ||
              route.name === 'Signup' ||
              route.name === 'ForgotPassword'
                ? 'none'
                : 'flex',
          },
        })}
      >
        <Tabs.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
  
        <Tabs.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
  
        <Tabs.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{
            tabBarButton: () => null, 
            tabBarStyle: { display: 'none' },
            headerShown: false,
          }}
        />
  
        <Tabs.Screen
          name="NewUserOnboarding"
          component={OnboardingStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
  
        <Tabs.Screen
          name="Home"
          component={HomeTabStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
  
        <Tabs.Screen
          name="Contacts"
          component={ContactTabStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="group" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
  
        <Tabs.Screen
          name="Letter"
          component={NewsTabStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="list" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
  
        <Tabs.Screen
          name="Setting"
          component={UserTabStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" type="font-awesome" color={color} size={size} />
            ),
          }}
        />
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

function App() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

export default App;
