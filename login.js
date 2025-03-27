import {signInWithEmailAndPassword,sendPasswordResetEmail, auth} from './init.js';
import {email, password} from './init.js';

  document.querySelector('.show').addEventListener('click', (e) => {
  if (password.type == 'password') {
    password.type = 'text';
    document.querySelector('.show').classList.add('bx-hide');
  }
  else {
    password.type = 'password';
  }
})

const loginForm = document.querySelector('.login');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((user) => {
      location.href ='index.html';
      loginForm.reset();
      
    })
    .catch((err) => {
      alert(err.message);
      if(err.message == 'Firebase: Error (auth/invalid-credential).'){
      document.querySelector('.mail').style.border ='2px solid red';
        document.getElementById('error').style.display ='block';
        document.getElementById('error').innerText = 'Email address already exist!';
        setTimeout(() => {
  document.getElementById('error').style.display = 'none';
}, 3000);
      return false;
    }
    
    })
    
})

// remember me checking 
document.querySelector('.remember').onclick = (e)=>{
  if(e.classList.contains('yes')){
  document.querySelector('input#check').checked = 'true';
  }
  else{
    document.querySelector('input#check').checked = 'false';
  }
}


document.querySelector('.reset').addEventListener('click', (e)=>{
  e.preventDefault();
  if(confirm('Are you sure you want to reset your password?') == true){
  
sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    // ..
    alert('password reset mail sent');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
    if(errorMessage == 'Firebase: Error (auth/missing-email).'){
      document.querySelector('.mail').style.border ='2px solid red';
        document.getElementById('error').style.display ='block';
        document.getElementById('error').innerText = 'Provide email address to get reset email!';
        setTimeout(() => {
  document.getElementById('error').style.display = 'none';
}, 3000);
      return false;
    }
    
  });
  
  }
})