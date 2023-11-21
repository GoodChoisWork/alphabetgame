import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HowToPlay() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flexTitle}>
          <Text style={styles.title}>How to Play</Text>
        </View>

        <View>
          <Text style={styles.textIntro}>Welcome to the ABC Explorer: Discover & Learn!</Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            Simply click on a letter, and watch as the magic unfolds!
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/HowToPlay/explanation.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View>
          <Text style={styles.textIntro}>
            Each letter corresponds to a delightful item or animals,
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/HowToPlay/explanation2.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>

        <View>
          <Text style={styles.textIntro}>
            providing an exciting opportunity to discover new words and expand
            your knowledge. From "A" for apple to "Z" for zebra, there's a whole
            world of words waiting to be explored.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  flexTitle: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    padding: 20,
    fontSize: 40,
    color: "black",
  },

  textIntro: {
    fontSize: 25,
    padding: 10,
    textAlign: "justify",
    color: "black",
  },
  image: {
    alignSelf: "center",
    height: 250,
    width: 200,
  },
});
