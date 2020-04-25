import { View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { mockedActions } from '../data-mockup/actions'
import SuggestedActions from '../components/SuggestedActions'
import { MaterialIcons } from '@expo/vector-icons'

import DeadlinePicker from '../components/DeadlinePicker'
import { colors } from '../constants/Color'

// import DateTimePicker from '@react-native-community/datetimepicker';

const CreateNewTodoFormScreen = (props) => {
  const {
    onAdd = () => false,
    onCancel = () => false
  } = props

  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState(undefined)
  const [isPickingDeadline, setPickingDeadline] = useState(false)

  const inputRef = React.createRef()

  const handleTextChange = (text) => {
    setTitle(text)
  }

  const handleCreate = () => {
    onAdd({
      id: Math.random().toString(),
      title,
      dueOn: deadline
    })
    onCancel()
  }

  const hadleActionSelection = (title) => {
    setTitle(`${title} `)
    inputRef.current.focus()
  }

  const handleDeadlineChange = (newDeadline) => {
    setPickingDeadline(false)
    setDeadline(newDeadline)
  }

  return (
    <View style={styles.container}>
      <View style={styles.addForm}>
        <TextInput
          placeholder='Enter the name of your todo here'
          style={styles.textInput}
          value={title}
          ref={inputRef}
          onChangeText={handleTextChange}
        />
        <TouchableOpacity onPress={() => setPickingDeadline(true)}>
          <MaterialIcons name='date-range' size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
      <SuggestedActions
        onSelectAction={hadleActionSelection}
        filterText={title}
        actions={mockedActions}
      />
      <DeadlinePicker
        onChange={handleDeadlineChange}
        isOpen={isPickingDeadline}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button title='Create' onPress={handleCreate} />
        </View>
        <View style={styles.cancelButton}>
          <Button title='Cancel' color='red' backgroundColor='green' onPress={onCancel} />
        </View>
      </View>
    </View>
  )
}

export default CreateNewTodoFormScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 20
  },
  textInput: {
    flex: 1,
    marginVertical: 3,
    height: 24,
    backgroundColor: '#fff',
    marginHorizontal: 10
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 50,
    marginBottom: 50
  },
  buttonWrapper: {
    flex: 1
  },
  cancelButton: {
    flex: 1,
    marginLeft: 10
  },
  addForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 26,
    elevation: 2,
    padding: 10,
    marginHorizontal: 5
  }
})
