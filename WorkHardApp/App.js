import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./color";
import { Feather } from "@expo/vector-icons";
import { Modal } from "react-native";

const STORAGE_KEY = "@toDos";
const SAVE_KEY = "@page";

export default function App() {
  useEffect(() => {
    loadToDos();
    setCheck();
  }, []);

  useEffect(async () => {
    checkWorking();
  });

  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const [doing, setDoing] = useState(false);
  const [modalSet, setModalSet] = useState(false);
  const [textEdit, setTextEdit] = useState("");
  const [forModal, setForModal] = useState("");
  const [tdKey, setTdKey] = useState();

  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  const onChangeText = (payload) => setText(payload);

  const onChangeEdit = (payload) => setTextEdit(payload);

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const loadToDos = async () => {
    const save = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(save));
  };

  // state working value change check..
  const checkWorking = async () => {
    await AsyncStorage.setItem(SAVE_KEY, JSON.stringify(working));
  };

  const setCheck = async () => {
    const s = await AsyncStorage.getItem(SAVE_KEY);
    if (s == "true") {
      work();
    } else if (s == "false") {
      travel();
    }
  };

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    const newToDos = {
      ...toDos,
      [Date.now()]: { text, working, done: doing },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = async (key) => {
    Alert.alert("Delete To Do?", "Are you sure?", [
      { text: "No" },
      {
        text: "Ok",
        onPress: async () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          await saveToDos(newToDos);
        },
      },
    ]);
    return;
  };

  const ddoing = async (key) => {
    const s = toDos[key];
    const c = {
      ...toDos,
      [key]: { done: !s.done, text: s.text, working: s.working },
    };
    setToDos(c);
    await saveToDos(c);
  };

  const editToDo = (key) => {
    setForModal(toDos[key]);
    setTdKey(key);
  };

  const editToDo2 = () => {
    if (textEdit === "") {
      Alert.alert("error.", "Please insert value");
    } else {
      const c = forModal;
      const key = tdKey;
      const t = textEdit;
      const s = {
        ...toDos,
        [key]: { done: false, text: t, working: c.working },
      };
      setToDos(s);
      setTextEdit("");
      setModalSet(false);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSet}
        onRequestClose={() => {
          setModalSet(!modalSet);
        }}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>수정할 문구를 입력해주세요</Text>
            <TextInput
              style={styles.modalInput}
              onChangeText={onChangeEdit}
              value={textEdit}
              returnKeyType="send"
            ></TextInput>
            <View style={styles.modalOk}>
              <Text
                style={styles.no}
                onPress={() => {
                  setModalSet(false);
                  setTextEdit("");
                }}
              >
                No
              </Text>
              <Text style={styles.ok} onPress={() => editToDo2()}>
                Ok
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
      <View style={styles.headers}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btn, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{ ...styles.btn, color: !working ? "white" : theme.grey }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paint}>
        <TextInput
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          returnKeyType={"done"}
          value={text}
          returnKeyType="send"
          placeholder={
            working ? "What do you have to do?" : "Where do you want to go?"
          }
          style={styles.input}
        />
      </View>
      <ScrollView contentContainerStyle={styles.paint}>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View style={styles.toDo} key={key}>
              <TouchableOpacity
                onPress={() => {
                  ddoing(key);
                }}
              >
                {toDos[key].done ? (
                  <Feather name="check-square" size={24} color="white" />
                ) : (
                  <Feather name="square" size={24} color="white" />
                )}
              </TouchableOpacity>
              <Text style={toDos[key].done ? styles.doneToDo : styles.toDoText}>
                {toDos[key].text}
              </Text>
              <TouchableOpacity>
                <Feather
                  name="edit"
                  size={22}
                  color="white"
                  style={styles.edit}
                  onPress={() => {
                    editToDo(key);
                    setModalSet(true);
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  deleteToDo(key);
                }}
              >
                <Feather name="x-square" size={22} color="white" />
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 22,
  },
  headers: {
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 100,
  },
  btn: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 20,
    width: "95%",
    fontSize: 15,
  },
  paint: {
    alignItems: "center",
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 19,
    paddingHorizontal: 22,
    borderRadius: 15,
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    flex: 1,
    marginLeft: 14,
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  doneToDo: {
    flex: 1,
    marginLeft: 14,
    color: "#666",
    textDecorationLine: "line-through",
  },
  edit: {
    marginRight: 14,
  },
  modalView: {
    flexDirection: "column",
    margin: 70,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalInput: {
    borderBottomWidth: 1,
    borderRadius: 5,
    width: "70%",
    borderColor: "#999",
    marginTop: 15,
    textAlign: "center",
  },
  modalText: {
    fontSize: 14,
    color: "black",
    marginBottom: 25,
  },
  modalOk: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  no: {
    textAlign: "center",
    color: "white",
    backgroundColor: "#ff4040",
    borderRadius: 3,
    margin: 2,
    padding: 5,
    width: "25%",
    marginRight: 15,
  },
  ok: {
    color: "white",
    textAlign: "center",
    color: "white",
    backgroundColor: "#0080ff",
    borderRadius: 3,
    margin: 2,
    padding: 5,
    width: "25%",
    marginLeft: 15,
  },
});

// check box
