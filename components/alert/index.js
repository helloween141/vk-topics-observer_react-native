import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import getMessage from './messages'
import getStyle from './styles'
import { hideAlert } from '../../redux/actions/alertAction'

export const Alert = () => {
  const alert = useSelector((state) => state.alert)
  const dispatch = useDispatch()

  if (alert.visible) {
    setTimeout(() => dispatch(hideAlert()), 3000)
  }

  return (
    <View style={styles.container}>
      {alert.visible && (
        <View style={[styles.alertBlock, getStyle(alert.type)]}>
          <Text style={styles.alertText}>{getMessage(alert.code)}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 9999
  },
  alertBlock: {
    width: '100%',
    height: 75,
    paddingTop: 35
  },
  alertText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
})
