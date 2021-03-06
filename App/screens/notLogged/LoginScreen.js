import React, { useState, useContext } from "react";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import * as Yup from "yup";

import AppContext from "../../components/AppContext";

import { Form, FormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Saissisez votre adresse email @isep.fr")
    .matches(
      /^[a-z0-9](\.?[a-z0-9]){1,}@isep\.fr$/,
      "Votre email doit être de la forme prenom.nom@isep.fr"
    ),
  password: Yup.string().required("Saisissez votre mot de passe"),
});

function LoginScreen() {
  const TheContext = useContext(AppContext);
  function Connexion(values, force = false) {
    if (force) {
      console.log(values);
      TheContext.SetIsLoggedIn(true);
    }
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/wlogo250250.png")}
          />
          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => Connexion(values, true)}
            validationSchema={validationSchema}
          >
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="prenom.nom@isep.fr"
              textContentType="emailAddress"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Mot de passe"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton title="Se connecter" />
          </Form>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
