import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { color } from "./color";

export default function App() {
  const [money, setMoney] = useState("1,000,000");
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [number, setNumber] = useState(0);
  const [minus, setMinus] = useState(0);

  const handlePlus = (kind) => {
    let m = 0;

    if (kind == "coffe") {
      m = 1500;
      setMinus(minus + m);
    } else if (kind == "hand") {
      m = 5000;
      setMinus(minus + m);
    }
  };

  const handleMinus = (kind) => {
    let m = 0;

    if (kind == "coffe") {
      m = 1500;
      setMinus(minus - m);
    } else if (kind == "hand") {
      m = 5000;
      setMinus(minus - m);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.moneyView}>
        <Text style={styles.text1}>목표 금액까지</Text>
        <Text style={styles.text2}>{money}₩</Text>
      </View>
      <View style={styles.btnView}>
        <View style={styles.dayCon}>
          <Text>
            2022년 {month}월 {day}일
          </Text>
        </View>
        <View style={styles.btnCon}>
          <View style={styles.itemCon}>
            <MaterialCommunityIcons
              name="coffee-maker"
              size={45}
              color={color.theme2}
              style={{
                width: "20%",
                textAlign: "center",
              }}
            />
            <View style={styles.numric}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  if (number >= 1) {
                    setNumber(number - 1);
                    handleMinus("coffe");
                  }
                }}
              >
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 33 }}>{number}</Text>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  setNumber(number + 1);
                  handlePlus("coffe");
                }}
              >
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.minusMoney}>
              <Text style={styles.text3}>{minus}₩</Text>
            </View>
          </View>

          <View style={styles.itemCon}>
            <Ionicons
              name="hand-left-outline"
              size={45}
              color={color.theme2}
              style={{
                width: "20%",
                textAlign: "center",
              }}
            />
            <View style={styles.numric}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  if (number >= 1) {
                    setNumber(number - 1);
                    handleMinus("hand");
                  }
                }}
              >
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 33 }}>{number}</Text>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  setNumber(number + 1);
                  handlePlus("hand");
                }}
              >
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.minusMoney}>
              <Text style={styles.text3}>{minus}₩</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.theme2,
  },
  moneyView: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  btnView: {
    flex: 6,
    backgroundColor: color.theme3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  dayCon: {
    flex: 0.8,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginLeft: 20,
    marginBottom: 20,
    // backgroundColor: "red",
  },
  btnCon: {
    flex: 5.2,
    alignItems: "center",
  },
  itemCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 15,
  },
  text1: {
    marginTop: 30,
    color: color.theme3,
  },
  text2: {
    color: color.theme3,
    fontSize: 40,
  },
  numric: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "30%",
  },
  touch: {
    padding: 20,
  },
  minusMoney: {
    width: "25%",
    alignItems: "center",
  },
  text3: {
    fontSize: 25,
  },
});
