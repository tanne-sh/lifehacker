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

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const listUsers = [
  {
    email: 'PiedPiper@gmail.com',
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
  logIn(email, password, handler) {
     const user = this.getUser(email);
     if(user && user.password === password){
       this.authorizedUser(user);
       handler();
     } else{
       alert('Пользователь с такими данными не найден!')
     }  
  },
  logOut() {
    console.log('выход')
  },
  signUp(email, password, handler) {
    if(!this.getUser(email)){
      const user = {email, password, displayName: email};
      listUsers.push(user);
      this.authorizedUser(user)
      handler();
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
  },
  authorizedUser(user){
    this.user = user;
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ', user);
  
  if(user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
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

  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
});

toggleAuthDom();