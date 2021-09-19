const firebaseConfig = {
    apiKey: "AIzaSyDG6IrInGi5Zy65q8f7_VYgkgVFtCijSHc",
    authDomain: "hackathon-27cc0.firebaseapp.com",
    projectId: "hackathon-27cc0",
    storageBucket: "hackathon-27cc0.appspot.com",
    messagingSenderId: "251385488774",
    appId: "1:251385488774:web:2daa7c698bc16c86d3b807",
    measurementId: "G-M4ETZVGW3K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

function loginpage() {
    window.location ="login.html"
}


function signUp() {
    let signUpEmail = document.getElementById("signUpEmail");
    let password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(signUpEmail.value, password.value)
        .then((userCredential) => {

            let user = userCredential.user;
            window.location = "login.html"

        })
    .catch((error) => {
        let errorCode = error.code;
        alert(errorCode)
    });
}




