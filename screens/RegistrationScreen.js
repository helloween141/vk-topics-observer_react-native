import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { register } from '../redux/actions/authAction'
import { showAlert } from '../redux/actions/alertAction'
import { globalStyles } from '../styles/global'

export const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  function registerUser() {
    let validName = name.trim()
    if (validName.length > 0) {
      dispatch(
        register(
          {
            name,
            email,
            password,
          },
          navigation
        )
      )
    } else {
      dispatch(showAlert('empty-name-field', 'error'))
    }
  }

  return (
    <View style={styles.container}>
      <Text h2 style={styles.title}>
        Регистрация
      </Text>

      <View style={styles.registerForm}>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='Имя'
            name='name'
            onChangeText={name => setName(name)}
            value={name}
            placeholderTextColor = "#fff"
            style={globalStyles.authInput}
          />
        </View>

        <View style={styles.inputWrapper}>
          <TextInput
            placeholder='Email'
            name='email'
            onChangeText={email => setEmail(email)}
            value={email}
            placeholderTextColor = "#fff"
            style={globalStyles.authInput}
          />
        </View>       

        <View style={styles.inputWrapper}>
          <TextInput 
              placeholder='Пароль (не менее 6 символов)'
              name='password'
              onChangeText={password => setPassword(password)}
              value={password}
              placeholderTextColor = "#fff"
              style={globalStyles.authInput}
              secureTextEntry={true}
            />
        </View>

        <View style={styles.button}>
          <Button title='Зарегистрироваться' onPress={() => registerUser()} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View>
            <Text style={styles.text}>У меня уже есть аккаунт</Text>
          </View>
        </TouchableOpacity>
      </View>
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
  registerForm: {
    width: '80%',
  },
  inputWrapper: {
    marginTop: 30
  },
  button: {
    marginTop: 30,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationColor: '#fff'
  },
  title: {
    color: '#fff',
  },
})
