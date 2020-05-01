import { SHOW_LOADER, HIDE_LOADER } from '../types'
const initialState = {
  visible: false,
}

const loaderReducer = function (state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, visible: true }
    case HIDE_LOADER:
      return { ...state, visible: false }
    default:
      return state
  }
}

export default loaderReducer
