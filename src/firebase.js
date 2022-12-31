import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAnTM2AFKDVqyxsJ1nDa2HiXIoaCSWE3EY",
  authDomain: "razex-chat.firebaseapp.com",
  projectId: "razex-chat",
  storageBucket: "razex-chat.appspot.com",
  messagingSenderId: "595564120512",
  appId: "1:595564120512:web:4558e4a3f5c05f62386025"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);
