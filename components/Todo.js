import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const Todo = (props) => {
  const {
    todo = {},
    onToggleCompeleteStatus = () => false
  } = props

  return (
    <TouchableOpacity style={styles.todo} onLongPress={() => onToggleCompeleteStatus(todo.id)}>
      <Text key={todo.id} style={{ textDecorationLine: todo.done ? 'line-through' : 'none' }}> {todo.title}</Text>
    </TouchableOpacity>
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
