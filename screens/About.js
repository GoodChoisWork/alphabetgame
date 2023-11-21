import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../assets/background.png")}
        resizeMode="contain"
      >
        <ScrollView>
          <View style={styles.flexTitle}>
            <Text style={styles.title}>About</Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              Welcome to the ABC Explorer: Discover & Learn!
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              The ABC Explorer: Discover & Learn is an interactive and
              educational experience designed to make learning the alphabet fun
              and engaging for all ages.
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              Whether you're a curious child just starting to explore the world
              of letters or an adult looking to brush up on your vocabulary,
              this game is perfect for you.
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              Embark on a journey through the alphabet and discover a world of
              words waiting to be explored. Let the Alphabet Game be your guide
              as you delve into the exciting realm of language and letters.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "justify",
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
    textAlign: "justify",
    fontWeight: "bold",
  },

  title: {
    padding: 20,
    fontSize: 40,
    color: "black",
    textAlign: "justify",
    fontWeight: "bold",
  },

  textIntro: {
    fontSize: 25,
    padding: 10,
    textAlign: "justify",
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});
