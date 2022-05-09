
const firebaseConfig = {
      apiKey: "AIzaSyB_MbkFc9_fqsyLlnEglsIe61goGeHOT9c",
      authDomain: "project-77d2a.firebaseapp.com",
      databaseURL: "https://project-77d2a-default-rtdb.firebaseio.com",
      projectId: "project-77d2a",
      storageBucket: "project-77d2a.appspot.com",
      messagingSenderId: "677447970487",
      appId: "1:677447970487:web:7a09eb0505a909ca9c2732",
      measurementId: "G-EBB2RPC8G0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.databace().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
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