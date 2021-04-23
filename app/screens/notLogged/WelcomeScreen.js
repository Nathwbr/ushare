import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Swiper from "react-native-swiper";

import colors from "../../config/colors";

import Button from "../../components/Button";
import Screen from "../../components/Screen";

function WelcomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.swiper}>
        <Swiper
          showsButtons={true}
          activeDotColor={colors.primary}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
          loop={false}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Créez votre profil</Text>
            <Image
              source={require("../../assets/intro1.png")}
              style={styles.imageIntro}
            />
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Partagez vos repas</Text>
            <Image
              source={require("../../assets/intro2.png")}
              style={styles.imageIntro}
            />
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>Et soyez récompensé !</Text>
            <Image
              source={require("../../assets/intro3.png")}
              style={styles.imageIntro}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttons}>
          <Button
            title={"Se connecter"}
            onPress={() => navigation.navigate("Se connecter")}
          />
        </View>
      </View>

      <View style={styles.buttonsContainerBot}>
        <View style={styles.buttons}>
          <Button
            title={"S'inscrire"}
            onPress={() => navigation.navigate("S'inscrire")}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  buttonsContainer: {
    flex: 0.15,
    width: "100%",
  },
  buttonsContainerBot: {
    flex: 0.15,
    width: "100%",
    marginBottom: "3%",
  },
  buttonText: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "bold",
  },
  imageIntro: {
    width: "75%",
    height: "75%",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  slide1: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  swiper: {
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.white,
    marginTop: "10%",
  },
  text: {
    color: colors.dark,
    fontSize: 30,
    fontWeight: "bold",
  },
  titre: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default WelcomeScreen;
