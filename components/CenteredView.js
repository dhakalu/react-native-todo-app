import { StyleSheet, View } from 'react-native'
import React from 'react'

export const CenteredView = (props) => {
  return (
    <View style={styles.center}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
})
