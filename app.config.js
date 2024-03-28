export default {
  expo: {
    name: "Chat-App",
    slug: "Chat-App",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyD_C4t1NCUjDPo9FX3JTngOPet69bsnoJI",
      authDomain: "chatapp-a28e4.firebaseapp.com",
      projectId: "chatapp-a28e4",
      storageBucket: "chatapp-a28e4.appspot.com",
      messagingSenderId: "107010551646",
      appId: "1:107010551646:web:4ddaa2697f39dfe2de69cf",
    },
  },
};
