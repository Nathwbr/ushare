import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Button from "../../components/Button";
import AppText from "../../components/Text";
import colors from "../../config/colors";

function RegistrationSuccesfulScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <AppText
          children={"Bienvenue !"}
          style={{
            color: colors.dark,
            fontSize: 25,
            fontWeight: "bold",
          }}
        />
      </View>
      <Image
        source={require("../../assets/images/bravo.png")}
        style={styles.image}
      />
      <View style={styles.text}>
        <AppText
          children={
            "Vérifiez votre adresse email avant de pouvoir vous connecter, un lien vient de vous être envoyé !"
          }
          style={{
            color: colors.dark,
            fontSize: 22,
          }}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title={"Se connecter"}
          onPress={() => navigation.navigate("Se connecter")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: "10%",
  },
  container: {},
  image: {
    width: "65%",
    height: "65%",
    alignSelf: "center",
  },
  text: {
    margin: "3%",
    alignItems: "center",
  },
});

export default RegistrationSuccesfulScreen;
