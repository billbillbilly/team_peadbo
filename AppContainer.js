import { NavigationContainer } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userSlice from './Reducer';

import LoginScreen from './screens/LoginScreen';  // Import LoginScreen
import HomeScreen from './screens/HomeScreen';
import ContactsScreen from './screens/ContactsScreen';
import SignupScreen from './screens/SignupScreen';
import ProfileScreen from './screens/ProfileScreens/ProfileScreen';
import SettingsScreen from './screens/ProfileScreens/SettingsScreen';
import NotificationScreen from './screens/ProfileScreens/NotificationScreen';
import UpgradePlanScreen from './screens/ProfileScreens/UpgradePlanScreen';
import BillingScreen from './screens/ProfileScreens/BillingScreen';
import FAQScreen from './screens/ProfileScreens/FAQScreen';
import ContactSupportScreen from './screens/ProfileScreens/ContactSupportScreen';

const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

const UserTabStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen name='Profile' component={ProfileScreen}/>
            <Stack.Screen name='Settings' component={SettingsScreen}/>
            <Stack.Screen name='Notifications' component={NotificationScreen}/>
            <Stack.Screen name='UpgradePlan' component={UpgradePlanScreen} />
            <Stack.Screen name='Billing' component={BillingScreen} />
            <Stack.Screen name='FAQ' component={FAQScreen} />
            <Stack.Screen name='ContactSupport' component={ContactSupportScreen} />
        </Stack.Navigator>
    );
}

const DynamicTabsNavigator = () => {
    const Tabs = createBottomTabNavigator();
    return (
      <Tabs.Navigator
          initialRouteName='Home'
          screenOptions={({ route }) => ({
              headerShown: false,
              tabBarStyle: { display: route.name === 'Login' || route.name === 'Signup' ? 'none' : 'flex' },
          })}
      >
          <Tabs.Screen
              name="Home"
              component={HomeScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <Icon name="home" type="font-awesome" color={color} size={size} />
                  ),
              }}
          />
          <Tabs.Screen
              name="Contacts"
              component={ContactsScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <Icon name="group" type="font-awesome" color={color} size={size} />
                  ),
              }}
          />
          <Tabs.Screen
              name="Profile"
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

const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='DynamicTabs'>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DynamicTabs" component={DynamicTabsNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

// Your Original App Structure - Kept as App
function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack />
            </NavigationContainer>
        </Provider>
    );
}

export default App;


