import React, { useState } from 'react'
import { Alert, StyleSheet, View, Button, Modal } from 'react-native'
import TodoList from '../components/TodoList'
import { mockedToDos } from '../data-mockup/todo'
import CreateNewTodoFormScreen from './CreateNewTodoFormScreen'
import _ from 'lodash'

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

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(x => x.id !== id))
  }

  const handleToggleMarkComplete = (id) => {
    const currentTodoList = [...todos]
    const index = _.findIndex(currentTodoList, { id: id })
    const todoToUpdate = currentTodoList[index]
    currentTodoList[index] = {
      ...todoToUpdate,
      done: !todoToUpdate.done
    }
    setTodos(currentTodoList)
  }

  return (
    <View style={styles.container}>
      <Button title='Create New' onPress={handleCreateNewButtonClick} />
      <TodoList
        onDelete={handleDeleteTodo}
        onToggleCompeleteStatus={handleToggleMarkComplete}
        todos={todos}
      />
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
