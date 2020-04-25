import { Text, StyleSheet, SectionList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Todo from './Todo'
import { getCategory } from '../utils/TodoUtils'
import _ from 'lodash'

const groupTodos = (todos) => {
  const dataMap = _.groupBy(todos, getCategory)
  const sections = Object.keys(dataMap).map(key => {
    return {
      title: key,
      data: dataMap[key]
    }
  })
  console.log(sections)
  return sections
}

const sectionTitle = ({ section: { title } }) => (
  <Text style={styles.sectionHeader}>{title}</Text>
)

const TodoList = (props) => {
  const {
    todos = [],
    onToggleCompeleteStatus = () => false,
    onDelete = () => false
  } = props

  const [groupedTodos, setGroupedTodos] = useState([])

  useEffect(() => {
    setGroupedTodos(groupTodos(todos))
  }, [todos.length])

  return (
    <SectionList
      sections={groupedTodos}
      renderItem={({ item }) => (
        <Todo
          onDelete={onDelete}
          onToggleCompeleteStatus={onToggleCompeleteStatus}
          key={item.id} todo={item}
        />
      )}
      renderSectionHeader={sectionTitle}
    />
  )
}

const styles = StyleSheet.create({
  container: {
  },
  sectionHeader: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: '800'
  }
})

export default TodoList
