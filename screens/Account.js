import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { signOut } from "firebase/auth";
import { auth, database } from "../config/firebase";
import { AntDesign } from "@expo/vector-icons";
import colors from "../colors";

const Account = () => {
  const onSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          paddingTop: 20,
          gap: 6,
        }}
      >
        <MaterialIcons
          style={{ width: 88, height: 88 }}
          name="account-circle"
          size={88}
          color="black"
        />
        <Text style={{ fontWeight: "bold", fontSize: 32 }}>User</Text>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#ccc",
          marginTop: 10,
          marginBottom: 20,
        }}
      />

      <View style={{ paddingHorizontal: 15 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            paddingHorizontal: 10,
            paddingVertical: 12,
            marginBottom: 15,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 21 }}>Medical History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            paddingHorizontal: 10,
            paddingVertical: 12,
            marginBottom: 15,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 21 }}>Emergency Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            paddingHorizontal: 10,
            paddingVertical: 12,
            marginBottom: 15,
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 21 }}>
            Preferences(Language Preferences)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#ccc",
            paddingHorizontal: 10,
            paddingVertical: 12,
            marginBottom: 15,
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
            gap: 7,
          }}
          onPress={onSignOut}
        >
          <Text style={{ fontSize: 21 }}>Sign Out</Text>
          <AntDesign name="logout" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
