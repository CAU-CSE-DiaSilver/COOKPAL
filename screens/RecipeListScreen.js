import React, {useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import RecipeList from '../components/RecipeList';
import Empty from '../components/Empty';

function RecipeListScreen() {
  const [recipes, setList] = useState([
    {
      id: 1,
      title: '너무 간단한데 맛있어서 놀라는 백종원 분식점 떡볶이 황금 레시피',
      thumbnail_link:
        'https://recipe1.ezmember.co.kr/cache/recipe/2018/08/13/3233d427883d15239f297aeeaf1775531_m.jpg',
    },
    {
      id: 2,
      title: '[자취요리] 초간단 떡볶이 만들기 + 꿀맛은 덤',
      thumbnail_link:
        'https://recipe1.ezmember.co.kr/cache/recipe/2016/04/22/50c6879b6f6db59d4e073f075e4207f91_m.jpg',
    },
    {
      id: 3,
      title: '떡볶이 황금레시피, 이대로만 하면 무조건 성공!',
      thumbnail_link:
        'https://recipe1.ezmember.co.kr/cache/recipe/2018/01/15/593e123714a3af6752388583567427cb1_m.jpg',
    },
    {
      id: 4,
      title: '순정떡볶이 레시피 초간단 10분 떡볶이',
      thumbnail_link:
        'https://recipe1.ezmember.co.kr/cache/recipe/2018/11/23/8b085b64ce721258a9dc32cf26e6521a1_m.JPG',
    },
    {
      id: 5,
      title:
        '떡국떡떡뽂이 평생 써먹는 떡볶이양념 떡볶이황금레시피 류수영떡볶이 백종원떡볶이',
      thumbnail_link:
        'https://recipe1.ezmember.co.kr/cache/recipe/2024/03/11/cfa732da19b94aeeed65018aacbb9e1f1_m.jpg',
    },
  ]);
  return (
    <View style={styles.block}>
      <View style={styles.top}>
        <Text style={styles.topCon}>총 {recipes.length}개의 검색결과</Text>
      </View>
      {recipes.length === 0 ? <Empty /> : <RecipeList recipes={recipes} />}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
  },
  top: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  topCon: {
    fontFamily: 'Orbit-Regular',
    color: '#020c2e',
  },
});

export default RecipeListScreen;
