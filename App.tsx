import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

//const Separator = () => <View style={styles.separator} />;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.fixToText}>
        <View>
          <Text style={styles.title}>R$ 40</Text>
        </View>
        <Button
          title="Desfazer"
          onPress={() => Alert.alert("Right button pressed")}
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Simple Button pressed")}
        >
          <Text style={styles.btnText}>Press Me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Simple Button pressed")}>
          <Text>Press Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("Simple Button pressed")}>
          <Text>Press Me</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 200,
    marginTop: 20,
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 2,
    elevation: 4,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "left",
    fontWeight: "500",
  },
});
