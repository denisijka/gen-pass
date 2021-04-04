let alertBox = document.querySelector('.alertBox');

// Pass generation
function getPassword() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    let passwordLenght = 25;
    let password = '';
    for (let i = 0; i < passwordLenght; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password;
    alertBox.innerHTML = 'New Password copied: <br>' + password;/* что бы на страницу выводился фиолетовый фон с генерированым пасс когда нажимаете на иконку скопировать */
}

// copy Pass
function copyPassword() {
    let copyPassText = document.getElementById('password');
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999);
    document.execCommand('copy');
    alertBox.classList.toggle('active');/* выводит на страницу ваш скопированый пасс в фиолетовом фоне */
    setTimeout(function () {
        alertBox.classList.toggle('active');
    }, 2000); /* фон с скопированым пасспортом через 2 секунды исчезает */
}

console.log(typeof (String(null)));
console.log(typeof (String(4)));
console.log(typeof (null));
console.log(typeof (4));
console.log(typeof (4 + ''));

const num = 5;
console.log("https://en.wikipedia.org/wiki/English_alphabet" + num);

