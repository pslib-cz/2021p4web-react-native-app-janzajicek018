import * as React from "react";
import { Text, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { useState } from "react";
import Pressable from "react-native";

export const Game = (props) => {
  const [timesPressed, setTimesPressed] = useState(0);
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Game!</Text>
      <Pressable
        onPress={() => {
          setTimesPressed(() => {timesPressed = timesPressed + 1});
        }}
      >
        <Text>Press</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Game;
