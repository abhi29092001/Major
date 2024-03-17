import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.key,
  authDomain: process.env.domain,
  projectId: process.env.project,
  storageBucket: process.env.bucket,
  messagingSenderId: process.env.sender,
  appId: process.env.app,
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
