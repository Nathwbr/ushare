import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputNotList from "../ImageInputNotList";

function FormImagePicker({ navigation, name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(name, []);
  };

  return (
    <>
      <ImageInputNotList
        imageUri={imageUri}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
        navigation={navigation}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
