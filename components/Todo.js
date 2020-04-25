import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CenteredView } from './CenteredView'

const Todo = (props) => {
  const {
    todo = {},
    onToggleCompeleteStatus = () => false,
    onDelete = () => false
  } = props

  const {
    done = false,
    id = ''
  } = todo

  const getIcon = () => {
    const iconName = done ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'
    return (
      <CenteredView>
        <MaterialCommunityIcons name={iconName} size={16} color='green' />
      </CenteredView>
    )
  }

  return (
    <TouchableOpacity onLongPress={() => onToggleCompeleteStatus(id)}>
      <View style={styles.todo}>
        <View style={styles.checkBoxIcon}>
          {getIcon()}
        </View>
        <View style={styles.todoTitle}>
          <Text
            key={todo.id}
            style={{ textDecorationLine: done ? 'line-through' : 'none' }}
          >
            {todo.title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <View style={styles.deleteIcon}>
            {<MaterialCommunityIcons name='close' size={16} color='red' />}
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default Todo

const styles = StyleSheet.create({
  todo: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  todoTitle: {
    marginLeft: 10,
    flex: 10
  },
  checkBoxIcon: {

  },
  deleteIcon: {
    alignSelf: 'center'
  }
})
