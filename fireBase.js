var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyAJc9PpySDNFOUA8Odjq9YSvBA4hCiES5k",
  authDomain: "kwitter-practice-a.firebaseapp.com",
  databaseURL: "https://kwitter-practice-a-default-rtdb.firebaseio.com",
  projectId: "kwitter-practice-a",
  storageBucket: "kwitter-practice-a.appspot.com",
  messagingSenderId: "635654695464"
};
if (!hasInit) {
  firebase.initializeApp(config);
  hasInit = true;
}