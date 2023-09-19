const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDOXxVzOmFCukYCxM-OHPXqb8l2WMV8cVw",
    authDomain: "achu-discord-bot.firebaseapp.com",
    databaseURL: "https://achu-discord-bot.firebaseio.com",
    projectId: "achu-discord-bot",
    storageBucket: "achu-discord-bot.appspot.com",
    messagingSenderId: "309276790185",
    appId: "1:309276790185:web:8830611c3c922fea07c8b8",
    measurementId: "G-BTX384R6RF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

module.exports = db;