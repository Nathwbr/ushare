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
    title: "Ma balance",
    icon: {
      name: "currency-eur",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MYBALANCE,
  },
  {
    title: "Mes repas",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MYLISTINGS,
  },
  {
    title: "Historique",
    icon: {
      name: "history",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.MYHISTORY,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Nathan WEBER"
          subTitle="nathan.weber@isep.fr"
          image={require("../../assets/images/profilPicture.jpg")}
          onPress={() => navigation.navigate(routes.MYPROFILE)}
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
        onPress={() => navigation.navigate(routes.MYSETTINGS)}
      />
      <ListItem
        title="Déconnection"
        IconComponent={
          <IconMaterialCommunity
            name="logout"
            backgroundColor={colors.secondary}
          />
        }
        onPress={() => console.log("Déconnexion")}
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
