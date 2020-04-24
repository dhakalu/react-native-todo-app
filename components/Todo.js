import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Todo = (props) => {
  const {
    todo = {}
  } = props

  return (
    <View style={styles.todo}>
      <Text key={todo.id}> {todo.title}</Text>
    </View>
  )
}

export default Todo

const styles = StyleSheet.create({
  todo: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    elevation: 1
  }
})
