import React, {useContext, useState, useEffect, useRef} from 'react';
import {PixelRatio, StyleSheet, View, Text, Image, UIManager, findNodeHandle} from 'react-native';
import HFScreenHeader from '../components/HFScreenHeader';
import RecipeContext from '../contexts/RecipeContext';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native';

import {CameraViewManager} from './HandFree/CameraManager';
import {HandControl} from'./HandFree/HandControl';
import {VoiceControl} from'./HandFree/VoiceControl';
import {VoiceCommend} from'./HandFree/VoiceCommend';

//카메라 생성
const createFragment = viewId =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    UIManager.CameraViewManager.Commands.create.toString(),
    [viewId],
);

//카메라 리소스 해제
const removeFragment = viewId =>
  UIManager.dispatchViewManagerCommand(
    viewId,
    UIManager.CameraViewManager.Commands.remove.toString(),
    [viewId],
);

function HFRecipeScreen({route}) {
  const {recipe} = route.params;
  const stepContent = recipe.recipe_text;
  const stepImage = recipe.recipe_list;
  const [stepState, setStepState] = useState(0);

  const ref = useRef(null);
  const handCon = new HandControl();
  const voiceCom = new VoiceCommend()
  const navigation = useNavigation();
  let [isCall, callCookPal] = useState(false);
  let [commend, getCommend] = useState("");

  //핸드 프리 기능을 위한 초기 설정
  useEffect(() => {
    const voiceCon = new VoiceControl(callCookPal);
    async function createVoice(){
      try{
        await voiceCon._makeManager()
        await voiceCon._startProcessing()
      }catch(error){
        console.log(error);
      }
    }
    async function createCommend(){
      try{
        await voiceCom._makeManager()
      }catch(error){
        console.log(error)
      }
    }
    createVoice();
    createCommend();

    const viewId = findNodeHandle(ref.current);

    createFragment(viewId);
    
    //View가 사라지기 전에 동작(카메라 리소스 해제)
    const beforeRemoveListener = navigation.addListener('beforeRemove', (e) => {
      removeFragment(viewId);
    });
    return() => {
      beforeRemoveListener();
      voiceCom.componentWillUnmount();
      voiceCon.componentWillUnmount();}
  }, []);

  const handleNext = () => {
    // recipe.length-1 이후는 없기 때문에 return
    if (stepState === stepContent.length - 1) return;
    setStepState(prev => ++prev);
  };
  const handleBack = () => {
    if (stepState === 0) return;
    setStepState(prev => --prev);
  };

  // 핸드 컨트롤 인식
  useEffect(() => {
    let isMounted = true; // 컴포넌트 마운트 여부 확인
    let count = 0;
    let page_num = 0;
    const performHandMove = async () => {
      if (!isMounted) return; // 컴포넌트가 마운트된 경우에만 수행
      try {
        await handCon.calculate_hand_move();
        if (handCon.fin == 1) {
            if(handCon.direction===1&&stepContent.length - 1!==page_num) {
              setStepState(prev => ++prev)
              page_num++
            }else if(handCon.direction===-1&&page_num!==0){
              setStepState(prev => --prev)
              page_num--
            }
          console.log(handCon.flag)
          handCon.fin = 0;
          count = 0
        }
        count++
        if(count>20){ //2초 동안 다음 움직임이 없으면 초기화
          handCon.sequence = 0;
          count = 0
        }
      } catch (error) {
        console.error(error);
      }

      if (isMounted) {
        // 0.1초 후에 다시 수행
        setTimeout(performHandMove, 100);
      }
    };
    performHandMove();
    return () => {
      isMounted = false; // 컴포넌트 언마운트 시 플래그를 false로 설정
    };
  }, []); 

  // 보이스 컨트롤 인식
  useEffect(() => {
    // isCall이 true라면 isCall false로
    // 일정 시간이 지나도 안불리면 자동으로 종료되기 위함
    if (isCall) {
      voiceCom._startProcessing(getCommend)
      //여기에 보이스 커멘드로 조정
      const timerId = setTimeout(() => {
        callCookPal(false)
        getCommend("")
      }, 5000);
      return () => clearTimeout(timerId);
    }
  }, [isCall]);

  return (
    <View style={styles.block}>
      <HFScreenHeader />
        <GestureRecognizer
          onSwipeLeft={handleNext}
          onSwipeRight={handleBack}
          style={{
            flex: 1,
            backgroundColor: 'lightgray',
            padding: 10,
          }}>
          
          <Text
          style={{
            flex: 1,
            backgroundColor: 'lightgray',
            padding: 10,
          }}>{stepContent[stepState]}</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: 'black',
            }}>
          <CameraViewManager
                style={{
                  height: PixelRatio.getPixelSizeForLayoutSize(100),
                  width: PixelRatio.getPixelSizeForLayoutSize(100),
                }}
                ref={ref}
              />  
        </View>
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
  imageStyle: {},
});

export default HFRecipeScreen;
