import { FETCH_MESSAGES } from '../types'
const initialState = {
  messages: [],
}

const messagesReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return { ...state, messages: action.payload }
    default:
      return state
  }
}

export default messagesReducer
