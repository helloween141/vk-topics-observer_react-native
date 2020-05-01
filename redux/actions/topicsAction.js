import {
  SHOW_ALERT,
  ADD_TOPIC,
  FETCH_TOPICS,
  REMOVE_TOPIC_DATA,
  REMOVE_TOPIC_GROUP,
  SHOW_LOADER,
  HIDE_LOADER,
} from '../types'
import firebase from '../../firebase'
import { getUserID } from './authAction'
import { getVKGroups, getVKTopics } from '../../services/vkAPI'

// Получить данные с API
function getVkData(data) {
  return getVKGroups(data.groupId).then((res) => {
      const groupData = res[0]

      let obj = {
        groupId: parseInt(groupData.id),
        groupName: groupData.name,
        groupPhoto: groupData.photo_100,
        data: [],
      }

      return getVKTopics(data.groupId, data.topicId).then((res) => {
          if (res) {
            const topicsData = res.items[0]
            obj.data.push({ id: parseInt(data.topicId), title: topicsData.title })
            return obj
          }
        })
        .catch((e) => {
          throw e
        })
    })
    .catch((e) => {
      throw e
    })
}

// Вывести топики
export const fetchTopics = () => {
  return async function (dispatch) {
    try {
      dispatch({
        type: SHOW_LOADER,
      })
      const uid = getUserID()
      const data = (await firebase.database().ref(`/users/${uid}/topics`).once('value')).val() || {}
      const promises = []
      let result = []

      Object.keys(data).forEach((key) => {
        promises.push(getVkData(data[key]))
      })

      Promise.all(promises).then((res) => {
        if (res) {
          res.forEach((item) => {
            let groupIndex = result.findIndex(
              (elem) => item.groupId === elem.groupId
            )
            groupIndex === -1
              ? result.push(item)
              : (result[groupIndex].data = [
                  ...result[groupIndex].data,
                  ...item.data,
                ])
          })
          dispatch({
            type: FETCH_TOPICS,
            payload: result,
          })

          dispatch({
            type: HIDE_LOADER,
          })
        }
      })
    } catch (e) {
      dispatch({
        type: SHOW_ALERT,
        payload: { code: e.code, type: 'error' },
      })
      throw e
    }
  }
}

// Создать топик
export const addTopic = (groupId, topicId) => {
  return async function (dispatch) {
    try {
      const uid = getUserID()
      let isTopicExists = false
      await firebase.database().ref(`/users/${uid}/topics`).once('value', function (snapshot) {
          snapshot.forEach((snapshot) => {
            let elem = snapshot.val()
            if (elem.groupId === groupId && elem.topicId === topicId) {
              isTopicExists = true
              return
            }
          })
        })

      if (!isTopicExists) {
        await firebase.database().ref(`/users/${uid}/topics`).push({ groupId, topicId })

        getVkData({ groupId, topicId }).then((result) => {
            if (result) {
              dispatch({
                type: ADD_TOPIC,
                payload: result,
              })
            } else {
              dispatch({
                type: SHOW_ALERT,
                payload: { code: 'topics/error-add', type: 'error' },
              })
            }
          })
          .catch((e) => {
            throw e
          })
      } else {
        dispatch({
          type: SHOW_ALERT,
          payload: { code: 'topics/topic-exists', type: 'info' },
        })
      }
    } catch (e) {
      dispatch({
        type: SHOW_ALERT,
        payload: { code: e.code, type: 'error' },
      })
      throw e
    }
  }
}

// Удалить информацию топика
export const removeTopicData = (topicId) => {
  return async function (dispatch) {
    try {
      const uid = getUserID()

      await firebase.database().ref(`/users/${uid}/topics`).orderByChild('topicId').equalTo(topicId.toString()).once('value', (snapshot) => {
        snapshot.forEach((snapshot) => {
          let key = snapshot.key
          let val = snapshot.val()

          firebase.database().ref(`/users/${uid}/topics/${key}`).remove().then(() => {
            dispatch({
              type: REMOVE_TOPIC_DATA,
              payload: {
                groupId: parseInt(val.groupId),
                topicId: parseInt(val.topicId),
              },
            })
            dispatch({
              type: SHOW_ALERT,
              payload: { code: 'topics/topic-removed', type: 'info' },
            })
          }).catch((e) => {
            throw e
          })
        })
      })
    } catch (e) {
      throw e
    }
  }
}

// Удалить группу топиков
export const removeTopicGroup = (groupId) => {
  return async function (dispatch) {
    try {
      const uid = getUserID()

      await firebase.database().ref(`/users/${uid}/topics`).orderByChild('groupId').equalTo(groupId.toString()).once('value', (snapshot) => {
        snapshot.forEach((snapshot) => {
          let key = snapshot.key
          let val = snapshot.val()

          firebase.database().ref(`/users/${uid}/topics/${key}`).remove().then(() => {
            dispatch({
              type: REMOVE_TOPIC_GROUP,
              payload: {
                groupId: parseInt(val.groupId)
              },
            })
            dispatch({
              type: SHOW_ALERT,
              payload: { code: 'topics/group-removed', type: 'info' },
            })
          }).catch((e) => {
            throw e
          })
        })
      })
    } catch (e) {
      throw e
    }
  }
}
