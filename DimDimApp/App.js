import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
} from "react-native";
import { color } from "./color";

export default function App() {
  const ID = "@moneyBase";

  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  const [money, setMoney] = useState(0);
  const [minus, setMinus] = useState(0);

  const [coffeMoney, setCoffeMoney] = useState(0);
  const [handMoney, setHandMoney] = useState(0);

  const [coffeNumber, setCoffeNumber] = useState(0);
  const [handNumber, setHandNumber] = useState(0);

  const [modalVisiable, setModalVisiable] = useState(false);

  const [modalValue, setModalValue] = useState(0);

  useEffect(() => {
    loadMoney();
  }, []);

  useEffect(() => {
    saveMoney();
  }, [money]);

  const handlePlus = (kind) => {
    let m = 0;

    if (kind == "coffe") {
      m = 1500;
      setCoffeMoney(coffeMoney + m);
      setMinus(minus + m);
    } else if (kind == "hand") {
      m = 5000;
      setHandMoney(handMoney + m);
      setMinus(minus + m);
    }
  };

  const handleMinus = (kind) => {
    let m = 0;

    if (kind == "coffe") {
      m = 1500;
      setCoffeMoney(coffeMoney - m);
      setMinus(minus - m);
    } else if (kind == "hand") {
      m = 5000;
      setHandMoney(handMoney - m);
      setMinus(minus - m);
    }
  };

  const refreshMoney = () => {
    Alert.alert("금액 차감", "금액을 차감시키겠습니까?", [
      {
        text: "아니요",
        style: "destructive",
      },
      {
        text: "네",
        onPress: () => {
          let a = money - minus;

          setMoney(a);
          setCoffeMoney(0);
          setCoffeNumber(0);
          setHandMoney(0);
          setHandNumber(0);
          setMinus(0);
        },
      },
    ]);
  };

  const getTime = () => {
    const now = new Date();
    setMonth(now.getMonth() + 1);
    setDay(now.getDate());
  };

  const loadMoney = async () => {
    let a = await AsyncStorage.getItem(ID);
    b = JSON.parse(a);
    if (b != null) {
      setMoney(b);
    }
  };

  const saveMoney = async () => {
    try {
      await AsyncStorage.setItem(ID, JSON.stringify(money));
    } catch (error) {
      console.log(error);
    }
  };

  setInterval(getTime, 10000);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.nav}>
        <TouchableOpacity
          style={{ padding: 25 }}
          onPress={() => {
            Alert.alert("금액 재설정", "금액을 재설정 하시겠습니까?", [
              {
                text: "아니요",
                style: "destructive",
              },
              {
                text: "네",
                onPress: () => {
                  setModalVisiable(!modalVisiable);
                },
              },
            ]);
          }}
        >
          <Ionicons name="refresh" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.moneyView}>
        <Modal animationType="slide" transparent={true} visible={modalVisiable}>
          <View style={styles.modalView}>
            <View style={styles.modal}>
              <View style={styles.modalText}>
                <Text>설정할 금액을 입력하세요</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="number-pad"
                  value={modalValue.toString()}
                  onChangeText={(text) => setModalValue(text)}
                />
              </View>
              <TouchableOpacity
                style={styles.modalBtn}
                onPress={() => {
                  let a = modalValue;
                  setMoney(a - 0);
                  setModalValue(0);
                  setModalVisiable(!modalVisiable);
                }}
              >
                <Text style={{ textAlign: "center" }}>완료</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.text1}>목표 금액까지</Text>
        <Text style={styles.text2}>{money.toLocaleString()}₩</Text>
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
                width: "25%",
                textAlign: "center",
              }}
            />
            <View style={styles.numric}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  if (coffeNumber >= 1) {
                    setCoffeNumber(coffeNumber - 1);
                    handleMinus("coffe");
                  }
                }}
              >
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 33 }}>{coffeNumber}</Text>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  setCoffeNumber(coffeNumber + 1);
                  handlePlus("coffe");
                }}
              >
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.minusMoney}>
              <Text style={styles.text3}>{coffeMoney}₩</Text>
            </View>
          </View>

          <View style={styles.itemCon}>
            <Ionicons
              name="hand-left-outline"
              size={45}
              color={color.theme2}
              style={{
                width: "25%",
                textAlign: "center",
              }}
            />
            <View style={styles.numric}>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  if (handNumber >= 1) {
                    setHandNumber(handNumber - 1);
                    handleMinus("hand");
                  }
                }}
              >
                <AntDesign name="minuscircleo" size={20} color="black" />
              </TouchableOpacity>
              <Text style={{ fontSize: 33 }}>{handNumber}</Text>
              <TouchableOpacity
                style={styles.touch}
                onPress={() => {
                  setHandNumber(handNumber + 1);
                  handlePlus("hand");
                }}
              >
                <AntDesign name="pluscircleo" size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.minusMoney}>
              <Text style={styles.text3}>{handMoney}₩</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.minusBtnCon}
          onPress={() => {
            refreshMoney();
          }}
        >
          <View
            style={{
              backgroundColor: color.theme1,
              padding: 15,
              borderRadius: 10,
              width: "30%",
            }}
          >
            <Text style={styles.minusBtn}>-{minus}₩</Text>
          </View>
        </TouchableOpacity>
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
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  nav: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  btnView: {
    flex: 6,
    backgroundColor: color.theme3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -30,
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
    flex: 3.7,
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
    fontSize: 20,
  },
  minusBtnCon: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  minusBtn: {
    textAlign: "center",
    color: "black",
  },
  modalView: {
    width: "100%",
    height: "30%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: "50%",
    marginTop: 20,
    textAlign: "center",
    fontSize: 20,
  },
  modal: {
    width: "85%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 25,
    borderWidth: 1.2,
    // padding: 80,
    height: "70%",
    borderRadius: 20,
    backgroundColor: color.theme4,
    // opacity: 0.9,
    borderColor: color.theme1,
  },
  modalText: {
    width: "100%",
    alignItems: "center",
  },
  modalBtn: {
    backgroundColor: color.theme1,
    padding: 12,
    borderRadius: 10,
    width: "25%",
  },
});
