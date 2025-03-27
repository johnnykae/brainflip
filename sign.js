// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

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
let email = document.getElementById("email");
let password = document.getElementById("pswd");
const signupForm = document.querySelector('.signup');
// create account with brainflash
signupForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
  });
})

document.querySelector('.show').addEventListener('click', (e)=>{
  if(password.type == 'password'){
    password.type = 'text';
   document.querySelector('.show').classList.add('bx-hide');
  }
  else{
    password.type = 'password';
  }
})