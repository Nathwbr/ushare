import React, { useContext, useEffect } from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import AppContext from "../components/AppContext";

function LoadingScreen() {
  const TheContext = useContext(AppContext);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
      })
        .then((res) => {
          console.log("FONTS LOADED!");
          setTimeout(() => {
            TheContext.LoadFinished(false);
          }, 500);
        })
        .catch((Err) => {
          console.log(Err);
        });
    }

    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require("../assets/images/splash.png")}
      />
      <ActivityIndicator
        size="large"
        color="#00BC70"
        style={{ position: "absolute", bottom: "15%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignContent: "flex-end",
    alignItems: "center",
  },
  stretch: {
    width: "100%",
    height: "100%",
  },
});

export default LoadingScreen;
