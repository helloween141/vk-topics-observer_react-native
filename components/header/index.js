import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

export const AppHeader = ({ navigation, title }) => {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.header}>
      <Icon name='menu' color='#fff' size={30} onPress={openMenu} underlayColor="#ffffff00"/>
      <View>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerTitle: {
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
    marginLeft: 60,
    marginBottom: 3,
    fontWeight: 'bold',
  }
})
