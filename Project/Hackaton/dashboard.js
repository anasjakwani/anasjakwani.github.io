
function logout() {
    firebase.auth().signOut();
    window.location="login.html"
};

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        firestore.collection('users').doc(user.uid).set({
            email: user.email,
            lastLoggedInAt: new Date()
        })
        setData(user);
        document.getElementById("userName").innerHTML = user.email;   
    } else {
    }
});

const setData = (user) => {
    firestore.collection('users').doc(user.uid).get().then((querySnapshot) => {
        const data = querySnapshot.data();
        const lastLoggedInAt = data.lastLoggedInAt;
        const lastLoggedIn = document.getElementById("lasttime");
        lastLoggedIn.innerHTML = lastLoggedInAt.toDate();
    });
};


function newGame() {
    window.location = "newgame.html"
}
