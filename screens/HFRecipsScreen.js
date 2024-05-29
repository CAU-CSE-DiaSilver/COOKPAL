import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import HFScreenHeader from '../components/HFScreenHeader';
import RecipeContext from '../contexts/RecipeContext';
import GestureRecognizer from 'react-native-swipe-gestures';

function HFRecipeScreen({recipe}) {
  //const recipe = useContext(RecipeContext);
  const stepContent = ['text1', 'text2'];
  const [stepState, setStepState] = useState(0);
  const handleNext = () => {
    // recipe.length-1 이후는 없기 때문에 return
    if (stepState === stepContent.length - 1) return;
    setStepState(prev => ++prev);
  };
  const handleBack = () => {
    if (stepState === 0) return;
    setStepState(prev => --prev);
  };
  return (
    <View style={styles.block}>
      <HFScreenHeader />
      <GestureRecognizer onSwipeLeft={handleNext} onSwipeRight={handleBack}>
        <Text>{JSON.stringify(recipe)}</Text>
      </GestureRecognizer>
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
