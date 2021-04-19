import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import CategoryPickerItem from "../../components/CategoryPickerItem";
import Screen from "../../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Ce champ est obligatoire")
    .min(1)
    .label("Title"),
  price: Yup.number()
    .required("Ce champ est obligatoire")
    .min(1)
    .max(10000)
    .label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object()
    .required("Ce champ est obligatoire")
    .nullable()
    .label("Category"),
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

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
