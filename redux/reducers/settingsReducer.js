import { FETCH_SETTINGS, UPDATE_SETTINGS } from '../types'

const initialState = {
  maxMessagesCount: 5,
  sortType: 'desc'
}

const settingsReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SETTINGS:
      return { ...state, ...action.payload }
    case UPDATE_SETTINGS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default settingsReducer
