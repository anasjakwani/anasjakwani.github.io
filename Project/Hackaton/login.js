function signUpPage() {
    window.location="signup.html"
}

function login() {
    let loginEmail = document.getElementById("loginEmail");
    let loginPass = document.getElementById("loginpassword")
    firebase.auth().signInWithEmailAndPassword(loginEmail.value, loginPass.value)
    .then((userCredential) => {
      let user = userCredential.user;
      window.location ="dashboard.html"
  })
  .catch((error) => {
    let errorCode = error.code;
      alert(errorCode);
  });
}