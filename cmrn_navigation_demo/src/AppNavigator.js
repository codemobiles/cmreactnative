import React from 'react';
import {Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = (props) => {
  return (
    <Tab.Navigator initialRouteName="Tab1">
      <Stack.Screen name="Tab1" component={Tab1Screen} />
      <Stack.Screen name="Tab2" component={Tab2Screen} />
    </Tab.Navigator>
  );
};

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default TabScreens;
