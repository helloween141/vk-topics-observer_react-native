import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { checkAuth } from '../redux/actions/authAction'
import firebase from '../firebase'
import { Loader } from '../components/loader'

export const LoadingScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      dispatch(checkAuth(navigation))
    })
  })

  return (
    <View style={styles.container}>
      <Loader/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})
