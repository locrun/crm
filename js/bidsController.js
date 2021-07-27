const controller = (function (model, view) {
  //Ждем пока страница загрузится
  document.addEventListener("DOMContentLoaded", () => {
    const data = JSON.parse(localStorage.getItem("allOrders"));
    const editButton = document.querySelectorAll("#edit-btn");

    // При нажатии на кнопку редактировать, по индексу
    // находим нужного пользователя и сохряняем данные
    function findUserById(data, editButton) {
      editButton.forEach(function (btn, user) {
        btn.addEventListener("click", function (e) {
          localStorage.setItem("requestСhange", JSON.stringify(data[user]));
          //e.preventDefault();
        });
      });
    }
    findUserById(data, editButton);

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
    function sortByName() {
      let tr = document.querySelectorAll("[product-data]");
      let select = document.querySelector("#inputGroupSelect01");
      select.addEventListener("change", () => {
        let value = select.options[select.selectedIndex].value;

        tr.forEach((item) => {
          if (
            value === item.getAttribute("product-data") ||
            select.selectedIndex === 0
          ) {
            item.style.display = "";
          } else {
            item.style.display = "none";
          }
        });
      });
    }
    sortByName();
  });

  //Передаем  данные для разметки
  function setupEventListeners() {
    let data = JSON.parse(localStorage.getItem("allOrders"));
    //Передаем  данные для разметки
    if (data) {
      data.forEach((item) => {
        view.displayMarkup(
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
  }

  return {
    init: function () {
      setupEventListeners();
    },
  };
})(model, view);

controller.init();
