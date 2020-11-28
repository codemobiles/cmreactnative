import React from 'react';
import {Image, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const RootStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#779CED',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {color: '#fff'},
          headerBackTitle: ' ',
          headerRight: ()=>{
              return (<TouchableOpacity
                activeOpacity={0.1}
                onPress={() => alert('www.codemobiles.com')}
                style={{padding: 10}}>
                <Icon
                  name="address-card"
                  size={20}
                  color="#fff"
                  
                />
              </TouchableOpacity>)
          }
        }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
