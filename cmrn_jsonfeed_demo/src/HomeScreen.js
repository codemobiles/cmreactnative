import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
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
      {index+1}. {item.title}
    </Text>
  )

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={dataArray}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
