// let test = (function () {
//   function ExampleItem(name, phone, email, product) {
//     this.name = name;
//     this.phone = phone;
//     this.email = email;
//     this.product = product;
//   }

//   let testData = [
//     new ExampleItem(
//       "Антон Чехов",
//       "8 939 378 90 97",
//       "antonpavlovich@mail.ru",
//       "Курс по PHP"
//     ),
//     new ExampleItem(
//       "Диана Арбенина",
//       "8 999 333 55 22",
//       "arbenina@gmail.com",
//       "Курс по JavaScript"
//     ),
//     new ExampleItem(
//       "Николай Петрович",
//       "+7 495 32 99 32",
//       "nikolay123@gmail.com",
//       "Курс по VUE JS"
//     ),
//     new ExampleItem(
//       "Иван Васильевич",
//       "8 904 565 49 03",
//       "vasilbevichivan@mail.ru",
//       "Курс по WordPress"
//     ),
//     new ExampleItem(
//       "Вячеслав Бердников",
//       "+7 906 560 678 23",
//       "berdnikov^_^@gmail.com",
//       "Курс по верстке"
//     ),
//     new ExampleItem(
//       "Анна Безработная",
//       "999 459 21 23",
//       "anytka^_^minutka@mail.ru",
//       "Курс по PHP"
//     ),

//     new ExampleItem(
//       "Вадим Самойлов",
//       "+12 560 43 678",
//       "starovoitov@info.ru",
//       "Курс по верстке"
//     ),
//   ];

//   function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   function insertInUi() {
//     let random = getRandomInt(testData.length);
//     let randomItem = testData[random];
//     document.querySelector('[name="name"]').value = randomItem.name;
//     document.querySelector('[name="phone"]').value = randomItem.phone;
//     document.querySelector('[name="email"]').value = randomItem.email;
//     document.querySelector("option").value = randomItem.product;
//     let selectElem = document.querySelector("select").options;
//     selectElem[0].innerText = randomItem.product;
//   }
//   insertInUi();
//   document
//     .querySelector('[type="submit"]')
//     .addEventListener("click", insertInUi);
// })();
