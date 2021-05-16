import React from "react";
import { View, StyleSheet } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputNotList({
  navigation,
  imageUri,
  onRemoveImage,
  onAddImage,
}) {
  const ThereIsImage = (
    <ImageInput
      imageUri={imageUri.toString()}
      onChangeImage={() => onRemoveImage(imageUri)}
      navigation={navigation}
    />
  );
  const ThereIsNoImage = (
    <ImageInput
      onChangeImage={(imageUri) => onAddImage(imageUri)}
      navigation={navigation}
    />
  );

  let Image;

  console.log(imageUri.toString());

  if (imageUri.length == 0) {
    Image = ThereIsNoImage;
  } else {
    Image = ThereIsImage;
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>{Image}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputNotList;
