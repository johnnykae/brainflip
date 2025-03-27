// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmFZ--WCNB9iFKOP88wBJLeuJzncWikJc",
  authDomain: "brainflash-85850.firebaseapp.com",
  projectId: "brainflash-85850",
  storageBucket: "brainflash-85850.firebasestorage.app",
  messagingSenderId: "1080997631692",
  appId: "1:1080997631692:web:de7ae6a475050583071469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

export let email = document.getElementById("email");
export let password = document.getElementById("pswd");
export {createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail, auth};

const googleBtn = document.getElementById('google');
googleBtn.addEventListener('click', (e)=>{
  e.preventDefault();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    
    location.href='index.html';
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
})