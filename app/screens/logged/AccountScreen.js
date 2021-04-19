import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../../components/lists";
import colors from "../../config/colors";
import IconMaterialCommunity from "../../components/IconMaterialCommunity";
import IconIonicons from "../../components/IconIonicons";
import Screen from "../../components/Screen";

const menuItems = [
  {
    title: "Mes Repas",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Mes Messages",
    icon: {
      name: "email",
      backgroundColor: colors.primary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Nathan WEBER"
          subTitle="nathan.weber@isep.fr"
          image={require("../../assets/profilPicture.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <IconMaterialCommunity
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Paramètres"
        IconComponent={
          <IconIonicons
            name="settings-sharp"
            backgroundColor={colors.secondary}
          />
        }
      />
      <ListItem
        title="Déconnection"
        IconComponent={
          <IconMaterialCommunity
            name="logout"
            backgroundColor={colors.secondary}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
