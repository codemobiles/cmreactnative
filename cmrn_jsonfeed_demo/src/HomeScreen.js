import React from 'react'
import { View, Text } from 'react-native'

export default function HomeScreen() {


    const dataArray = [
        {title: "Angular", price: 99, id: "1"},
        {title: "VueJS", price: 39, id: "2"},
        {title: "RectJS", price: 19, id: "3"},
        {title: "Flutter", price: 32, id: "4"},
    ]

    return (
        <View style={{flex:1}}>
            {dataArray.map(item => <Text key={item.id}>{item.title} : {item.price}</Text>)}                        
        </View>
    )
}
