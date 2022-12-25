'use strict';

if (1 == 5) {
  console.log('Ok!');
} else {
  console.log('Eror');
}


const num = 50;

if (num < 49) {
  console.log('Ошибка');
} else if (num > 100) {
  console.log('Много');
} else {
  console.log('Greating!');
}


// Тернарный оператор 

(num === 50) ? console.log('Greating!') : console.log('Ошибка');






switch (num) {
  case 49:
    console.log('Неверно');
    break;
  case 100:
    console.log('Неверно');
    break;
  case 50:
    console.log('Верно');
    break;    
  default:
    console.log('Не в этот раз');
};