import { Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

export const ShopTile = (props) => {
  const [price, SetPrice] = useState(props.price);
  return (
    <View style={style.tile}>
      <Button
        title={props.name}
        onPress={() => {
          if (props.timesPressed >= price) {
            switch (props.tileType) {
              case 1:
                props.setTimesPressed((current) => current - price);
                SetPrice((current) => current * 1.2);
                props.setClickModifier((current) => current + 0.5);
                break;
              case 2:
                let num = Math.floor(Math.random() * 100) + 1;
                if (num >= 50) {
                  props.setTimesPressed((current) => current * 2);
                  SetPrice((current) => current + 10);
                } else {
                  props.setTimesPressed((current) => current / 2);
                  SetPrice((current) => current - 5);
                }
                props.setTimesPressed((current) => current - price);
                break;
              case 3:
                props.setTimesPressed((current) => current - price);
                SetPrice((current) => current * 5);
                props.setClickModifier((current) => current * 10);
                break;
              case 4:
                break;
              case 5:
                props.setTimesPressed((current) => 0);
                props.setClickModifier((current) => 0)
                SetPrice((current) => 99999999);
                props.setHasWon((current) => true);
                break;
            }
          }
        }}
      />
      <Text>costs: {price.toFixed(2)} Atoms</Text>
    </View>
  );
};

const style = StyleSheet.create({
  tile: {
    flex: 1,
    display: "flex",
    textAlign: "left",
  },
});
