var user=firebase.auth().currentUser;

var button=document.querySelector("#btn-login");
button.addEventListener('click',signIn);

function signIn(){
var userEmail=document.getElementById("email");
var userPass=document.getElementById("password");
firebase.auth().signInWithEmailAndPassword(userEmail.value, userPass.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
    window.location.href="C:/Users/Lenovo/Desktop/gamebase/gamebase.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error Message"+ errorMessage)
  });
};

var button1=document.querySelector("#btn-signup");
button1.addEventListener('click',signUp);

function signUp(){
  var email1=document.getElementById("email1");
  var pass=document.getElementById("pass");
  firebase.auth().createUserWithEmailAndPassword(email1.value, pass.value)
  .then((userCredential) => {
    // Signed in
  window.alert("user registration successfull")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
    alert("Error Message"+ errorMessage)
  });
};
