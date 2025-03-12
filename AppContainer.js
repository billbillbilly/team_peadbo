import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './Reducer';

import ProfileScreen from './screens/ProfileScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import NotificationsScreen from './screens/NotificationsScreen';
// import PreferencesScreen from './screens/PreferencesScreen';

import HomeScreen from './screens/HomeScreen';
import CommunicationStyleScreen from './screens/Onboarding_Screens/CommunicationStyleScreen';
import PersonalInformationScreen from './screens/Onboarding_Screens/PersonalInformationScreen';

import AdvisorSelectionScreen from './screens/Board_Creation_Screens/AdvisorSelectionScreen';
import BoardDetailsScreen from './screens/Board_Creation_Screens/BoardDetailsScreen';
import FocusScreen from './screens/Board_Creation_Screens/FocusScreen';
import CreateInvitationScreen from './screens/Board_Creation_Screens/CreateInvitationScreen';
import TimeAvailabilityScreen from './screens/Board_Creation_Screens/TimeAvailabilityScreen';
import Review from './screens/Board_Creation_Screens/ReviewScreen';

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
            headerShown: true, 
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

// Home Tab Stack
const HomeTabStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();

    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ 
            headerShown: true, 
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#F9F9F9',
                shadowOpacity: 0,
                elevation: 0
            },
        }}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='BoardCreation' component={BoardCreationStack}/>
            <Stack.Screen name='FocusScreen' component={FocusScreen}/>
            <Stack.Screen name='BoardDetailsScreen' component={BoardDetailsScreen}/>
            <Stack.Screen name='AdvisorSelectionScreen' component={AdvisorSelectionScreen}/>
            <Stack.Screen name='CreateInvitationScreen' component={CreateInvitationScreen}/>
            <Stack.Screen name='TimeAvailabilityScreen' component={TimeAvailabilityScreen}/>
            <Stack.Screen name='ReviewScreen' component={Review}/>
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
            <Stack.Screen name='Contacts' component={HomeScreen}/>
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
            <Stack.Screen name='Newsletter' component={HomeScreen}/>
        </Stack.Navigator>
    )
}

// User Tab Stack (Updated with Profile Screen, but commented out Settings/Notifications/Preferences)
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
            {/* <Stack.Screen name='Settings' component={SettingsScreen}/> */}
            {/* <Stack.Screen name='Notifications' component={NotificationsScreen}/> */}
            {/* <Stack.Screen name='Preferences' component={PreferencesScreen}/> */}
        </Stack.Navigator>
    )
}

const DynamicTabsNavigator = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tabs.Screen
            name="Home"
            component={HomeTabStack}
            options={{
            tabBarIcon: ({ color, size }) => (
                <Icon name="list" type="font-awesome" color={color} size={size} />
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
}

const AppContainer = () => {
    return(
        <Provider store={store}>
        <NavigationContainer>
            <DynamicTabsNavigator />
        </NavigationContainer>
        </Provider>
    );
}

function App() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

export default App;
