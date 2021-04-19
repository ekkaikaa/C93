
 var firebaseConfig = {
      apiKey: "AIzaSyA5nfrEsYRmCvNx156ZQ28bY7MBa0NYj3k",
      authDomain: "kwitter-18a15.firebaseapp.com",
      databaseURL: "https://kwitter-18a15-default-rtdb.firebaseio.com",
      projectId: "kwitter-18a15",
      storageBucket: "kwitter-18a15.appspot.com",
      messagingSenderId: "218704525863",
      appId: "1:218704525863:web:f2bfa390a9aa4064d6ec02"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      localStorage.removeItem("user_name");
      window.location = "index.html";
}