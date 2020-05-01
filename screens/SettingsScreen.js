import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Button, Text, Picker } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { updateSettings } from '../redux/actions/settingsAction'
import { fetchMessages } from '../redux/actions/messagesAction'
import { globalStyles } from '../styles/global'

export const SettingsScreen = ({ navigation }) => {
  const settings = useSelector((state) => state.settings)

  const [maxMessagesCount, setMaxMessagesCount] = useState(
    settings.maxMessagesCount.toString()
  )
  const [sortType, setSortType] = useState(settings.sortType)

  const dispatch = useDispatch()

  const saveHandler = () => {
    dispatch(
      updateSettings({
        maxMessagesCount,
        sortType,
      })
    )

    dispatch(fetchMessages())
  }

  return (
    <View style={styles.container}>
      {settings && (
        <View>
          <View style={styles.inputWrapper}>
            <Text>Количество отображаемых сообщений:</Text>
            <TextInput
              name='maxMessagesCount'
              onChangeText={(val) => setMaxMessagesCount(val)}
              value={maxMessagesCount}
              style={{...globalStyles.simpleInput, ...styles.textInput}}
              placeholderTextColor='#000'
            />
          </View>

          <View style={styles.inputWrapper}>
            <Text>Сортировать по:</Text>
            <Picker
              selectedValue={sortType}
              onValueChange={(val) => setSortType(val)}
              style={styles.pickerInput}
            >
              <Picker.Item label='возрастанию' value='asc' />
              <Picker.Item label='убыванию' value='desc' />
            </Picker>
          </View>

          <Button onPress={() => saveHandler()} title='Сохранить' />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  inputWrapper: {
    marginTop: 30,
    flexDirection: 'row'
  },
  pickerInput: {
    width: '40%',
    position: 'relative',
    top: -16,
    left: 5
  },
  textInput: {
    width: '15%',
    fontSize: 16,
    position: 'relative',
    top: -5,
    left: 15
  }

})
