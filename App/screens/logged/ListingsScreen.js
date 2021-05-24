import React, { useRef } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import Card from "../../components/Card";
import Screen from "../../components/Screen";

import colors from "../../config/colors";
import routes from "../../navigation/routes";
import MyLocalisationScreen from "./MyLocalisationScreen";

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
  {
    id: 3,
    title: "Pâtes",
    price: 1000,
    image: require("../../../data/listings/images/pasta.jpg"),
  },
  {
    id: 4,
    title: "Pâtes",
    price: 1000,
    image: require("../../../data/listings/images/pasta.jpg"),
  },
];

const categories = [
  {
    src: require("../../../data/categories/logo/chaud.png"),
    label: "Chaud",
    value: 1,
  },
  {
    src: require("../../../data/categories/logo/froid.png"),
    label: "Froid",
    value: 2,
  },
  {
    src: require("../../../data/categories/logo/vegetarien.png"),
    label: "Végétarien",
    value: 3,
  },
  {
    src: require("../../../data/categories/logo/viande.png"),
    label: "Viande",
    value: 4,
  },
  {
    src: require("../../../data/categories/logo/poulet.png"),
    label: "Poulet",
    value: 5,
  },
  {
    src: require("../../../data/categories/logo/poisson.png"),
    label: "Poisson",
    value: 6,
  },
];

function ListingsScreen({ navigation }) {
  return (
    <>
      <View style={styles.header}>
        <TouchableWithoutFeedback
          onPress={navigation.navigate(routes.MYLOCATION)}
        >
          <View style={styles.location}>
            <Entypo name="location-pin" size={40} color="black" />
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              Votre localisation
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.balance}>
            <Image
              source={require("../../assets/images/ucoin.png")}
              style={styles.ucoin}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>100</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View>
        <ScrollView horizontal>
          <View style={styles.container}>
            {categories.map((categories) => (
              <View key={categories.value} style={styles.imageView}>
                <TouchableHighlight
                  style={[
                    styles.profileImgContainer,
                    { borderColor: "black", borderWidth: 2 },
                  ]}
                  onPress={() => {}}
                >
                  <Image source={categories.src} style={styles.image} />
                </TouchableHighlight>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    height: 95,
  },
  header: {
    backgroundColor: colors.primary,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    paddingHorizontal: 20,
  },
  location: {
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    marginTop: 35,
    height: 50,
  },
  balance: {
    backgroundColor: colors.white,
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 35,
    paddingLeft: 10,
    width: "30%",
    height: 50,
  },
  imageView: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  profileImgContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    padding: 7,
    paddingTop: 2,
    backgroundColor: colors.light,
  },
  ucoin: {
    width: 30,
    height: 30,
  },
});

export default ListingsScreen;
