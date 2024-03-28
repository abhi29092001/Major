// export default WelcomeScreen;

// import React, { useState, useEffect } from "react";
// import { View, Text, Image, Animated } from "react-native";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";

// const WelcomeScreen = ({ navigation }) => {
//   const [logoOpacity] = useState(new Animated.Value(0));
//   const [textOpacity] = useState(new Animated.Value(0));

//   useEffect(() => {
//     // Logo blinking animation
//     const logoBlinkingAnimation = Animated.sequence([
//       Animated.timing(logoOpacity, {
//         toValue: 1,
//         duration: 200,
//         useNativeDriver: true,
//       }),
//       Animated.timing(logoOpacity, {
//         toValue: 0,
//         duration: 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(logoOpacity, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: true,
//       }),
//     ]);

//     // Text fade-in animation
//     const textFadeInAnimation = Animated.timing(textOpacity, {
//       toValue: 1,
//       duration: 50, // Adjust the duration as needed
//       useNativeDriver: true,
//     });

//     // Start logo blinking animation
//     Animated.loop(logoBlinkingAnimation, { iterations: 1 }).start(() => {
//       // Start text fade-in animation after logo blinking
//       Animated.timing(textOpacity, {
//         toValue: 1.5,
//         duration: 2000, // Adjust the duration as needed
//         useNativeDriver: true,
//       }).start();
//     });
//   }, []);

//   useEffect(() => {
//     setTimeout(() => {
//       navigation.navigate("Choose");
//     }, 2500);
//   }, []);

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "row",
//         gap: "-70px",
//       }}
//     >
//       <Animated.Image
//         source={require("../assets/logo.png")}
//         style={{
//           height: 230,
//           width: 230,
//           opacity: logoOpacity,
//         }}
//         className="-ml-20"
//       />
//       <Animated.View
//         style={{
//           opacity: textOpacity,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 28, // Adjust the font size as needed
//             fontWeight: "bold",
//             color: "black",
//             // textAlign: "center",
//           }}
//         >
//           MEDTRACK
//         </Text>
//         <Text
//           style={{
//             fontSize: 16, // Adjust the font size as needed
//             color: "black",
//             // textAlign: "center",
//           }}
//           className="font-extralight tracking-widest"
//         >
//           NAVIGATOR
//         </Text>
//       </Animated.View>
//     </View>
//   );
// };

// export default WelcomeScreen;

import React, { useState, useEffect } from "react";
import { View, Text, Image, Animated } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WelcomeScreen = ({ navigation }) => {
  const [logoAnimation] = useState(new Animated.Value(-100)); // Initial position of logo outside the left of the screen
  const [textAnimation] = useState(new Animated.Value(100)); // Initial position of text outside the right of the screen
  const [logoOpacity] = useState(new Animated.Value(0));
  const [textOpacity] = useState(new Animated.Value(0));

  useEffect(() => {
    // Logo animation
    Animated.parallel([
      Animated.timing(logoAnimation, {
        toValue: 0, // Final position of logo
        duration: 1000, // Adjust duration as needed
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000, // Adjust duration as needed
        useNativeDriver: true,
      }),
    ]).start();

    // Text animation
    Animated.parallel([
      Animated.timing(textAnimation, {
        toValue: 0, // Final position of text
        duration: 1000, // Adjust duration as needed
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 1000, // Adjust duration as needed
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Choose");
    }, 2500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: "-55px",
      }}
    >
      <Animated.Image
        source={require("../assets/logo.png")}
        style={{
          height: wp(20),
          width: hp(20),
          opacity: logoOpacity,
          transform: [{ translateX: logoAnimation }],
        }}
        className="-ml-20"
      />
      <Animated.View
        style={{
          opacity: textOpacity,
          transform: [{ translateX: textAnimation }],
        }}
      >
        <Text
          style={{
            fontSize: hp(3),
            fontWeight: "bold",
            color: "#003566",
            textAlign: "center",
          }}
        >
          MEDTRACK
        </Text>
        <Text style={{ fontSize: hp(1.5) }} className="tracking-widest">
          NAVIGATOR
        </Text>
      </Animated.View>
    </View>
  );
};

export default WelcomeScreen;
