import { FETCH_SETTINGS, SHOW_LOADER, HIDE_LOADER, UPDATE_SETTINGS, SHOW_ALERT } from '../types'
import { getUserID } from './authAction'
import firebase from '../../firebase'

export const fetchSettings = () => {
  return async function (dispatch) {
    try {
      const uid = getUserID()
      const data = (await firebase.database().ref(`/users/${uid}/settings`).once('value')).val() || {}

      dispatch({
        type: FETCH_SETTINGS,
        payload: data,
      })

    } catch (e) {
      throw e
    }
  }
}

export const updateSettings = (data) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: SHOW_LOADER,
      })
      
      const uid = getUserID()
      await firebase.database().ref(`/users/${uid}/settings`).update(data)

      dispatch({
        type: UPDATE_SETTINGS,
        payload: data,
      })

      dispatch({
        type: HIDE_LOADER,
      })
            
      dispatch({
        type: SHOW_ALERT,
        payload: { code: 'settings/update-success', type: 'info' },
      })


    } catch (e) {
      throw e
    }
  }
}
