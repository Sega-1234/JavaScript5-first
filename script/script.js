
let object = {}

for (let i = 1; i <= 10; i++) {
    object.users = i;
    object.name = prompt("Введите ваше имя");
    object.age = +prompt("Введите ваш возраст");
    console.log(`Пользователь ${object.users}`);
    console.log(`Имя пользователя: ${object.name}`);
    console.log(`Возраст пользователя: ${object.age}`);
}