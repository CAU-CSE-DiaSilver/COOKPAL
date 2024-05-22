import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HFScreenHeader from '../components/HFScreenHeader';
import RecipeContext from '../contexts/RecipeContext';
function HFRecipeScreen() {
  const recipe = useContext(RecipeContext);
  const steps = [...recipe].splice(1);
  return (
    <View style={styles.block}>
      <HFScreenHeader />
      <Text>{JSON.stringify(steps)}</Text>
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
