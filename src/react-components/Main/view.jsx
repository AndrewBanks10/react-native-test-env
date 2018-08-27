import React from 'react'
import {
  Text,
  View,
  Button,
  TextInput,
  Picker,
  Switch
} from 'react-native'

export default props => {
  return (
    <View>
      <Text id='counter'>Counter: {props.counter}</Text>
      <Button
        id='increment'
        onPress={props.increment}
        title='Press Me'
      />
      <TextInput
        id='textInput'
        onChangeText={props.changeText}
        value={props.text}
      />
      <Picker
        id='picker'
        selectedValue={props.pickerValue}
        style={{ height: 50, width: 100 }}
        onValueChange={props.changePickerValue}
      >
        <Picker.Item label='React' value='React' />
        <Picker.Item label='ReactNative' value='ReactNative' />
        <Picker.Item label='JavaScript' value='JavaScript' />
      </Picker>
      <Switch
        id='switch'
        value={props.switchValue}
        onValueChange={props.changeSwitchValue}
      />
    </View>
  )
}
