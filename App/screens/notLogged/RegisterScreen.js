import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
import FormImagePicker from "../../components/forms/FormImagePicker";
import { View } from "react-native-web";
import RegistrationSuccesful from "./RegistrationSuccesful";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Saissisez votre prénom").label("Prénom"),
  lastName: Yup.string().required("Saissisez votre nom").label("Nom"),
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
    )
    .label("Mot de passe"),
  passwordConfirmation: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Les mots de passes ne correspondent pas"
    )
    .required("Confirmez votre mot de passe"),
  images: Yup.array().min(1, "Ajoutez une photo de profil"),
});

function RegisterScreen({ navigation }) {
  function Register(values) {
    console.log(values);
    navigation.navigate(RegistrationSuccesful);
  }

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirmation: "",
          images: [],
        }}
        onSubmit={(values) => Register(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" navigation={navigation} />

        <FormField
          autoCorrect={false}
          icon="account"
          name="firstName"
          placeholder="Prénom"
        />
        <FormField
          autoCorrect={false}
          icon="account"
          name="lastName"
          placeholder="Nom"
        />

        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
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
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="passwordConfirmation"
          placeholder="Confirmez votre mot de passe"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="S'inscrire" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;