import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FlipCard from "react-native-flip-card";
import Carousel from "../components/Carousel";
import data from "../data/data";

const carouselData = data;


export default function AlphabetGame() {
  return (
    <SafeAreaView style={styles.container}>
        <Carousel data={carouselData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
