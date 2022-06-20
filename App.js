import React,{useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-native-paper";
import BottomSheet from "./botton-sheet/BottonSheet";
export default function App() {
  const [show, setShow] = useState(false);
  return (
    <Provider>
      <View style={styles.container}>
        <Button title="Show Bottom Sheet" onPress={() => setShow(true)} />
        <BottomSheet
          show={show}
          onDismiss={() => {
            setShow(false);
          }}
        ></BottomSheet>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
});
