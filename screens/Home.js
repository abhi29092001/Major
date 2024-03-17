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
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Reports")}
            style={{
              backgroundColor: "#f57c00",
              height: 150,
              borderRadius: 7,
              paddingVertical: 10,
              flex: 1,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 22, color: "white" }}>
              Reports
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f57c00",
              height: 150,
              flex: 1,
              borderRadius: 7,
              paddingVertical: 10,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 22, color: "white" }}>
              Medicines
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#f57c00",
              borderRadius: 7,
              paddingVertical: 10,
              flex: 1,
              height: 150,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 22, color: "white" }}>
              Treatment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f57c00",
              borderRadius: 7,
              paddingVertical: 10,
              flex: 1,
              height: 150,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 22, color: "white" }}>
              Prescriptions
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#f57c00",
              borderRadius: 7,
              paddingVertical: 10,
              flex: 1,
              height: 150,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 22, color: "white" }}>
              Appointments
            </Text>
          </TouchableOpacity>
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
