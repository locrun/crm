const controller = (function (model, view) {
  //Ждем пока весь  HTML загрузится
  document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("allOrders"));
    const editButton = document.querySelectorAll("#edit-btn");

    // При нажатии на кнопку редактировать, по индексу
    // находим нужного пользователя и сохряняем данные
    function findUserId(data, editButton) {
      editButton.forEach(function (btn, user) {
        btn.addEventListener("click", function (e) {
          localStorage.setItem("requestСhange", JSON.stringify(data[user]));
        });
      });
    }
    findUserId(data, editButton);

    // по индексу
    // находим нужного пользователя и добавляем атрибут
    // определяющий статус заявки.
    function detectStatus(data) {
      let tr = document.querySelectorAll("tr[id]");
      let badget = document.querySelectorAll(".badge-pill");
      if (tr.length > 0) {
        tr.forEach((item, index) => {
          badget[index].setAttribute("data", data[index].status);
          const attribute = badget[index].getAttribute("data");

          switch (attribute) {
            case "in-work":
              badget[index].textContent = "В работе";
              badget[index].classList.add("in-work");
              break;
            case "wait-payment":
              badget[index].textContent = "Ждем оплату";
              badget[index].classList.add("wait-payment");
              break;
            case "completed":
              badget[index].textContent = "Завершенный";
              badget[index].classList.add("completed");
              break;
            case "reject":
              badget[index].textContent = "Отказ";
              badget[index].classList.add("reject");
              break;
            case "arhive":
              badget[index].textContent = "В архив";
              badget[index].classList.add("arhive");
              break;

            default:
              break;
          }
        });
      }
    }
    detectStatus(data);

    // Сортировать заявки по названиям продуктов
    view.filterProductName();

    //Сортировать заявки по статусам
    view.filterSatus();

    //Подсчет  колличества  вхождений
    view.getStatCount();
  });

  //Передаем  данные для разметки И отображаем разметку на странице
  //Передаем  данные для разметки
  const data = JSON.parse(localStorage.getItem("allOrders"));
  if (data) {
    data.forEach((item) => {
      view.displayMarkupAllUserData(
        item.id,
        item.date,
        item.productName,
        item.name,
        item.email,
        item.phone,
        item.productValue
      );
    });
  }
})(model, view);
