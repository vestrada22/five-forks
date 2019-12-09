import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbR6rRCEMwAjNcUgsg7ZdQjVLspePyA8o",
  authDomain: "five-forks-a724a.firebaseapp.com",
  databaseURL: "https://five-forks-a724a.firebaseio.com",
  projectId: "five-forks-a724a",
  storageBucket: "five-forks-a724a.appspot.com",
  messagingSenderId: "792530690733",
  appId: "1:792530690733:web:b56bad24823e2a2b355c24"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)
