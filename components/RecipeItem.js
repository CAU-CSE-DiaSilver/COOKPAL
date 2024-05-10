import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function RecipeItem({id, title, thumbnail_link}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('Helper', {
          recipeid: {id},
          thumbnail: thumbnail_link,
          title: {title},
        });
      }}>
      <View style={styles.item}>
        <Image style={styles.imageStyle} source={{uri: thumbnail_link}} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text>여기에 상세 설명</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 3,
    padding: 6,
    paddingRight: 10,
  },
  imageStyle: {
    width: '40%',
    height: 105,
    resizeMode: 'stretch',
    marginRight: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

export default RecipeItem;
