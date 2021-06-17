import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableHighlight,
} from "react-native";

import { ListItem, ListItemSeparator } from "../../components/lists";
import colors from "../../config/colors";
import IconMaterialCommunity from "../../components/IconMaterialCommunity";
import IconIonicons from "../../components/IconIonicons";
import Screen from "../../components/Screen";
import routes from "../../navigation/routes";
import AppContext from "../../components/AppContext";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AvatarInput from "../../components/AvatarInput";

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
  const TheContext = useContext(AppContext);
  const [avatarUri, setAvatarUri] = useState(
    "https://ca.slack-edge.com/T368LPS7L-U01NE2PTDKL-c0600fd31a73-512"
  );
  const handleAdd = (uri) => {
    setAvatarUri(uri);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <AvatarInput
            avatarUri={avatarUri}
            onChangeAvatar={(avatarUri) => handleAdd(avatarUri)}
            navigation={navigation}
          />

          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              Nathan WEBER
            </Title>
            <Caption style={styles.caption}> ★★★★☆</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="map-marker-radius"
            color="#777777"
            size={20}
          />
          <Text style={{ color: "#777777", marginLeft: 20 }}>Metz, France</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>0660610454</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            nathan.weber@isep.fr
          </Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <TouchableHighlight
          style={styles.touchableInfo}
          onPress={() => {
            navigation.navigate(routes.MYBALANCE);
          }}
        >
          <>
            <Title>140</Title>
            <Image
              source={require("../../assets/images/ucoin.png")}
              style={styles.ucoin}
            />
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.touchableInfo}
          onPress={() => {
            navigation.navigate(routes.MYHISTORY);
          }}
        >
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Commandes</Caption>
          </View>
        </TouchableHighlight>
      </View>
      <View>
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
          onPress={() => TheContext.SetIsLoggedIn(false)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
  },
  container: {
    marginVertical: 20,
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  touchableInfo: {
    flexDirection: "row",
    justifyContent: "center",
    borderRightColor: "#dddddd",
    borderRightWidth: 1,
    width: "50%",
    alignItems: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  ucoin: {
    width: 20,
    height: 20,
  },
});

export default AccountScreen;
