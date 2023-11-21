import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {
    StyleSheet,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    Modal,
    FlatList,
    TouchableWithoutFeedback,
  } from "react-native";
import Logo
 from '../components/Logo';
export default function Home({navigation}) {

    function navigateToScreen(screenName) {
        navigation.navigate(screenName);
    };

    return (
        <SafeAreaView style={styles.container}>
          <View
            style={styles.backgroundImage}
          >
            <Logo />
            <View style={styles.centeredContainer}>
              <View style={styles.buttonContainer}>
    
                <View
                  style={styles.button}
                >
                  <TouchableOpacity onPress={() => navigateToScreen("Game")}>
                    <Text style={styles.buttonText}>Play Game</Text>
                  </TouchableOpacity>
                </View>
    
                <View
                  style={styles.button}
                >
                  <TouchableOpacity onPress={() => navigateToScreen("About")}>
                    <Text style={styles.buttonText}>About</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
      centeredContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      buttonContainer: {
        alignItems: "center",
        marginTop: 20,
      },
      button: {
        backgroundColor: "#3f08a6",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 30,
        width: 150,
      },
      buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
      },
      modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
      },
      modalContent: {
        backgroundColor: "white",
        width: "100%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
      },
      modalTitle: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
      },
      languageText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
      },
      closeButtonText: {
        fontSize: 18,
        color: "blue",
        textAlign: "center",
      },
    });