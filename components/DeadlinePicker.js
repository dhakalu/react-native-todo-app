import React from 'react'
import { View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

const DeadlinePicker = (props) => {
  const {
    date = new Date(),
    mode = '',
    onChange = () => false,
    isOpen = false
  } = props

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    // setShow(Platform.OS === 'ios')
    onChange(currentDate)
  }

  return (
    <View>
      {isOpen && (
        <DateTimePicker
          testID='dateTimePicker'
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour
          display='default'
          onChange={handleDateChange}
        />
      )}
    </View>
  )
}

export default DeadlinePicker
