import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FlipCard from "react-native-flip-card";
import Carousel from "../components/Carousel";
import data from "../data/data";
import Logo from "../components/Logo";

const carouselData = data;
const height = Dimensions.get("window").height;

export default function AlphabetGame() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo/>
      <View style={styles.flipBoxContainer}>
        <Carousel data={carouselData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  flipBoxContainer: {
    height: height - 190,
  },
  logoContainer: {
    marginTop: '10%',
  },
  logoText: {
    fontSize: 40,
    padding: 10,
  },
});
