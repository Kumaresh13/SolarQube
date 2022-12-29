const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBIFE8wNSH98Z-hzSHRyN1mgkVvuCUR0oM",
  authDomain: "solarqube-aa8e2.firebaseapp.com",
  projectId: "solarqube-aa8e2",
  storageBucket: "solarqube-aa8e2.appspot.com",
  messagingSenderId: "775710069538",
  appId: "1:775710069538:web:fa646d654b7e79f3834b7b"
};

  firebase.initializeApp(firebaseConfig);

  const db1 = firebase.firestore();
  const db2 = firebase.firestore();
  const savingsReport = db1.collection("Reports");
  const User = db2.collection("Users");
  
  module.exports = User;
  module.exports = savingsReport;