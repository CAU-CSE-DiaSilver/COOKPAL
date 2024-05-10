import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function RecBox() {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.box0}>
        <View style={styles.box0_1}>
          <Text style={styles.text0}>Today's menu</Text>
          <Text style={styles.text}>오늘의 추천 메뉴!</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.box1}>
            <View style={styles.box1_1}>
              <Text style={styles.text2}>상황에 따라 취향에 따라</Text>
              <Text style={styles.text2}>오늘의 요리를 추천해줍니다.</Text>
            </View>
            <View style={styles.box1_2}>
              <Text style={styles.text3}>지금 추천 받으러 가기</Text>
              <Icon name="chevron-right" size={32} color="black" />
            </View>
          </View>
          <View style={styles.box2}>
            <Image
              source={require('../android/app/src/main/assets/images/image.png')}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box0: {
    backgroundColor: '#fbf9ef',
    borderColor: '#020c2e',
    borderWidth: 3.5,
    padding: 10,
    marginBottom: 25,
    marginTop: 15,
    borderRadius: 15,
    position: 'relative',
  },
  box0_1: {
    marginBottom: -23,
    alignItems: 'end',
    marginLeft: 20,
    marginTop: 10,
  },
  box: {
    flexDirection: 'row',
  },
  text0: {
    fontSize: 16,
    fontFamily: 'Pacifico-Regular',
    color: '#ce8040',
    marginBottom: 3,
  },
  text: {
    color: '#020c2e',
    fontSize: 35,
    marginBottom: 15,
    fontFamily: 'BlackHanSans-Regular',
  },
  text2: {
    color: '#474747',
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: 'BlackHanSans-Regular',
    fontWeight: 'bold',
  },
  text3: {
    paddingTop: 2,
    paddingLeft: 5,
    color: '#020c2e',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Orbit-Regular',
    textDecorationLine: 'underline',
  },
  image: {
    width: '167%',
    height: '175%',
    resizeMode: 'center',
  },
  box1: {
    marginRight: 5,
    flex: 0.6,
  },
  box1_1: {
    marginTop: -23,
    flex: 0.9,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderColor: '#ce8040',
  },
  box1_2: {
    marginTop: -20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#fee883',
  },
  box2: {
    marginTop: -10,
    marginLeft: 20,
    marginRight: -25,
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
});

export default RecBox;
