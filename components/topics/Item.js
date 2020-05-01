import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TopicsContext } from './context'
import { Icon } from 'react-native-elements'
import { globalStyles } from '../../styles/global'

export const Item = ({ items }) => {
  const { deleteTopicData } = useContext(TopicsContext)

  if (items.length > 0) {
    return (
      <View>
        {items.map((item, key) => (
          <View style={{...globalStyles.item, ...globalStyles.contItem}} key={key}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.deleteIco}>
               <Icon name='delete-forever' color='#939393' size={35} onPress={() => deleteTopicData(item.id)} />
            </View>
          </View>
        ))}
      </View>
    )
  } else {
    return (
      <View>
        <Text>Нет отслеживаемых топиков</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    width: '80%',
  },
  deleteIco: {
    position: 'absolute',
    right: 11
  }
})
