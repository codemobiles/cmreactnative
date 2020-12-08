import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

const RootStack = ()=> {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="DetailScreen" component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default RootStack