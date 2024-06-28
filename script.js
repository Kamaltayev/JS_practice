/* Задание на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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
      personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?");
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

  addNewFilm: function () {},
};

console.log(personalMovieDB);

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

// const students = [
//   "Peter",
//   "Andrew",
//   "Ann",
//   "Mark",
//   "Josh",
//   "Sandra",
//   "Cris",
//   "Bernard",
//   "Takesi",
//   "Samandar",
//   "Sam",
// ];

// function sortStudentsByGroups(arr) {
//   arr.sort();

//   const firstTeam = arr.slice(0, 3);
//   const secondTeam = arr.slice(3, 6);
//   const thirdTeam = arr.slice(6, 9);
//   const remainStudents = arr.slice(9);

//   const remainingStudentsStr = `Оставшиеся студенты: ${
//     remainStudents.lenght > 0 ? remainStudents.join(", ") : "-"
//   }`;

//   return [firstTeam, secondTeam, thirdTeam, remainingStudentsStr];
// }

// console.log(sortStudentsByGroups(students));

// function pow(a, b) {
//   let result = 1;
//   for (let i = 0; i < b; i++) {
//     result *= a;
//   }

//   return result;
// }

// function pow(a, b) {
//   debugger;
//   if (b === 1) {
//     return a;
//   } else {
//     return a * pow(a, b - 1);
//     debugger;
//   }
// }

// console.log(pow(2, 2));

// let students = {
//   js: [
//     {
//       name: "John",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],

//   html: {
//     basic: [
//       {
//         name: "Peter",
//         progress: 20,
//       },
//       {
//         name: "Ann",
//         progress: 18,
//       },
//     ],

//     pro: [
//       {
//         name: "Sam",
//         progress: 10,
//       },
//     ],
//   },
// };

// console.log(Object.values(students));

function factorial(num) {
  if (typeof num !== "number" || isNaN(num) || !Number.isInteger(num)) {
    return "Error!";
  } else if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// console.log(factorial(-5));
