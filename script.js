window.addEventListener('load', () => {
    const image = document.getElementById('image');
    const login = document.getElementById('login');
    const shortlogoimage = document.getElementById('shortlogoimage');

    setTimeout(() => {
      shortlogoimage.classList.add('shortlogoimageGrow');
    }, 100); 
    setTimeout(() => {
      image.classList.add('animateImageHeight');
    }, 200); 
    setTimeout(() => {
      image.classList.add('animateImageWidth');
    }, 400); 
    setTimeout(() => {
      login.classList.remove('hidden');
      shortlogoimage.classList.add('animateshortlogoimage');
      image.classList.add('animateImageWidth50');
    }, 1500); 
    setTimeout(() => {
      shortlogoimage.classList.add('hidden');
    }, 2000); 
  });


  function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPasswordText = document.querySelector('.show-password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        showPasswordText.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        showPasswordText.textContent = 'Show';
    }
}

function handleSubmit() {
  event.preventDefault();
  document.querySelector('.login-btn-text').innerText = "";
  document.querySelector('.loader').style.display = 'inline-block';

  setTimeout(() => {
    window.location.reload()
  }, 700);
}