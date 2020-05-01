import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { MessagesList } from '../components/messages'
import { fetchMessages } from '../redux/actions/messagesAction'
import { fetchSettings } from '../redux/actions/settingsAction'
import { Loader } from '../components/loader'
import { FadeInView } from '../components/animation/fadeIn'

export const HomeScreen = ({ navigation }) => {
  const messages = useSelector((state) => state.messages.messages)
  const loader = useSelector((state) => state.loader)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSettings())

    dispatch(fetchMessages(true))

    const interval = setInterval(() => {
      dispatch(fetchMessages())
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  let template = <View />
  if (!loader.visible) {
    if (messages.length > 0) {
      template = <MessagesList messages={messages} />
    } else {
      template = (
        <View>
          <Text>Список сообщений пуст. Добавьте топик для отслеживания!</Text>
          <Button
            onPress={() => navigation.navigate('Topics')}
            title='Добавить топик'
          />
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <Loader />
      <FadeInView>{template}</FadeInView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
