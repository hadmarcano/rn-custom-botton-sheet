import React,{useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Provider } from "react-native-paper";
import ButtomSheet from "./button-sheet/ButtonSheet";
export default function App() {
  const [show, setShow] = useState(true);
  return (
    <Provider>
      <View style={styles.container}>
        <Button title="Show Bottom Sheet" onPress={() => setShow(true)} />
        <ButtomSheet
          show={show}
          onDismiss={() => {
            setShow(false);

          }}
        ></ButtomSheet>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
