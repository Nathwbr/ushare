import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert(
        "Vous devez autoriser la permission pour accéder à la bibliothèque."
      );
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert(
        "Supprimer",
        "Êtes-vous sûr de vouloir supprimer cette image ?",
        [{ text: "Oui", onPress: () => onChangeImage(null) }, { text: "Non" }]
      );
  };

  const selectImage = async () => {
    try {
      const photo = await ImagePicker.launchImageLibraryAsync({
        // ICI INSERER CAMERASCREEN //todo
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!photo.cancelled) onChangeImage(photo.uri);
    } catch (error) {
      console.log("Erreur de lecture de l'image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",
    width: 100,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
