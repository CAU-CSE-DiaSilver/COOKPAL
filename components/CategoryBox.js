import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Button extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 53,
            height: 53,
            backgroundColor: 'lightgray',
            marginBottom: 5,
            borderRadius: 5,
          }}>
          {this.props.image_url ? (<Image
            style={styles.imageStyle}
            source={{uri: this.props.image_url}}
          />) : null}
        </View>
        <Text
          style={{
            fontFamily: 'Orbit-Regular',
            color: '#020c2e',
            fontSize: 15,
          }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
function CategoryBox() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>카테고리</Text>
      <View style={styles.buttonGroup}>
        <View style={styles.item}>
          <Button name="한식" image_url="../android/app/main/assets/images/한식.png"/>
          <Button name="중식" image_url="../android/app/main/assets/images/중식.png"/>
          <Button name="일식" image_url="../android/app/main/assets/images/일식.png"/>
        </View>
        <View style={styles.item}>
          <Button name="양식" />
          <Button name="분식" />
          <Button name="디저트/카페" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {},
  title: {
    padding: 8,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    fontSize: 26,
    color: 'black',
    fontFamily: 'BlackHanSans-Regular',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default CategoryBox;
