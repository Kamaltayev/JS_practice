/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,

  start: function () {
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько раз вы полировали шляпу");
    }
  },

  rememberMyFilms: function () {
    let i = 0;
    while (i < 2) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "");
      i++;

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("everything is ok!");
      } else {
        console.log("error");
        i--;
      }
    }
  },

  detectedFilmLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("Вы классический трипл К");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },

  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false;
    }
  },
  showMyDB: function () {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      //   if (genre == "" || genre == null) {
      //     console.log("Вы ввели некоректные данные");
      //     i--;
      //   } else {
      //     personalMovieDB.genres[i - 1] = genre;
      //   }
      let genres = prompt(
        "Введите ваши любисые фильмы через запятую"
      ).toLowerCase();

      if (genres === "" || genres == null) {
        console.log("Похоже, вы ввели некоректные данные");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`любимый жанр ${i + 1} - это ${item} `);
    });
  },
};

// console.log(personalMovieDB);

// function getCoupeNumber(num) {
//   if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
//     return "Ошибка. Проверьте правильность введенного номера места";
//   } else if (num == 0 || num > 36) {
//     return "Таких мест в вагоне не существует";
//   }

//   return Math.ceil(num / 4);
// }

// console.log(getCoupeNumber(5));

// function calculateVolumeAndArea(length) {
//   if (typeof length !== "number" || length < 0 || !Number.isInteger(length)) {
//     return "При вычислении произошла ошибка";
//   }

//   let volume = 0;
//   let surfaceArea = 0;

//   volume = length * length * length;
//   surfaceArea = 6 * length * length;

//   return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
// }

// function getTimeFromMinutes(time) {
//   if (typeof time != "number" || time < 0 || !Number.isInteger(time)) {
//     return "Ошибка, проверьте данные";
//   }
//   let hours = Math.floor(time / 60);
//   const minute = time % 60;
//   if (hours == 0 || hours >= 5) {
//     return `Это ${hours} часов и ${minute} минут`;
//   } else if (hours == 1) {
//     return `Это ${hours} час и ${minute} минут`;
//   } else {
//     return `Это ${hours} часа и ${minute} минут`;
//   }
// }

// console.log(getTimeFromMinutes(70));
