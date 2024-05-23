import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HFScreenHeader from '../components/HFScreenHeader';
import RecipeContext from '../contexts/RecipeContext';
function HFRecipeScreen() {
  const recipe = useContext(RecipeContext);
  const [filteredData ,setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(recipe.slice(1));
  }, []);

  return (
    <View style={styles.block}>
      <HFScreenHeader />
      <Text>{JSON.stringify(filteredData)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  loading: {
    alignSelf: 'center',
  },
});

export default HFRecipeScreen;
