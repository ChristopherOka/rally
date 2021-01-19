import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import SearchBar from "./SearchBar";
import Protests from "./Protests";

export default function Search() {
  const protests = [
    { name: "BLACK LIVES MATTER", cover: require("./graphics/blm.jpg") },
    { name: "ME TOO MOVEMENT", cover: require("./graphics/meToo.jpg") },
    { name: "PRIDE", cover: require("./graphics/pride.jpg") },
    {
      name: "GENDER EQUALITY",
      cover: require("./graphics/genderEquality.jpg"),
    },
    {
      name: "RACIAL EQUALITY",
      cover: require("./graphics/racialEquality.jpg"),
    },
    { name: "COMMUNISM", cover: require("./graphics/communism.png") },
  ];
  const [displaySearch, setDisplaySearch] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchIndex, setSearchIndex] = useState(0);

  const search = (t) => {
    for (let i = 0; i < protests.length; i++) {
      if (protests[i].name === t.toUpperCase()) {
        setIsSearch(true);
        setSearchIndex(i);
        break;
      } else {
        setIsSearch(false);
      }
    }
  };

  const handleSearchPress = () => {
    if (displaySearch) {
      setDisplaySearch(false);
    } else {
      setDisplaySearch(true);
    }
  };

  const SearchBarArea = () => {
    if (displaySearch) {
      return (
        <View style={styles.SearchBar}>
          <SearchBar search={(t) => search(t)} />
        </View>
      );
    } else {
      return <View></View>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Background}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 300 }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.Title}>PROTESTS</Text>
            <View style={styles.TitleUnderLine} />
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.SearchButton}
                onPress={() => {
                  handleSearchPress();
                }}
              >
                <Image
                  style={styles.SearchIcon}
                  source={require("./Images/SearchNew.png")}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.CreateButton}>
                <Image
                  style={styles.CreateIcon}
                  source={require("./graphics/Create.png")}
                />
              </TouchableOpacity>
            </View>
            <SearchBarArea />
            <Protests
              isSearch={isSearch}
              searchIndex={searchIndex}
              protests={protests}
            />
          </View>
          <StatusBar style="auto" />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: "#ECEDE8",
    alignItems: "center",
  },
  Title: {
    textAlign: "center",
    top: 20,
    fontWeight: "bold",
    fontSize: 48,
    color: "#EE8554",
  },
  TitleUnderLine: {
    width: 330,
    height: 5,
    top: 25,
    marginHorizontal: 30,
    backgroundColor: "#74777A",
  },
  buttons: {
    marginTop: 50,
    flexDirection: "row",
  },
  SearchButton: {
    position: "relative",
    backgroundColor: "#B9C9D3",
    width: 100,
    height: 35,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 25,
  },
  SearchIcon: {
    position: "absolute",
    width: 13,
    height: 17,
    margin: 10,
  },
  SearchBar: {
    marginTop: 25,
  },
  CreateButton: {
    position: "relative",
    backgroundColor: "#B9C9D3",
    width: 100,
    height: 35,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 25,
  },
  CreateIcon: {
    position: "absolute",
    width: 18,
    height: 18,
    margin: 7,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
