import React, { useContext } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import { Icon } from 'react-native-elements'
import { Item } from './Item'
import { TopicsContext } from './context'
import { globalStyles } from '../../styles/global'

export const TopicsList = ({ topics }) => {
  const { deleteTopicGroup } = useContext(TopicsContext)

  return (
    <ScrollView style={styles.scrollView}>
      {topics.map((item, key) => (
        <View key={key}>
          <View style={{...globalStyles.item, ...globalStyles.groupItem}}>
            <Image
              style={globalStyles.groupPhoto}
              source={{ uri: item.groupPhoto }}
            />

            <Text style={globalStyles.groupName}>{item.groupName}</Text>
           
          </View>

          <View style={styles.deleteGroupIco}>
               <Icon name='delete-sweep' color='#4872a3' size={35} onPress={() => deleteTopicGroup(item.groupId)} />
          </View> 
          
          <Item key={item.id} items={item.data} />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 15,
    height: '85%'
  },
  deleteGroupIco: {
    position: 'absolute',
    right: 7,
    top: 16
  }
})
