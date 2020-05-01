import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'
import { globalStyles } from '../../styles/global'
import { Item } from './Item'

export const MessagesList = ({ messages }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View>
        {messages.map((item, key) => (
          <View key={key}>
            <View style={{...globalStyles.item, ...globalStyles.groupItem}}>
              <Image
                style={globalStyles.groupPhoto}
                source={{ uri: item.groupPhoto }}
              />
              <Text style={globalStyles.groupName}>{item.groupName}</Text>
            </View>
            <Item key={item.id} items={item.data} />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
})
