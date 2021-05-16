import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../../components/Button";

function RegistrationSuccesful(navigation) {
  return (
    <View style={styles.container}>
      <Text>Bravo ! Inscription réussie !</Text>
      <Button onPress={() => navigation.navigate("Se connecter")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default RegistrationSuccesful;
