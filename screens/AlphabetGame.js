import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FlipCard from "react-native-flip-card";
import Carousel from "../components/Carousel";
import data from "../data/data";

const carouselData = data;
const height = Dimensions.get("window").height;

export default function AlphabetGame() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Alphabet Game</Text>
      </View>
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
    height: height - 200,
  },
  logoContainer: {
    marginTop: 90,
  },
  logoText: {
    fontSize: 40,
    padding: 10,
  },
});
