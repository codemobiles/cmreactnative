import React, {useEffect} from 'react'
import { View, Text, Button,TouchableOpacity,Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function LoginScreen(props) {
 
    useEffect(() => {
        setNavigationOptions()
    }, [])

    const setNavigationOptions =()=>{
        props.navigation.setOptions({
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
          })
    }

    return (
        <View style={{flex: 1, justifyContent: 'center',alignItems:'center'}}>
            <Text>Login</Text>
            <Button title="Login" onPress={()=>{
                props.navigation.navigate("Success")
            }}/>
            <View style={{height: 10}}/>
            <Button title="Register" onPress={()=>{
                props.navigation.navigate("Register")
            }}/>
        </View>
    )
}
