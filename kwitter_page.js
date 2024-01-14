//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC3Ngil3cUGxxoE9S5heWfj6fF4uBBZk5g",
      authDomain: "kwitter-c974a.firebaseapp.com",
      databaseURL: "https://kwitter-c974a-default-rtdb.firebaseio.com",
      projectId: "kwitter-c974a",
      storageBucket: "kwitter-c974a.appspot.com",
      messagingSenderId: "620109607090",
      appId: "1:620109607090:web:76c97fba62e0247d0519ab",
      measurementId: "G-CK35VK8V7H"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
