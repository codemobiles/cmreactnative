import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const url =
  'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods';

export default function HomeScreen() {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  loadData = async () => {
    try {
      const result = await axios.get(url);
      setDataArray(result.data.youtubes);
    } catch (e) {
      setDataArray([]);
    }
  };

  renderRow = ({item, index}) => (
    <Text>
      {index + 1}. {item.title}
    </Text>
  );

  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={{flex: 1}}>
      {/* Banner */}
      <Image
        style={{height: 120, width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />
      <FlatList
        data={dataArray}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </ImageBackground>
  );
}
