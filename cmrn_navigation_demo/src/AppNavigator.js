import React from 'react';
import {Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import SubTab1Screen from './SubTab1Screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tab1 = {
    tabBarLabel: 'Tab1',
    tabBarIcon: ({focused}) => (
      <Image
        style={{
          height: 28,
          width: 28,
        }}
        resizeMode="contain"
        source={
          focused
            ? require('./img/ic_profile_select.png')
            : require('./img/ic_profile.png')
        }
      />
    ),
  };
  
  const tab2 = {
    tabBarLabel: 'Tab2',
    tabBarIcon: ({focused}) => (
      <Image
        style={{
          height: 28,
          width: 28,
        }}
        resizeMode="contain"
        source={
          focused
            ? require('./img/ic_card_select.png')
            : require('./img/ic_card.png')
        }
      />
    ),
  };


  const Tab1Navigator = (props) => {
    return (
      <Stack.Navigator initialRouteName="MainTab1">
        <Stack.Screen name="MainTab1" component={Tab1Screen} />
        <Stack.Screen name="SubTab1" component={SubTab1Screen} />    
      </Stack.Navigator>
    );
  };

const TabScreens = (props) => {
  return (
    <Tab.Navigator initialRouteName="Tab1">
      <Tab.Screen name="Tab1" component={Tab1Navigator} options={tab1}/>
      <Tab.Screen name="Tab2" component={Tab2Screen} options={tab2}/>
    </Tab.Navigator>
  );
};

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Success" component={TabScreens} />
    </Stack.Navigator>
  );
};

export default RootStack;
