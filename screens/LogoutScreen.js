import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { logout } from '../redux/actions/authAction'
import { Loader } from '../components/loader'

export const LogoutScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(logout(navigation))
  })

  return (
    <View style={styles.container}>
       <Text>Выход...</Text>
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
