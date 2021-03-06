import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../../config/colors";
import ListItem from "../../components/lists/ListItem";
import Text from "../../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image style={styles.image} source={listing.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <View style={styles.price}>
          <Text style={styles.priceText}>{listing.price}</Text>
          <Image
            source={require("../../assets/images/ucoin.png")}
            style={styles.ucoin}
          />
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../../assets/images/profilPicture.jpg")}
            title="Nathan WEBER"
            subTitle="3 repas"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  priceText: {
    color: colors.dark,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  ucoin: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
