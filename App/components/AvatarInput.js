import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Avatar } from "react-native-paper";
import colors from "../config/colors";

function AvatarInput({ navigation, avatarUri, onChangeAvatar }) {
  const handlePress = () => {
    selectAvatar();
  };

  const selectAvatar = () => {
    console.log(navigation);
    navigation.navigate("CameraScreen", { onChangeImage: onChangeAvatar });
    //Récupérer photo
    // onChangeImage(photo.uri);
  };

  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View //style={styles.container}>
      >
        {!avatarUri && (
          <Avatar.Image
            source={{
              uri:
                "https://s1.qwant.com/thumbr/0x0/0/9/466801e17c230bbbc695d0a2d77d5a68f053d7a9e395eba6c2728ce5b1865e/empty-avatar.jpg?u=https%3A%2F%2Fdenisol.se%2Fwp-content%2Fuploads%2F2018%2F05%2Fempty-avatar.jpg&q=0&b=1&p=0&a=0",
            }}
            size={80}
          />
        )}
        {avatarUri && <Avatar.Image source={{ uri: avatarUri }} size={80} />}
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
});

export default AvatarInput;
