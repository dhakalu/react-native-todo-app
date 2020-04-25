import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export const Action = (props) => {
  const {
    title = '',
    onSelectAction = () => false
  } = props

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelectAction(title)}>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20
  }
})

export default Action
