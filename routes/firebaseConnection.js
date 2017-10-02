var firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAltmFY-jMf6649kpeje6vT0up183GblI4",
  authDomain: "issue-tracker-782b7.firebaseapp.com",
  databaseURL: "https://issue-tracker-782b7.firebaseio.com",
  projectId: "issue-tracker-782b7",
  storageBucket: "issue-tracker-782b7.appspot.com",
  messagingSenderId: "612717770220"
};
firebase.initializeApp(config);

module.exports = {
  getConnection: function () {
    return firebase;
  }
};
