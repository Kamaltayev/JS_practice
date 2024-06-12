/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// function fifthTask() {
//   const arrayOfNumbers = [];

//   for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
//   }

//   console.log(arrayOfNumbers);
//   return arrayOfNumbers;
// }

// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   // Пишем решение вот тут
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }

//   // Не трогаем
//   return result;
// }

const lines = 5;
let result = "";

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
    result += " ";
  }
  for (let j = 0; j < i * 2 + 1; j++) {
    result += "*";
  }
  result += "\n";
}

console.log(result);
