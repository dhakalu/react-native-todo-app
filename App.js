import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { mockedToDos } from './data-mockup/todo'

import Header from './components/Header'
import LandingScreen from './screens/LandingScreen'

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <LandingScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 36
  },
  todo: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    elevation: 1
  }
})

export default App
