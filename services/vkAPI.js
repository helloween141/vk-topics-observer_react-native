import {
  ACCESS_TOKEN_VK,
  VERSION_VK,
  CORS_PROXY_URL,
} from 'react-native-dotenv'
import axios from 'axios'
import { store } from "../redux/store/store.js";

export const getVKGroups = (groupIds) => {
  return axios
    .get(`https://api.vk.com/method/groups.getById`, {
      params: {
        access_token: ACCESS_TOKEN_VK,
        v: VERSION_VK,
        group_ids: groupIds,
      },
    })
    .then(function (response) {
      return response.data.response
    })
    .catch(function (e) {
      throw e
    })
}

export const getVKTopics = (groupId, topicIds) => {
  return axios
    .get(`https://api.vk.com/method/board.getTopics`, {
      params: {
        access_token: ACCESS_TOKEN_VK,
        v: VERSION_VK,
        group_id: groupId,
        topic_ids: topicIds,
      },
    })
    .then(function (response) {
      return response.data.response
    })
    .catch(function (e) {
      throw e
    })
}

export const getVKMessages = (groupId, topicId) => {
  
  const settings = store.getState().settings

  return axios
    .get(`https://api.vk.com/method/board.getComments`, {
      params: {
        access_token: ACCESS_TOKEN_VK,
        v: VERSION_VK,
        group_id: groupId,
        topic_id: topicId,
        extended: 1,
        sort: settings.sortType || 'desc',
        count: settings.maxMessagesCount || 5,
       
      },
    })
    .then((response) => {
      return response.data.response
    })
    .catch((e) => {
      throw e
    })
}
