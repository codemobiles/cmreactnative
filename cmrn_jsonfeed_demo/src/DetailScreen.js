import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';

export default function DetailScreen(props) {
  React.useEffect(() => {
    setNavigationOption();
  }, []);

  setNavigationOption = () => {
    props.navigation.setOptions({
      title: props.route.params.item.title,
      headerStyle: {
        backgroundColor: '#999CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
    });
  };

  renderRow = (item) => (
    <View style={styles.listCard}>
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
    </View>
  );

  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      style={styles.container}>
      {renderRow(props.route.params.item)}

      {/* Banner */}
      <Image
        style={{height: 120, width: '100%'}}
        resizeMode="contain"
        source={require('./assets/img/header_react_native.png')}
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
