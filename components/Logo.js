import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text>ABC - Flipbox</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      marginTop : 100,
      marginBottom : -100,
    }
})