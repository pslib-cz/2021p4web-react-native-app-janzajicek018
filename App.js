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

import Home from "./screens/Home";
import Game from "./screens/Game";

export const SCREEN_HOME = "Home";
export const SCREEN_GAME = "Game";

const Tab = createBottomTabNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <StatusBar backgroundColor="#f4511e" hidden={true} translucent={true} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case SCREEN_HOME:
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
          name={SCREEN_HOME}
          component={Home}
          options={{
            title: "Home",
            headerStyle: { backgroundColor: "#f4511e" },
            headerTitleStyle: { color: "#dddddd" },
          }}
        />
        <Tab.Screen
          name={SCREEN_GAME}
          component={Game}
          options={{
            title: "Game",
            headerStyle: { backgroundColor: "#f4511e" },
            headerShown: false,
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
