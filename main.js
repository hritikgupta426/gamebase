var firebaseConfig = {
    apiKey: "AIzaSyALRB7KWJk7-fmrT65kS2ke7W4QRdrSuus",
    authDomain: "gamebase-8fca8.firebaseapp.com",
    projectId: "gamebase-8fca8",
    storageBucket: "gamebase-8fca8.appspot.com",
    messagingSenderId: "484415165298",
    appId: "1:484415165298:web:12466ccd67f0b36f2d03eb",
    measurementId: "G-4GX9T25MYW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
    {
      var email=$("#email").val();
      var password=$("#password").val();
      if(email!="" && password!="")
      {
        var result=firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error)
{
  var errorCode= error.code;
  var errorMessage= error.message;

   console.log(errorCode);
   console.log(errorMessage);

   window.alert("Message:" errorMessage);
});
}
else
{
  window.alert("Please fill all the required details");
}
      
       $("#btn-signup").click(function()
    {
      var email=$("#email").val();
      var password=$("#password").val();
      if(email!="" && password!="")
      {
        var result=firebase.auth().signInWithEmailAndPassword(email,password);

        result.catch(function(error)
{
  var errorCode= error.code;
  var errorMessage= error.message;

   console.log(errorCode);
   console.log(errorMessage);

   window.alert("Message:" errorMessage);
});
}
else
{
  window.alert("Please fill all the required details");
}

    }
  );
