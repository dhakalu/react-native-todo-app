import { ScrollView, View, StyleSheet } from 'react-native'
import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {
  const {
    todos = []
  } = props

  return (
    <ScrollView style={styles.container}>
      <View>
        {
          todos.map(x => {
            return <Todo key={x.id} todo={x} />
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
