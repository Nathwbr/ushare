import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { SearchBar } from "react-native-elements";

import colors from "../../config/colors";

function SearchScreen(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [heroes, setHeroes] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://api.opendota.com/api/heroes");
    const json = await res.json();
    setData(json);
    setHeroes(json.slice());
  };

  const formatNames = (hero) => {
    let heroName = hero.name.charAt(14).toUpperCase() + hero.name.slice(15);
    heroName = heroName.replace(/_/g, " ");
    return heroName;
  };

  const updateQuery = (input) => {
    setQuery(input);
    console.log(query);
    setHeroes(data.slice());
  };

  const filterNames = (hero) => {
    // 1.
    let search = query.toLowerCase().replace(/ /g, "_");
    //2.
    if (hero.name.startsWith(search, 14)) {
      //3.
      return formatNames(hero);
    } else {
      //4.
      heroes.splice(heroes.indexOf(hero), 1);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SearchBar
        onChangeText={updateQuery}
        value={query}
        placeholder="Recherchez un plat ou un utilisateur"
        //lightTheme
        round
        leftIconContainerStyle={{ backgroundColor: colors.light }}
        searchIcon={{ color: colors.medium }}
        inputStyle={{ backgroundColor: colors.light, color: colors.medium }}
        placeholderTextColor={colors.medium}
        inputContainerStyle={{
          backgroundColor: colors.light,
        }}
        containerStyle={{
          backgroundColor: "white",
          justifyContent: "space-around",
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
      />

      <FlatList
        data={heroes}
        keyExtractor={(i) => i.id.toString()}
        extraData={query}
        renderItem={({ item }) => (
          <Text style={styles.flatList}>{filterNames(item)}</Text>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingLeft: 15,
    marginTop: 15,
    paddingBottom: 15,
    fontSize: 20,
    borderBottomColor: "#26a69a",
    borderBottomWidth: 1,
  },
});

export default SearchScreen;
