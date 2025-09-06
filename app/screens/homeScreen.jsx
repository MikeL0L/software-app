// screens/HomeScreen.jsx
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, {user} 👋</Text>
      <Button title="Logout" onPress={() => navigation.replace("Login")} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
  },
});
