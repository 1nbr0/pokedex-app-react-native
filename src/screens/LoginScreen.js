import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";

export const LoginScreen = () => {
  const { register, login, forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.title}>
        Please, do login to access your favorite Pokedex
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable
        style={styles.login}
        onPress={() => login(email, password)}
        disabled={!email || !password}
      >
        <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <Pressable
        style={styles.register}
        onPress={() => register(email, password)}
        disabled={!email || !password}
      >
        <Text style={styles.registerText}>Register</Text>
      </Pressable>
      <Text
        style={styles.forgottenPassword}
        onPress={() => {
          forgotPassword(email);
        }}
      >
        Mot de passe oublié
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
    padding: 8,
    marginTop: 30,
    marginRight: 40,
    marginLeft: 40,
  },
  login: {
    alignItems: "center",
    backgroundColor: "#88071c",
    marginTop: 40,
    marginLeft: 100,
    marginRight: 100,
  },
  register: {
    alignItems: "center",
    backgroundColor: "black",
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
  },
  loginText: {
    color: "white",
    fontSize: 18,
    padding: 5,
  },
  registerText: {
    color: "white",
    fontSize: 18,
    padding: 5,
  },
  forgottenPassword: {
    textAlign: "center",
    marginTop: 30,
  },
});
