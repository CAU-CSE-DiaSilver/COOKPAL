import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import SearchContext from '../contexts/SearchContext';

function SearchScreen({navigation}) {
  const {keyword} = useContext(SearchContext);
  return (
    <View style={styles.block}>
      <Text style={styles.latest}>최근 검색어</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#fbf9ef',
    flex: 1,
    padding: 30,
  },
  latest: {
    marginBottom: 15,
  },
  items: {},
});

export default SearchScreen;
