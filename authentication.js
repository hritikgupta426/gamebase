var user=firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display="initial";
    document.getElementById("login_div").style.display="none";

  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display="none";
    document.getElementById("login_div").style.display="initial";

  }
});
var button=document.querySelector("#btn-login");
button.addEventListener('click',signIn);

function signIn(){
var userEmail=document.getElementById("email");
var userPass=document.getElementById("password");
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
.then(()=>{
return firebase.auth().signInWithEmailAndPassword(userEmail.value,userPass.value).then(cred=>{
  window.location="C:/Users/Lenovo/Desktop/gamebase/allgames.html"
})


})

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error:"+errorMessage);
  });
};

var button1=document.querySelector("#btn-signup");
button1.addEventListener('click',signIn);

function signUp(){
  var email1=document.getElementById("e-mail");
  var pass=document.getElementById("pass");
  firebase.auth().createUserWithEmailAndPassword(email1.value,pass.value).then(
    cred=>{
      alert("user registration successfull");
    }
  )
}
})();
