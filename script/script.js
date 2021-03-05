let obj = {}

for (let i = 1; i <= 10; i++) {
    obj.users = i;
    obj.name = prompt("Введите ваше имя");
    obj.age = +prompt("Введите ваш возраст");
    console.log(`Пользователь ${obj.users}`);
    console.log(`Имя пользователя: ${obj.name}`);
    console.log(`Возраст пользователя: ${obj.age}`);
}

console.log(obj);