import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import FormImagePickerList from "../../components/forms/FormImagePickerList";
import CategoryPickerItem from "../../components/CategoryPickerItem";
import Screen from "../../components/Screen";
import useLocation from "../../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Ce champ est obligatoire")
    .min(1, "Insérez un titre")
    .label("Title"),
  price: Yup.number()
    .required("Ce champ est obligatoire")
    .min(1, "Insérer un prix plus supérieur à 1")
    .max(10000, "Insérer un prix inférieur à 10 000")
    .label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object()
    .required("Ce champ est obligatoire")
    .nullable()
    .label("Category"),
  images: Yup.array().min(1, "Selectionnez au moins une image"),
});

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

function ListingEditScreen({ navigation }) {
  const location = useLocation().location;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Form
            initialValues={{
              title: "",
              price: "",
              description: "",
              category: null,
              images: [],
            }}
            onSubmit={(values) => console.log(location)}
            validationSchema={validationSchema}
          >
            <FormImagePickerList name="images" navigation={navigation} />
            <FormField maxLength={255} name="title" placeholder="Titre" />
            <FormField
              keyboardType="numeric"
              maxLength={8}
              name="price"
              placeholder="Prix"
              width={120}
            />
            <Picker
              items={categories}
              name="category"
              numberOfColumns={3}
              PickerItemComponent={CategoryPickerItem}
              placeholder="Catégorie"
              width="50%"
            />
            <FormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
            />
            <SubmitButton title="Publier" />
          </Form>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
});

export default ListingEditScreen;
