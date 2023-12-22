import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMsXkBdL2qRy0aPrelCzhcVoqDexI_mLw",
  authDomain: "task-mangement-f75c9.firebaseapp.com",
  projectId: "task-mangement-f75c9",
  storageBucket: "task-mangement-f75c9.appspot.com",
  messagingSenderId: "442473814773",
  appId: "1:442473814773:web:538fdbf7858329a71f83bc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
