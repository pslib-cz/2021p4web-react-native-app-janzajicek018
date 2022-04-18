import { Text, View, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import React, { useState } from 'react';

export const Game = (props) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center", height: '100%', width: '100%'}}
    >
      {props.hasWon ? <Text style={{fontSize: 30}}>You won!</Text> : <Text></Text>}
      <Pressable
        onPress={() => {
          props.setTimesPressed((current) => (current + 1 * props.clickModifier));
        }}
      >
        <Image style={{height: 200, width: 230}} source={require('../assets/React-icon.svg')}></Image>
      </Pressable>
      <Text>{props.timesPressed.toFixed(2)} Atoms</Text>  
      <Text>{props.clickModifier.toFixed(2)} Click Power</Text>  
    </SafeAreaView>
  );
};

export default Game;
