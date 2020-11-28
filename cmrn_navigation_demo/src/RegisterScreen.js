import React, {useEffect} from 'react'
import { View, Text, Button,TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function RegisterScreen(props) {
    useEffect(() => {
        setNavigationOptions()
    }, [])

    const setNavigationOptions =()=>{
        props.navigation.setOptions({
            title: 'Register',
            headerStyle: {
              backgroundColor: '#779CED',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {color: '#fff'},
            headerBackTitle: ' ',
          })
    }

    return (
        <View>
            <Text>Register</Text>
        </View>
    )
}
