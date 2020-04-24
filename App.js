import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { mockedToDos } from './data-mockup/todo'

import Header from './components/Header'

const App = () => {
  const [todos, setTodos] = useState(mockedToDos)

  return (
    <View style={styles.container}>
      <Header />
      {
        todos.map(x => {
          return <Text
            style={styles.todo}
            key={x.id}
                 >
            {x.title}
          </Text>
        })
      }
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
