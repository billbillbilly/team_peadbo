import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './Reducer';


import HomeScreen from './screens/HomeScreen';

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

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

// User Tab Stack
const UserTabStack = (props) => {
    const Stack = createNativeStackNavigator();
    const { navigation, route } = props;
    const dispatch = useDispatch();
  
    return (
        <Stack.Navigator initialRouteName='Usersettings' screenOptions={{ 
            headerShown: true, 
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#F9F9F9',
            },
        }}>
            <Stack.Screen name='Usersettings' component={HomeScreen}/>
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
    const dispatch = useDispatch();
    const Tabs = createBottomTabNavigator();

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