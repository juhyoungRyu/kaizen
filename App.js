import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { color } from "./color";

export default function App() {
  useEffect(() => {
    console.log(money);
  }, [money]);

  const [money, setMoney] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputCon}>
        <TextInput
          placeholder="0₩"
          value={money}
          onChangeText={(text) => setMoney(text)}
          keyboardType="numeric"
          returnKeyType="done"
        />
      </View>
      <View style={styles.btnCon}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.theme3,
  },
  inputCon: {
    flex: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  btnCon: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  input: {},
  btn: {
    padding: 10,
    backgroundColor: color.theme1,
    width: "25%",
    borderRadius: 15,
    marginRight: 20,
  },
  btnText: {
    color: color.theme2,
    textAlign: "center",
  },
});
