import { ScrollView, View, StyleSheet } from 'react-native'
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  const {
    todos = [],
    onToggleCompeleteStatus = () => false,
    onDelete = () => false
  } = props

  return (
    <ScrollView style={styles.container}>
      <View>
        {
          todos.map(x => {
            return (
              <Todo
                onDelete={onDelete}
                onToggleCompeleteStatus={onToggleCompeleteStatus}
                key={x.id} todo={x}
              />
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
  }
})

export default TodoList
