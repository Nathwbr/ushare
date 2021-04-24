import React, { useRef, useState, useEffect } from "react";
import { View, TouchableOpacity, Platform } from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [type, setType] = useState(Camera.Constants.Type.back);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      //EXPORTER photo vers ImageInput
      //navigation.goBack();
    }
  };

  const find = async () => {
    if (cameraRef) {
      const photo = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
      });
      console.log(photo);
      //EXPORTER photo vers ImageInput
      //navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        console.log("Ask Permission");
        const libraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

        console.log("libraryPermission", libraryPermission);
        console.log("cameraPermission", cameraPermission);
        if (libraryPermission.status !== "granted") {
          alert(
            "Désolé, nous avons besoin des autorisations d'accès au stockage pour que cela fonctionne !"
          );
        }
        if (cameraPermission.status !== "granted") {
          alert(
            "Désolé, nous avons besoin des autorisations de la caméra pour que cela fonctionne !"
          );
        }
      }
    })();
  }, []);

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(camera) => (cameraRef.current = camera)}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 30,
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
            onPress={find}
          >
            <MaterialCommunityIcons
              name="file-find"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
            onPress={snap}
          >
            <FontAwesome
              name="camera"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
              backgroundColor: "transparent",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <MaterialCommunityIcons
              name="camera-switch"
              style={{ color: "#fff", fontSize: 40 }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
