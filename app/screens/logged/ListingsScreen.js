import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../../components/Card";
import colors from "../../config/colors";
import Screen from "../../components/Screen";

const listings = [
  {
    id: 1,
    title: "Lasagnes",
    price: 100,
    image: require("../../../data/listings/images/lasagnes.jpg"),
  },
  {
    id: 2,
    title: "Pâtes",
    price: 1000,
    image: require("../../../data/listings/images/pasta.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
