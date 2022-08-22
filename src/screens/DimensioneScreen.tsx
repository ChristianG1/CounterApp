import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

//sirve para dimensiones fijas
// const { width, height } = Dimensions.get('window');

export const DimensioneScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
      </View>
      <Text style={styles.title}>W: { width }, H: {height}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: "red"
  },
  cajaMorada: {
    backgroundColor: "#5856D6",
    width: "50%",
    height: 100
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B'
  },
  title: {
    fontSize: 30
  }
})
