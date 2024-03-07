import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzt2NCqY5fJ18rguhtEpVcNfE_OmJnMkk",
  authDomain: "webflix-netflix-clone.firebaseapp.com",
  projectId: "webflix-netflix-clone",
  storageBucket: "webflix-netflix-clone.appspot.com",
  messagingSenderId: "34852265904",
  appId: "1:34852265904:web:bfd18ffcee2a3e5cf24075",
  measurementId: "G-2PDP0XRJ85"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);