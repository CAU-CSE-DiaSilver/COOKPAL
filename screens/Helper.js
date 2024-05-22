import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import HelperHeader from '../components/HelperHeader';
import FloatingHelperBtn from '../components/FloatingHelperBtn';
import RecipeContext from '../contexts/RecipeContext';

function Helper({route}) {
  const {recipe_link} = route.params.recipe_link;
  const ImageSrc = route.params.thumbnail;
  const {title} = route.params.title;
  const server_addr =
    'http://port-0-cookpal-server-rccln2llvzrcxr2.sel5.cloudtype.app/';
  //레시피 링크 전달
  const [recipe, onChangeRecipe] = useContext(RecipeContext);
  const [isLoading, setLoading] = useState(true);
  const get_recipe = async recipe_link => {
    try {
      const response = await fetch(server_addr + 'recipe', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({recipe_url: recipe_link}),
      });
      //레시피를 받아온다.(레시피를 출력하는 것으로만 구현. 네비게이션 쪽 구현 되면 이 부분도 이런 식으로 구현 할 예정)
      const json = await response.json();
      onChangeRecipe(json);
      setLoading(false);
    } catch (error) {
      console.error('Recipe_link_Error :', error);
    }
  };
  useEffect(() => {
    get_recipe(recipe_link);
  });
  return (
    <>
      <View style={styles.blocktop}>
        <HelperHeader />
        <Image style={styles.imageStyle} source={{uri: ImageSrc}} />
      </View>
      <View style={styles.blockbottom}>
        <Text style={styles.name}>{title}</Text>
      </View>
      {isLoading ? (
        <Text>로딩로딩</Text>
      ) : (
        <>
          <Text>{JSON.stringify(recipe)}</Text>
          <FloatingHelperBtn />
        </>
      )}
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
