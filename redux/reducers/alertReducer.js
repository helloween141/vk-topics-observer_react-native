import { SHOW_ALERT, HIDE_ALERT } from '../types'
const initialState = {
  visible: false,
  type: 'info',
  code: '',
}

const alertReducer = function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return { ...state, ...action.payload, visible: true }
    case HIDE_ALERT:
      return { ...state, visible: false }
    default:
      return state
  }
}

export default alertReducer
