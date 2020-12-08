import React from 'react'
import { View, Text } from 'react-native'

export default function DetailScreen(props) {

  React.useEffect(() => {
        setNavigationOption()
  }, [])

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'Detail',
      headerStyle: {
        backgroundColor: '#999CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
      
    });
  };

  return (
    <View>
      <Text>Debug: {JSON.stringify(props.route.params.item)}</Text>
    </View>
  )
}
