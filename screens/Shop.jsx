import * as React from "react";
import { Text, View, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { ShopTile } from "../components/ShopTile";

export const Shop = (props) => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>{props.timesPressed.toFixed(2)} Atoms</Text>
      <Text>{props.clickModifier.toFixed(2)} Click Power</Text>
      <ShopTile
        timesPressed={props.timesPressed}
        setTimesPressed={props.setTimesPressed}
        setClickModifier={props.setClickModifier}
        name={"More Tap Power"}
        price={10}
        tileType={1}
      ></ShopTile>
      <ShopTile
        timesPressed={props.timesPressed}
        setTimesPressed={props.setTimesPressed}
        setClickModifier={props.setClickModifier}
        name={"Coin flip"}
        price={10}
        tileType={2}
      ></ShopTile>
      <ShopTile
        timesPressed={props.timesPressed}
        setTimesPressed={props.setTimesPressed}
        setClickModifier={props.setClickModifier}
        setHasWon={props.setHasWon}
        name={"Sacrifice Tap Power"}
        price={1}
        tileType={5}
      ></ShopTile>
      {props.hasWon ? <Text style={{fontSize: 30}}>You won!</Text> : <Text></Text>}
    </SafeAreaView>
  );
};

export default Shop;
