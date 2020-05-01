import React from 'react'
import { StyleSheet, Text, View, Image, Linking, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/global'

export const Item = ({ items }) => {
  return (
    <View>
      {items.map((item, key) => (
        <View style={globalStyles.item} key={key}>
          {item.isFavourite}
          <TouchableHighlight onPress={() => Linking.openURL(`${item.userUrl}`)} underlayColor="#ffffff00">
            <Image style={styles.userPhoto} source={{ uri: item.userPhoto }}/>
          </TouchableHighlight>
      
          <View style={styles.content}>
            <View>
              <Text style={styles.userName} onPress={() => Linking.openURL(`${item.userUrl}`)}>{item.userName}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <View style={styles.text}>
              <Text>{item.text}</Text>
            </View>
          </View>

        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    width: '75%',
  },
  userPhoto: {
    width: 50,
    height: 50,
    marginRight: 20,
    marginRight: 20,
    borderRadius: 150 / 2,
    overflow: 'hidden',
  },
  userName: {
    fontWeight: 'bold',
  },
  date: {
    color: 'gray',
    fontSize: 12
  },
  text: {
    marginTop: 5
  }
})
