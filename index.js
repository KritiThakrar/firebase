
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDAtIawUCEhwyjJURsZGuhQnfANQqk7Ubg",
  authDomain: "demoproject-595b5.firebaseapp.com",
  databaseURL: "https://demoproject-595b5-default-rtdb.firebaseio.com",
  projectId: "demoproject-595b5",
  storageBucket: "demoproject-595b5.appspot.com",
  messagingSenderId: "1004507604045",
  appId: "1:1004507604045:web:44cdec886654b85a19e804",
  measurementId: "G-Z9LWRE42LF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const auth = firebase.auth();
var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://127.0.0.1:5500/index.html',
  // This must be true.
  handleCodeInApp: true,
  // iOS: {
  //   bundleId: 'com.example.ios'
  // },
  // android: {
  //   packageName: 'com.example.android',
  //   installApp: true,
  //   minimumVersion: '12'
  // },
  // dynamicLinkDomain: 'example.page.link'
};


function signUp()
{

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up");
}



function signIn()
{

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
}


function signOut()
{

  auth.signOut();
  alert("Signed Out");

}



auth.onAuthStateChanged(function (user)
{

  if (user)
  {

    var email = user.email;
    alert("Active User " + email);

    //Take user to a different or home page

    //is signed in

  } else
  {

    alert("No Active User");
    //no user is signed in
  }



});
