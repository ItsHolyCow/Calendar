const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-btn');

// Listen for form submission
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the page from reloading

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Save data in local storage
  localStorage.setItem('userEmail', email);
  localStorage.setItem('userPassword', password);

  alert('Login details saved in local storage!');

  window.location.href = 'index.html';

  loginForm.reset();
});
