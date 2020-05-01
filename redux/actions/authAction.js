import firebase from "../../firebase"
import {SET_USER, SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER} from "../types"


export const getUserID = () => {
    const user = firebase.auth().currentUser

    return user ? user.uid : null  
}

export const checkAuth = nav => {
  return async function(dispatch) {
    try {
        dispatch({
          type: SHOW_LOADER
        })
        const uid = getUserID()
        if (uid) {         
          const user = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val() || {}
          dispatch({
            type: SET_USER,
            payload: user
          })
          dispatch({
            type: HIDE_LOADER
          })         
          nav.navigate("Home")
        } else {
          nav.navigate("Login")
        }       
    } catch(e) {
      dispatch({
        type: SHOW_ALERT,
        payload: { code: e.code, type: "error" }
      })      
      //console.log(e)
      throw e
    }
  }
}

export const login = ({email, password}, nav) => {
  return async function(dispatch) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      const uid = getUserID()
      const user = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val() || {}
      if (user) {
        dispatch({
          type: SET_USER,
          payload: user
        })    
        nav.navigate("Home")
      }
    } catch(e) {
      dispatch({
        type: SHOW_ALERT,
        payload: { code: e.code, type: "error" }
      })
      //console.log(e)
      throw e
    }
  }
}

export const register = ({name, password, email}, nav) => {
  return async function(dispatch) {
    try {
      console.log(name, password, email)
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const uid = getUserID()
      await firebase.database().ref(`/users/${uid}/info`).set({
        name,
        email, 
      })

      await firebase.database().ref(`/users/${uid}/settings`).set({
        maxMessagesCount: 5,
        sortType: 'desc'
      })

      dispatch({
        type: SET_USER,
        payload: { name, email }
      })
      nav.navigate("Home")
    } catch(e) {
      dispatch({
        type: SHOW_ALERT,
        payload: { code: e.code, type: "error" }
      })
      //console.log(e)
      throw e
    }
  }
}

export const logout = nav => {
  return async function(dispatch) {
    try {
      await firebase.auth().signOut()
      dispatch({
        type: "SET_USER",
        payload: {}
      })      
      nav.navigate("Login")
    } catch(e) {
      dispatch({
        type: SHOW_ALERT,
        payload: { code: e.code, type: "error" }
      })
      //console.log(e)
      throw e
    }
  }
}
