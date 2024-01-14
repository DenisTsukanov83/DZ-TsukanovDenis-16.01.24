const form1 = document.getElementById('form1');
const form1El = form1.elements;
const subBtn = form1.querySelector('[type="submit"]');
const form2 = document.getElementById('form2');
const form2log = document.querySelector('.form-2-log');
const form2pass = document.querySelector('.form-2-pass');
const logBtn = form2.querySelector('[type="submit"]');

subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!localStorage.hasOwnProperty('users')) {
        localStorage.setItem('users', JSON.stringify([]))
    }
    let obj = {}
    for(let i = 0; i < form1El.length; i++) {
        
        if(form1El[i].type != 'submit' && form1El[i].type != 'scheckbox') {
            obj[form1El[i].name] = form1El[i].value;
            form1El[i].value = ''
        }
        if(form1El[i].type === 'checkbox') {
            obj[form1El[i].name] = form1El[i].checked;
            form1El[i].checked = '';
        }
    }
    let users = JSON.parse(localStorage.getItem('users'))
    users.push(obj);
    localStorage.setItem('users', JSON.stringify(users))
});

logBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem('users'));
    let success = false;
    for(let i = 0; i < users.length; i++) {
        
        if(form2log.value == users[i].login) {
            success = true;
            if(form2pass.value == users[i].password) {
                alert('Авторизация пройдена')
            } else {
                alert('Логин или пароль неверные!')
            }
        }
    }

    if(!success) {
        alert('Такого пользователя не найдено!')
    }

    form2log.value = '';
    form2pass.value = '';
})


