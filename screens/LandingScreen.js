import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import TodoList from '../components/TodoList'
import { mockedToDos } from '../data-mockup/todo'

const LandingScreen = () => {
  const [todos, setTodos] = useState(mockedToDos)

  return (
    <View style={styles.container}>
      <TodoList todos={todos} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  todo: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    elevation: 1
  }
})

export default LandingScreen
