import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => {
  return <View style={styles.header}><Text style={styles.haderText}> Todo App</Text></View>
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    padding: 10,
    height: 56,
    alignContent: 'center',
    justifyContent: 'center'
  },
  haderText: {
    color: 'white',
    fontWeight: '600'
  }
})

export default Header
