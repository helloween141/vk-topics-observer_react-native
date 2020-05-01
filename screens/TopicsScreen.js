import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, View, TextInput } from 'react-native'
import { TopicsList } from '../components/topics'
import { TopicsContext } from '../components/topics/context'
import {
  addTopic,
  fetchTopics,
  removeTopicData,
  removeTopicGroup,
} from '../redux/actions/topicsAction'
import { fetchMessages } from '../redux/actions/messagesAction'

import { showAlert } from '../redux/actions/alertAction'
import { Loader } from '../components/loader'
import { Form } from '../components/topics/form'
import { FadeInView } from '../components/animation/fadeIn'

export const TopicsScreen = ({ navigation }) => {
  const topics = useSelector((state) => state.topics.topics)
  const loader = useSelector((state) => state.loader)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTopics())
  }, [])

  const createTopic = (topicUrl) => {
    const parseData = topicUrl.match(/\d+/g)
    if (parseData && parseData.length === 2) {
      dispatch(addTopic(...parseData))

      dispatch(fetchMessages())
    } else {
      dispatch(showAlert('topics/wrong-url-format', 'error'))
    }
  }

  const deleteTopicData = (id) => {
    dispatch(removeTopicData(id))
  }

  const deleteTopicGroup = (id) => {
    dispatch(removeTopicGroup(id))
  }

  let template = <View />
  if (!loader.visible) {
    if (topics.length > 0) {
      template = (
        <FadeInView>
          <TopicsList topics={topics} />
          <Form />
        </FadeInView>
      )
    } else {
      template = (
        <View>
          <Form />
        </View>
      )
    }
  }

  return (
    <TopicsContext.Provider
      value={{
        deleteTopicGroup,
        deleteTopicData,
        createTopic,
      }}
    >
      <View style={styles.container}>
        <Loader />
        {template}
      </View>
    </TopicsContext.Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
