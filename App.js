import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ListingEditScreen from "./app/screens/logged/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/logged/ListingDetailsScreen";
import ListingsScreen from "./app/screens/logged/ListingsScreen";
import RegisterScreen from "./app/screens/notLogged/RegisterScreen";

export default function App() {
  return <RegisterScreen />;
}

const styles = StyleSheet.create({});
