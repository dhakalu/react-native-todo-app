import { View, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const CreateNewTodoFormScreen = (props) => {
  const {
    onAdd = () => false,
    onCancel = () => false
  } = props

  const [titile, setTitle] = useState('')

  const handleTextChange = (text) => {
    setTitle(text)
  }

  const handleCreate = () => {
    onAdd(titile)
    onCancel()
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter the name of your todo here'
        style={styles.textInput}
        value={titile}
        onChangeText={handleTextChange}
      />
      <View style={styles.buttonGroup}>
        <Button title='Create' onPress={handleCreate} />
        <View style={styles.cancelButton}>
          <Button title='Cancel' color='red' onPress={onCancel} />
        </View>
      </View>
    </View>
  )
}

export default CreateNewTodoFormScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flex: 1
  },
  textInput: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    elevation: 1
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cancelButton: {
    marginLeft: 10
  }
})
