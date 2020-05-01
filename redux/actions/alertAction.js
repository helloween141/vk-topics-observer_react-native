import { SHOW_ALERT, HIDE_ALERT } from '../types'
export const showAlert = (code, type) => {
  return {
    type: SHOW_ALERT,
    payload: { code, type },
  }
}

export const hideAlert = () => {
  return {
    type: HIDE_ALERT,
  }
}
