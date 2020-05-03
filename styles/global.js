import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  authInput: {
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
    color: '#fff',
    fontSize: 18
  },
  simpleInput: {
    width: '75%',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#fafbfc',
    padding: 10,
    borderBottomColor: '#656565',
    borderBottomWidth: 0.7,
    minHeight: 60  
  },
  contItem: {
    alignItems: 'center'
  },
  groupItem: {
    alignItems: 'center',
    backgroundColor: '#edeef0',
  },
  groupPhoto: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  groupName: {
    fontSize: 16,
    color: '#285473',
    width: '80%'
  }
})
