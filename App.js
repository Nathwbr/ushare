import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CameraScreen from "./app/screens/logged/CameraScreen";
import ListingEditScreen from "./app/screens/logged/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/logged/ListingDetailsScreen";
import ListingsScreen from "./app/screens/logged/ListingsScreen";

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({});
