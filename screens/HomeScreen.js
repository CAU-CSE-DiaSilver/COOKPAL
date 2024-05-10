import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import RecBox from '../components/RecBox';
import CategoryBox from '../components/CategoryBox';

function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.block}>
        <RecBox />
        <CategoryBox />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#fbf9ef',
    padding: 15,
  },
});

export default HomeScreen;
