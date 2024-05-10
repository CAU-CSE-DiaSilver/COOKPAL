import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import RecipeItem from './RecipeItem';

function RecipeList({recipes}) {
  return (
    <FlatList
      style={styles.list}
      data={recipes}
      renderItem={({item}) => (
        <RecipeItem
          id={item.id}
          title={item.title}
          thumbnail_link={item.thumbnail_link}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {},
});

export default RecipeList;
