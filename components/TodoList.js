import { ScrollView, Text, View, StyleSheet } from 'react-native'
import React from 'react'

const TodoList = (props) => {
  const {
    todos = []
  } = props

  return <ScrollView style={styles.container}>
    <View>
      {
        todos.map(x => {
          return <Text
            style={styles.todo}
            key={x.id}
          > {x.title} 
          </Text>
        })
      }
    </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  container: {
  },
  todo: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    elevation: 1
  }
})

export default TodoList
