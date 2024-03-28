import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Choose = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{
            backgroundColor: "#f57c00",
            borderRadius: "5",
            paddingHorizontal: 15,
            paddingVertical: 8,
          }}
        >
          <Text style={{ fontSize: 36, color: "white" }}>Patient</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup Doctor")}
          style={{
            backgroundColor: "#f57c00",
            borderRadius: 5,
            paddingHorizontal: 15,
            paddingVertical: 8,
          }}
        >
          <Text style={{ fontSize: 36, color: "white" }}>Doctor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Choose;
