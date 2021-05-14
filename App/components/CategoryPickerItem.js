import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

import Text from "./Text";
import IconMaterialCommunity from "./IconMaterialCommunity";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {item.icon && (
          <IconMaterialCommunity
            backgroundColor={item.backgroundColor}
            name={item.icon}
            size={80}
          />
        )}
        {item.src && <Image source={item.src} style={styles.image} />}
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },

  image: {
    resizeMode: "cover",
    justifyContent: "center",
    width: 50,
    height: 50,
  },
});

export default CategoryPickerItem;
