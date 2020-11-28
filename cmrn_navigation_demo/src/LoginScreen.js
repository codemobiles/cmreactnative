import React from 'react'
import { View, Text, Button } from 'react-native'

export default function LoginScreen(props) {
    return (
        <View style={{flex: 1, justifyContent: 'center',alignItems:'center'}}>
            <Text>Login</Text>
            <Button title="Register" onPress={()=>{
                props.navigation.navigate("Register")
            }}/>
        </View>
    )
}
