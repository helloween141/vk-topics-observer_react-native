import { FETCH_MESSAGES, SHOW_ALERT, SHOW_LOADER, HIDE_LOADER } from '../types'
import firebase from '../../firebase'
import { getUserID } from './authAction'
import { getVKGroups, getVKMessages } from '../../services/vkAPI'
import moment from 'moment'

function getVkData(data) {
  return getVKGroups(data.groupId).then((res) => {
      const groupData = res[0]

      let obj = {
        groupId: groupData.id,
        groupName: groupData.name,
        groupPhoto: groupData.photo_100,
        data: [],
      }

      return getVKMessages(data.groupId, data.topicId)
        .then((res) => {
          if (res) {
            const messagesData = res.items
            const usersProfile = res.profiles

            messagesData.forEach((item, key) => {
              const userData = (usersProfile.find(user => user.id === item.from_id))

              const regExp = /\[(.*?)\]/
              let answerMatches = (item.text).match(regExp)
              if (answerMatches) {
                let submatch = (answerMatches[1]).split('|')
                item.text = (item.text).replace(regExp, submatch[1])
              }

              obj.data.push({
                id: item.id,
                text: item.text,
                date: moment.unix(item.date).format("DD.MM.YYYY в HH:MM"),
                userPhoto: userData.photo_100,
                userName: userData.first_name + ' ' + userData.last_name,
                userUrl: `https://vk.com/id${userData.id}`
              })
            })
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

export const fetchMessages = (firstFlag = false) => {
  return async function (dispatch) {
    try {

      if (firstFlag) {
        dispatch({
          type: SHOW_LOADER,
        })
      }

      const uid = getUserID()
      const data = (await firebase.database().ref(`/users/${uid}/topics`).once('value')).val() || {}

      const promises = []
      let result = []

      Object.keys(data).forEach((key) => {
        promises.push(getVkData(data[key]))
      })

      Promise.all(promises).then((res) => {
        if (res.length > 0) {
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
            type: FETCH_MESSAGES,
            payload: result,
          })
                    
          dispatch({
            type: HIDE_LOADER,
          })

        } else {
          if (firstFlag) {
            dispatch({
              type: HIDE_LOADER,
            })
          }
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
