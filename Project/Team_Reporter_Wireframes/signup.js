const firebaseConfig = {
  apiKey: "AIzaSyBqmL4U2KCWd0YvL3oh1egKiZpUGRJauOw",
  authDomain: "team-reporter-wireframes-e706b.firebaseapp.com",
  databaseURL: "https://team-reporter-wireframes-e706b-default-rtdb.firebaseio.com",
  projectId: "team-reporter-wireframes-e706b",
  storageBucket: "team-reporter-wireframes-e706b.appspot.com",
  messagingSenderId: "175395769372",
  appId: "1:175395769372:web:64665677afd49e3477e3d9",
  measurementId: "G-TTSJCLYMR7"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);



//   login//
function login() {
    const email = document.getElementById("loginemail").value;
  const password = document.getElementById("loginpassword").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
      
      window.location = "home.html"
      
  }).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
};

// logout

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}


//signup

function signUp() {
  //let uname = document.getElementById("signupusername");
  const uemail = document.getElementById("signupemail").value;
  const upassword = document.getElementById("signuppassword").value;

  auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
            // Signed in
              var user = userCredential.user;
              window.location="login.html" 
               //saveData(name.value, email.value);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
            // ..
        });
   
};

const auth = firebase.auth();
var database = firebase.database();

auth.onAuthStateChanged((user) => {
    if (user) {
        database.ref('users/' + user.uid).update({
            email: user.email,
            lastLoggedInAt: new Date()
        });
        document.getElementById("user").innerHTML = user.email;
  }
});
    

// new team
const teamName = document.getElementById("teamname").value;
const teamcat = document.getElementById("teamoption").value;
const teamMembers = document.getElementById("member").value;

function newTeam(teamName, teamcat, teamMembers) {
 
  
  database.ref("team/").child(teamData).set({
    teamName,
    teamcat,
    teamMembers
  });
  popUpHide()  
};




// const createElementsForMessage = (childData) => {
//     const teamDiv = document.getElementById("teamdiv");
//     const teamname = document.createElement('teamname');
  
//     teamname.classList.add("teamNameStyle");
//     const messageTextDiv = document.createElement('div');
//     messageTextDiv.classList.add("message-text");
//     const senderDiv = document.createElement('div');
//     senderDiv.classList.add("message-sender");
//     messageTextDiv.innerHTML = childData.message;
//     const userEmail = auth.currentUser.email;
//     if (childData.user === userEmail) {
//         senderDiv.innerHTML = "You";
//         childDiv.classList.add("sender");
//     } else {
//         senderDiv.innerHTML = childData.user;
//         childDiv.classList.add("reciever");
//     }
//     childDiv.appendChild(senderDiv);
//     childDiv.appendChild(messageTextDiv);
//     messagesDiv.appendChild(childDiv);
// };









    
