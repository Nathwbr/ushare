import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../../components/lists";
import colors from "../../config/colors";
import IconMaterialCommunity from "../../components/IconMaterialCommunity";
import IconIonicons from "../../components/IconIonicons";
import Screen from "../../components/Screen";

import routes from "../../navigation/routes";

const menuItems = [
  {
    title: "Mes Repas",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MYLISTINGS,
  },
];

function AccountScreen({ navigation }) {
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
              onPress={() => navigation.navigate(item.targetScreen)}
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
