import { SHOW_LOADER, HIDE_LOADER } from '../types'

export const showLoader = (code, type) => {
  return {
    type: SHOW_LOADER,
    payload: { code, type },
  }
}

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  }
}
