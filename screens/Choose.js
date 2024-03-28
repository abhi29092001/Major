import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
        <View className="bg-slate-50 shadow-md shadow-gray-500/50 rounded-lg">
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            // style={{
            //   backgroundColor: "#f57c00",
            //   borderRadius: "5",
            //   paddingHorizontal: 15,
            //   paddingVertical: 8,
            // }}
          >
            <Image
              source={require("../assets/patient.png")}
              style={{ height: hp(18), width: hp(18) }}
            />
            <Text
              style={{ fontSize: 18, color: "black", textAlign: "center" }}
              className="tracking-widest text-gray-100"
            >
              PATIENT
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-slate-50 shadow-md shadow-gray-500/50 rounded-lg">
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            // style={{
            //   backgroundColor: "#f57c00",
            //   borderRadius: 5,
            //   paddingHorizontal: 15,
            //   paddingVertical: 8,
            // }}
          >
            <Image
              source={require("../assets/doctor.png")}
              style={{ height: hp(18), width: hp(18) }}
            />
            <Text
              style={{ fontSize: 18, color: "black", textAlign: "center" }}
              className="tracking-widest text-gray-100"
            >
              DOCTOR
            </Text>
          </TouchableOpacity>
        </View>
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
