import {
  ADD_TOPIC,
  FETCH_TOPICS,
  REMOVE_TOPIC_DATA,
  REMOVE_TOPIC_GROUP,
} from '../types'
const initialState = {
  topics: [],
}

const topicsReducer = function (state = initialState, action) {
  switch (action.type) {
    case ADD_TOPIC: {
      let groupIndex = state.topics.findIndex(
        (elem) => action.payload.groupId === elem.groupId
      )
      if (groupIndex === -1) {
        return { ...state, topics: [...state.topics, action.payload] }
      } else {
        return {
          ...state,
          topics: state.topics.map((topic) =>
            topic.groupId === action.payload.groupId
              ? { ...topic, data: [...topic.data, ...action.payload.data] }
              : topic
          ),
        }
      }
    }

    case FETCH_TOPICS:
      return { ...state, topics: action.payload }

    case REMOVE_TOPIC_DATA: {
      return {
        ...state,
        topics: state.topics.map((topic) =>
          topic.groupId === action.payload.groupId
            ? {
                ...topic,
                data: topic.data.filter(
                  (item) => item.id !== action.payload.topicId
                ),
              }
            : topic
        ),
      }
    }

    case REMOVE_TOPIC_GROUP: {
      return {
        ...state,
        topics: state.topics.filter(
          (topic) => topic.groupId !== action.payload.groupId
        ),
      }
    }

    default:
      return state
  }
}

export default topicsReducer
