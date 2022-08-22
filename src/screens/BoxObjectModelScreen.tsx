import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Box object model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    title: {
        fontSize: 20,
        // width: 250,
        borderWidth: 10
        // backgroundColor: "red"
    }
})
