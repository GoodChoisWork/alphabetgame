import { StyleSheet, View, Text, Image, Dimensions, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "../components/Carousel";
import {data} from "../data/data";
import Logo from "../components/Logo";

const carouselData = data;
const height = Dimensions.get("window").height;

export default function AlphabetGame() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/background.png')}
            resizeMode='contain'
          >
      <Logo/>
      <View style={styles.flipBoxContainer}>
        <Carousel data={carouselData} />
      </View>
      </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  flipBoxContainer: {
    height: height - 220,
  },
  logoContainer: {
    marginTop: '10%',
  },
  logoText: {
    fontSize: 40,
    padding: 10,
  },
});
