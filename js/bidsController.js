const controller = (function (model, view) {
  // При нажатии на кнопку редактировать, по индексу
  // находим нужного пользователя и сохряняем данные
  function findUserById() {
    const data = JSON.parse(localStorage.getItem("allOrders"));
    const editButton = document.querySelectorAll("#edit-btn");
    editButton.forEach(function (btn, user) {
      btn.addEventListener("click", function (e) {
        localStorage.setItem("requestСhange", JSON.stringify(data[user]));
      });
    });
  }
  document.addEventListener("DOMContentLoaded", findUserById);

  // Сортировать заявки по названиям продуктов
  function sortByProducts() {
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
  document.addEventListener("DOMContentLoaded", sortByProducts);

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
