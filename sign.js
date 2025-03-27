import {createUserWithEmailAndPassword, signInWithEmailAndPassword, auth} from './init.js';
import {email, password} from './init.js';
const signupForm = document.querySelector('.signup');
// create account with brainflash
signupForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user.displayName);
   // sessionStorage.setItem('user',)
    //location.href='./index.html';
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    if(errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
      document.querySelector('.mail').style.border ='2px solid red';
        document.getElementById('error').style.display ='block';
        document.getElementById('error').innerText = 'Email address already exist!';
        setTimeout(() => {
  document.getElementById('error').style.display = 'none';
}, 3000);
      return false;
    }
    
  });
   
})

document.querySelector('.show').addEventListener('click', (e) => {
  if (password.type == 'password') {
    password.type = 'text';
    document.querySelector('.show').classList.add('bx-hide');
  }
  else {
    password.type = 'password';
  }
})
