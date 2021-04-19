import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Saissisez votre adresse email @isep.fr")
    .matches(
      /^[a-z0-9](\.?[a-z0-9]){1,}@isep\.fr$/,
      "Votre email doit être de la forme prenom.nom@isep.fr"
    ),
  password: Yup.string()
    .required("Saisissez votre mot de passe")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/,
      "Votre mot de passe doit contenir entre 8 et 24 caractères, au moins une majuscule, une minuscule, un chiffre et un caractère spécial."
    ),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/wlogo250250.png")}
      />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
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
