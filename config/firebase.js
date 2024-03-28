import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: "AIzaSyD_C4t1NCUjDPo9FX3JTngOPet69bsnoJI",
  authDomain: "chatapp-a28e4.firebaseapp.com",
  projectId: "chatapp-a28e4",
  storageBucket: "chatapp-a28e4.appspot.com",
  messagingSenderId: "107010551646",
  appId: "1:107010551646:web:4ddaa2697f39dfe2de69cf",
  databaseURL: Constants.expoConfig.extra.databaseURL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
//   function: getAuth(),
// });
export const auth = getAuth();
export const database = getFirestore();
