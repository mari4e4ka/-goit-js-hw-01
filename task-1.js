// Завдання 1
// Оголоси дві змінні, які зберігають назву та ціну товару: name і price
// Присвойте змінним наступні характеристики товару (відразу при оголошенні)
// назва:
// ціна: 1000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар,
// вийде: 'Обрано «Генератор захисного поля», ціна за штуку 1000 кредитів'.
// Присвой товару нову ціну - 2000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар,
// вийде: 'Обрано «Генератор захисного поля», ціна за штуку 2000 кредитів'.

const name = "Генератор захисного поля";
const price = 2000;

console.log("Завдання 1");
console.log(`Обрано «${name}», ціна за штуку ${price} кредитів`);

console.log('');














// const min = 1;
// const max = 7;

// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//     total += i;
// }

// console.log(total);

// const min = 0;
// const max = 5;

// let total = 0;

// if (min % 2 === 0) {
//   for (let i = min; i <= max; i += 2) {
//     console.log(i);
//     total += i;
//   }
// } else {
//   for (let i = min + 1; i <= max; i += 2) {
//     console.log(i);
//     total += i;
//   }
// }

// console.log(`Загальна сума парних чисел: ${total}`);

// console.log(`Загальна сума : ${total}`);

// const employees = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(Math.random() * (5000 - 500) + 500);
//   console.log(`Зарплата ${i} працівника = `, salary)
//   totalSalary += salary;
// }

// console.log(totalSalary);

// for (let i = 1; i <= 100; i += 10) {
//     console.log('Номер вашого бронювання: ', i);
// }

// console.log('gwegwe')

// let option = 3;
// let message;

// switch (option) {
//   case 1: message = 'Ви можете забрати товар у нашому офісі у робочі дні з 9 до 18';
//     break;
//   case 2: message = 'Курєр доставить ваш товар завтра з 12 до 18';
//     break;
//   case 3: message = 'Ваш товарбуде відправлено сьогодні';
//     break;

//   default: message = 'З вами звяжеться менеджер';
//     break;
// }

// console.log(message);

// const star = 4;

// let prise;

// switch (star) {
//   case 1:
//     prise = 20;
//     console.log('Вартість доби проживання: ', prise, 'грн');
//     break;
//   case 2:
//     prise = 30;
//     console.log('Вартість доби проживання: ', prise, 'грн');
//     break;
//   case 3:
//     prise = 50;
//     console.log('Вартість доби проживання: ', prise, 'грн');
//     break;
//   case 4:
//     prise = 80;
//     console.log('Вартість доби проживання: ', prise, 'грн');
//     break;
//   case 5:
//     prise = 120;
//     console.log('Вартість доби проживання: ', prise, 'грн');
//     break;

//   default:
//     console.log("Таких готелів немає");
// }

// if (star === 1) {
//   prise = 20;
// } else if (star === 2) {
//   prise = 30;
// } else if (star === 3) {
//   prise = 50;
// } else if (star === 4) {
//   prise = 80;
// } else if (star === 5) {
//   prise = 120;
// } else {
//   prise = "Таких готелів немає";
// }

// console.log('Вартість доби проживання: ', prise, 'грн');

// const x1 = 10;

// const x2 = 30;

// const number = 35;

// const res = number > x1 && number < x2;

// // if(res === true) {
// // console.log(`Число ${number} лежить в проміжку від ${x1} до ${x2}.`);
// // } else {
// //     console.log(`Число ${number} не лежить в проміжку від ${x1} до ${x2}.`);
// // }

// const message = res === true ? `Число ${number} лежить в проміжку від ${x1} до ${x2}.` : `Число ${number} не лежить в проміжку від ${x1} до ${x2}.`;

// console.log(message);

// const age = "55";

// let totalPrice = "200.78";
// totalPrice = "200.78";

// const userName = "Mary";

// const message = "Вітаємо!";

// const isOpen = true;

// const shouldConfirm = false;

// console.log('Імя:', userName);
// console.log('Вік:', age);
// console.log(message);
// console.log('Реєстрація:', isOpen);
// console.log('Підтвердження:', shouldConfirm);
// console.log('Вартість проживання в готелі:', totalPrice,'грн');

// const type = typeof totalPrice;

// console.log(type);

// // alert('Введіть своє імя');

// // const shouldRenew = confirm('Чи хочете продовжити підписку?');

// // let quantity = prompt ('Вкажіть кількість днів перебування у готелі');
// // quantity = Number(quantity);
// // console.log('Кількість днів:', quantity );
// // console.log(typeof quantity);

// let elementWidth = '250.78998766';

// // elementWidth = Number.parseInt(elementWidth);

// // elementWidth = elementWidth.toFixed(2);

// console.log(elementWidth);
// console.log(typeof elementWidth);

// console.log(Number(message));

// console.log(Math);
// const resulte = Math.pow(2,5);
// console.log(resulte);

// // const base = 2;
// // const power = 3;
// // const result = base / power;
// // console.log(result.toFixed(2));

// // const base = 2;
// // const power = 3;
// // const result = Math.pow(base,power);
// // console.log(result);
// console.log(2 ** 5);

// // console.log(parseInt(Math.random() * (50 - 1) + 1));

// const max = 50;
// const min = 1;
// const res = Math.round(Math.random() * (max - min) + min);
// console.log(res);

// const colors = ['red', 'teal', 'green'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.rundom() * (max - min) + min);

// // const color = color[index];
// // console.log(color);
// // document.body.style.backgroundColor = color;

// console.log(index);
