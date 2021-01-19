import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
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
            <Text style={styles.Title}>SEARCH</Text>
            <View style={styles.TitleUnderLine} />
            <View style={styles.SearchBar}>
              <SearchBar search={(t) => search(t)} />
            </View>

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
  SearchBar: {
    marginTop: 50,
  },
  Searchcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
