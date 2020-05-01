import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

export const Loader = () => {
  const loader = useSelector((state) => state.loader)

  return (
    <View>
      {loader.visible && (
        <ActivityIndicator size='large' color='#000' style={styles.loader} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    position: 'relative',
    left: 0,
    right: 0,
    top: '50%',
    bottom: 0,
    margin: 'auto'
  },
})
