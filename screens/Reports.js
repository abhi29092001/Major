import { View, Text, Image } from "react-native";
import React from "react";
import { auth } from "../config/firebase";

const Reports = () => {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Reports</Text>
      <View>
        <Image
          source={require("../assets/report.jpg")}
          style={{
            width: "100%",
            height: "90%",
            resizeMode: "contain",
          }}
        />
      </View>
    </View>
  );
};

export default Reports;
