import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useColorScheme } from "react-native";
import { useState } from "react";

import Shop from "./screens/Shop";
import Game from "./screens/Game";

export const SCREEN_GAME = "Game";
export const SCREEN_SHOP = "Shop";

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  const [timesPressed, setTimesPressed] = useState(0);
  const [clickModifier, setClickModifier] = useState(1);
  const [hasWon, setHasWon] = useState(false);

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor="#f4511e" hidden={true} translucent={true} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case SCREEN_GAME:
                iconName = "home-sharp";
                break;
              default:
                iconName = "information-circle";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#f4511e",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name={SCREEN_GAME}
          children={()=><Game timesPressed={timesPressed} setTimesPressed={setTimesPressed} clickModifier={clickModifier} hasWon={hasWon}/>}
          options={{
            title: "Game",
            headerStyle: { backgroundColor: "#f4511e" },
            headerTitleStyle: { color: "#dddddd" },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name={SCREEN_SHOP}
          children={()=><Shop timesPressed={timesPressed} setTimesPressed={setTimesPressed} setClickModifier={setClickModifier} clickModifier={clickModifier} hasWon={hasWon} setHasWon={setHasWon}/>}
          options={{
            title: "Shop",
            headerStyle: { backgroundColor: "#f4511e" },
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
