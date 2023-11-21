import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
export default function Logo() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.logoContainer}>
        <Text style={styles.logoText}>ABC Explorer: Discover & Learn</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    logoText: {
      textAlign: 'center',
      fontSize: 40,
      padding: 10,
      fontWeight: 'bold'
    },
})