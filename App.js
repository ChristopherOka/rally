import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Components
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import AppSearch from "./Components/AppSearch";
import ProtestPage from "./Components/ProtestPage";
import ConvertedPage1 from "./Components/ConvertedPage1";
import ConvertedPage2 from "./Components/ConvertedPage2";
import ConvertedPage3 from "./Components/ConvertedPage3";
import ConvertedPage4 from "./Components/ConvertedPage4";

const Navigator = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  AppSearch: { screen: AppSearch },
  ProtestPage: { screen: ProtestPage },
  ConvertedPage1: { screen: ConvertedPage1 },
  ConvertedPage2: { screen: ConvertedPage2 },
  ConvertedPage3: { screen: ConvertedPage3 },
  ConvertedPage4: { screen: ConvertedPage4 },
});

const App = createAppContainer(Navigator);

export default App;
