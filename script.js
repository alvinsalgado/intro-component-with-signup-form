const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = form['firstname'].value;
  const lastName = form['lastname'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (firstName === '') {
    addErrorTO('firstname', 'First Name cannot be empty');
  } else {
    removeErrorFrom('firstname');
  }
  if (lastName === '') {
    addErrorTO('lastname', 'Last Name cannont be empty');
  } else {
    removeErrorFrom('lastname');
  }
  if (email === '') {
    addErrorTO('email', 'Email cannot be empty');
  } else if (!isValid(email)) {
    addErrorTO('email', 'Looks like this is not an email');
  } else {
    removeErrorFrom('email');
  }
  if (password === '') {
    addErrorTO('password', 'Password cannot be empty');
  } else {
    removeErrorFrom('password');
  }
});

function addErrorTO(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add('error');

  const small = form[field].parentNode.querySelector('small');
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove('error');
}

function isValid(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
