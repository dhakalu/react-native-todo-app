import React, { useState } from 'react'
import { Alert, StyleSheet, View, Button, Modal } from 'react-native'
import TodoList from '../components/TodoList'
import { mockedToDos } from '../data-mockup/todo'
import CreateNewTodoFormScreen from './CreateNewTodoFormScreen'

const LandingScreen = () => {
  const [todos, setTodos] = useState(mockedToDos)
  const [isCreateModalOpen, setCreateModalOpen] = useState(false)

  const handleAddTodo = (title) => {
    setTodos([{
      id: Math.random().toString(),
      title
    }, ...todos])
  }

  const handleCancel = () => {
    setCreateModalOpen(false)
  }

  const handleCreateNewButtonClick = () => {
    setCreateModalOpen(true)
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={handleCreateNewButtonClick}
        title='Create New'
        color='green'
      />
      <TodoList todos={todos} />
      {
        isCreateModalOpen && (
          <Modal
            animationType='slide'
            visible={isCreateModalOpen}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
            }}
          >
            <CreateNewTodoFormScreen onAdd={handleAddTodo} onCancel={handleCancel} />
          </Modal>
        )
      }
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
