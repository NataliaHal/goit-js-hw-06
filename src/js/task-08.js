// Знаходимо форму
const form = document.querySelector('.login-form');

// Додаємо обробник події submit на форму
form.addEventListener('submit', e => {
// Зупиняємо стандартну поведінку форми (перезавантаження сторінки)
e.preventDefault();

// Знаходимо елементи форми
const emailInput = form.elements.email;
const passwordInput = form.elements.password;

// Перевіряємо, чи заповнені всі поля
if (emailInput.value === '' || passwordInput.value === '') {
alert('Please fill in all fields');
return; // Завершуємо функцію
}

// Створюємо об'єкт з даними з форми
const formData = {
email: emailInput.value,
password: passwordInput.value
};

// Виводимо об'єкт з даними в консоль
console.log(formData);

// Очищаємо значення полів форми
form.reset();
});