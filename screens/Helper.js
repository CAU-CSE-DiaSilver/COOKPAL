import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import HelperHeader from '../components/HelperHeader';

function Helper({route}) {
  const {id} = route.params.recipeid;
  const ImageSrc = route.params.thumbnail;
  const {title} = route.params.title;
  return (
    <>
      <View style={styles.blocktop}>
        <HelperHeader />
        <Image style={styles.imageStyle} source={{uri: ImageSrc}} />
      </View>
      <View style={styles.blockbottom}>
        <Text style={styles.name}>{title}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  blocktop: {
    flex: 1,
    backgroundColor: 'white',
  },
  blockbottom: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 23,
    fontFamily: 'BlackHanSans-Regualr',
    fontWeight: 'bold',
    color: 'black',
    margin: 15,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  imageStyle: {
    position: 'absolute',
    top: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export default Helper;
