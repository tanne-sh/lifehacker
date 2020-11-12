// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})


const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-pasword');
const loginSignup = document.querySelector('.login-signup');

const listUsers = [
  {
    email: 'PiedPiper@gmail.comPiedPiper@gmail.com',
    password:'zxc',
    displayName: 'Pied Piper'
  },
  {
    email: 'BertramGilfoyle@gmail.com',
    password:'qwery',
    displayName: 'Bertram Gilfoyle'
  }
];

const setUsers = {
  user: null,
  logIn() {
    console.log('вход')    
  },
  logOut() {
    console.log('выход')
  },
  signUp() {
    console.log('регистрация')    
  }
};

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  setUsers.signUp();
});