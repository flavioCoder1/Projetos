const loginBtn = document.querySelectorAll('.Submit-btn')[0];
const loginText = document.querySelectorAll('input')[0];
const passwordText = document.querySelectorAll('input')[1];
const checkBoxAgree = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.querySelector('textarea');

function alertLogin() {
  if (loginText.value === 'tryber@teste.com' && passwordText.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', alertLogin);

submitBtn.disabled = true;

function agree() {
  if (document.getElementById('agreement').checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

checkBoxAgree.addEventListener('click', agree);

function contador() {
  const textLen = document.querySelector('textarea').textLength;
  const counter = document.querySelector('#counter');
  counter.innerText = 500 - textLen;
}

textArea.addEventListener('keyup', contador);
