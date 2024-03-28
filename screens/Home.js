import React, { useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import colors from "../colors";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const catImageUrl =
  "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";

const Home = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color={colors.gray}
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => (
        // <Image
        //   source={{ uri: catImageUrl }}
        //   style={{
        //     width: 40,
        //     height: 40,
        //     marginRight: 15,
        //   }}
        // />
        <View
          style={{
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Account")}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              style={{ width: 40, height: 40 }}
              name="account-circle"
              size={36}
              color="black"
            />
            <Text style={{ fontWeight: "500", fontSize: 16 }}>User</Text>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <>
      <View
        style={{
          backgroundColor: "white",
          paddingHorizontal: 10,
          maxWidth: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 30,
            marginTop: 20,
          }}
        >
          Hi, User
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View className="bg-slate-50 shadow-md shadow-gray-500/50 rounded-lg">
            <TouchableOpacity
              onPress={() => navigation.navigate("Reports")}
              // style={{
              //   backgroundColor: "#f57c00",
              //   height: 150,
              //   borderRadius: 7,
              //   paddingVertical: 10,
              //   flex: 1,
              // }}
            >
              <Image
                source={require("../assets/reports.png")}
                style={{ height: hp(18), width: hp(18) }}
              />
              <Text
                style={{ textAlign: "center", fontSize: 18, color: "black" }}
                className="tracking-widest text-gray-100"
              >
                REPORTS
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-slate-50 shadow-md shadow-gray-500/50 rounded-lg">
            <TouchableOpacity
            // style={{
            //   backgroundColor: "#f57c00",
            //   height: 150,
            //   flex: 1,
            //   borderRadius: 7,
            //   paddingVertical: 10,
            // }}
            >
              <Image
                source={require("../assets/medicines.png")}
                style={{ height: hp(18), width: hp(18) }}
              />
              <Text
                style={{ textAlign: "center", fontSize: 18, color: "black" }}
                className="tracking-widest text-gray-100"
              >
                MEDICINES
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View className="bg-slate-50 shadow-md shadow-gray-500/50 rounded-lg">
            <TouchableOpacity
            // style={{
            //   backgroundColor: "#f57c00",
            //   borderRadius: 7,
            //   paddingVertical: 10,
            //   flex: 1,
            //   height: 150,
            // }}
            >
              <Image
                source={require("../assets/treatment.png")}
                style={{ height: hp(18), width: hp(18) }}
              />
              <Text
                style={{ textAlign: "center", fontSize: 18, color: "black" }}
                className="tracking-widest text-gray-100"
              >
                TREATMENTS
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-slate-50 shadow-md shadow-gray-500/50 rounded-lg">
            <TouchableOpacity
            // style={{
            //   backgroundColor: "#f57c00",
            //   borderRadius: 7,
            //   paddingVertical: 10,
            //   flex: 1,
            //   height: 150,
            // }}
            >
              <Image
                source={require("../assets/prescription.png")}
                style={{ height: hp(18), width: hp(18) }}
              />
              <Text
                style={{ textAlign: "center", fontSize: 18, color: "black" }}
                className="tracking-widest text-gray-100"
              >
                PRESCRIPTIONS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginBottom: 20,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View className="bg-slate-50 shadow-md shadow-gray-500/50 rounded-lg">
            <TouchableOpacity
            // style={{
            //   backgroundColor: "#f57c00",
            //   borderRadius: 7,
            //   paddingVertical: 10,
            //   flex: 1,
            //   height: 150,
            // }}
            >
              <Image
                source={require("../assets/appointment.png")}
                style={{ height: hp(18), width: hp(18) }}
              />
              <Text
                style={{ textAlign: "center", fontSize: 18, color: "black" }}
                className="tracking-widest text-gray-100"
              >
                APPOINTMENTS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.chatButton}
        >
          <Entypo name="chat" size={24} color={colors.lightGray} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
});
