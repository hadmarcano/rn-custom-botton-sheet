import { useRef } from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { Portal } from "react-native-paper";

const ButtomSheet = () => {
  const BottomSheetHeight = Dimensions.get("window").height*0.5;
  const deviceWidth = Dimensions.get("window").width;
  const botton = useRef(new Animated.value(-BottomSheetHeight)).current;

  return (
    <Portal>
      <Animated.View
      styled={[styles.root, {height: BottomSheetHeight}]}
      ></Animated.View>
    </Portal>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default ButtomSheet;
