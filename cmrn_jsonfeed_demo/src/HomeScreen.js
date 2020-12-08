import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import axios from "axios"

const url = "https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods"

export default function HomeScreen() {

    useEffect(()=>{
      loadData()
    },[])

    loadData = async ()=>{
        const result = await axios.get(url)
        console.log(JSON.stringify(result.data))      
    }

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
