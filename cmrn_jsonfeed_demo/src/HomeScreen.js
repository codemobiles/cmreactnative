import React from 'react'
import { View, Text } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={{flex:1}}>
            {["Angular", "VueJS", "ReactJS"].map(item => <Text key={item}>{item}</Text>)}                        
        </View>
    )
}
