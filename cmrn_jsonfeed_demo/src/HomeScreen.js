import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
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

  return (
    <View style={{flex: 1}}>
      {dataArray.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}
