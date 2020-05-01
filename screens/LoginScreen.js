import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Button, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { login } from "../redux/actions/authAction";
import { globalStyles } from '../styles/global'

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  function loginUser() {
    dispatch(
      login(
        {
          email,
          password
        },
        navigation
      )
    );
  }

  return (
    <View style={styles.container}>
      <Text h2 style={styles.title}>
        VK Topics Obs
      </Text>

      <View style={styles.loginForm}>

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
              placeholder='Пароль'
              name='password'
              onChangeText={password => setPassword(password)}
              value={password}
              placeholderTextColor = "#fff"
              style={globalStyles.authInput}
              secureTextEntry={true}
            />
        </View>

        <View style={styles.button}>
          <Button
            title="Войти"
            onPress={() => loginUser()}
            leftIcon={<Icon name="sign-in" size={24} color="white" />}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <View>
            <Text style={styles.text}>Создать аккаунт</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  loginForm: {
    width: "80%"
  },
  inputWrapper: {
    marginTop: 30
  },
  button: {
    marginTop: 30
  },
  text: {
    marginTop: 30,
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: '#fff'
  },
  title: {
    color: "#fff"
  }
});
