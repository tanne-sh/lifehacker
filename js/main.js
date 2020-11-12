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
  logIn(email, password) {
       
  },
  logOut() {
    console.log('выход')
  },
  signUp(email, password) {
    if(!this.getUser(email)){
      listUsers.push({email, password, displayName: email})
    } else{
      alert('Пользователь с таким именем уже зарегистрирован!')
    }
  },

   /* Простой способ получить email нового пользователя

    let user= null;
    for(let i = 0; i < listUsers.length; i++) {
      if(listUsers[i].email === email){
        user = listUsers[i];
        break;
      }
    }
    return user
    
    Ниже пишу лучший код, чтоб получить email нового пользователя

    getUser(email) {
  return listUsers.find((item) => {
    return item.email === email
  }) 
  }
  и оптимальная сокращенная запись такая
    */
  getUser(email) {
  return listUsers.find(item => item.email === email) 
  }
};
/*
Можно так записать. Означает тоже самое,что и запись ниже чезез переменные 
const emailValue 
const passwordValue

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  setUsers.logIn(emailInput.value, passwordInput.value);
});
*/

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue);
});