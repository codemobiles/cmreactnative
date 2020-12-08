import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const url =
  'https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods';

const urlWithPost = 'https://codemobiles.com/adhoc/youtubes/index_new.php';

export default function HomeScreen(props) {
  const [dataArray, setDataArray] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    // loadData();
    setNavigationOption();
    loadDataWithPost();
  }, []);

  loadData = async () => {
    try {
      setIsFetching(true);
      setDataArray([]);
      const result = await axios.get(url);
      setDataArray(result.data.youtubes);

      setIsFetching(false);
    } catch (e) {
      setDataArray([]);
    }
  };

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: 'Home',
      headerStyle: {
        backgroundColor: '#999CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.1}
          onPress={() => alert('www.codemobiles.com')}
          style={{padding: 10}}>
          <Icon
            name="address-card"
            size={20}
            color="#fff"
            style={{
              height: 24,
              width: 24,
            }}
          />
        </TouchableOpacity>
      ),
    });
  };

  loadDataWithPost = async () => {
    try {
      setIsFetching(true);
      setDataArray([]);

      const regUsername = 'admin';
      const regPassword = 'password';
      let data = `username=${regUsername}&password=${regPassword}&type=foods`;
      //   let dataJson = {
      //       username: regUsername,
      //       password: regPassword
      //   }

      const result = await axios.post(urlWithPost, data);
      setDataArray(result.data.youtubes);

      setIsFetching(false);
    } catch (e) {
      setDataArray([]);
    }
  };

  renderRow = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('DetailScreen');
      }}
      style={styles.listCard}>
      {/* Avatar and title, subtitle */}
      <View style={styles.listCardView}>
        {/* Avatar */}
        <Image style={styles.listAvatar} source={{uri: item.avatar_image}} />

        {/* Title and Subtitle */}
        <View style={styles.listTitleSubtitleContainer}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text style={styles.listSubTitle}>{item.subtitle}</Text>
        </View>
      </View>

      {/* Youtube Image */}
      <Image
        source={{uri: item.youtube_image}}
        style={styles.listYoutbeImage}
      />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={styles.container}>
      {/* Banner */}
      <Image
        style={{height: 120, width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
      />
      <FlatList
        data={dataArray}
        renderItem={renderRow}
        refreshing={isFetching}
        onRefresh={loadData}
        keyExtractor={(item) => item.id}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});
