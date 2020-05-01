import React, { useContext, useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import { TopicsContext } from './context'

export const Form = () => {
  const { createTopic } = useContext(TopicsContext)
  const [topicUrl, setTopicUrl] = useState('')
  const clickHandler = () => {
    setTopicUrl('')
    createTopic(topicUrl)
  }

  return (
    <View style={styles.form}>
      <TextInput
        placeholder='Введите url топика'
        name='topicUrl'
        onChangeText={(topicUrl) => setTopicUrl(topicUrl)}
        value={topicUrl}
        style={styles.input}
        placeholderTextColor = "#000"
      />
      <Button title='Создать' onPress={() => clickHandler()} />
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingTop: 15,
    paddingBottom: 20
  },
  input: {
    width: '75%',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
})
