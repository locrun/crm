const view = (function () {
  // Отобразить разметку с полученными даннными из формы
  function displayMarkupAllUserData(
    id,
    date,
    option,
    name,
    email,
    phone,
    productValue
  ) {
    const body = document.querySelector("#body");
    html = `
        <tr id='${id}' product-data="${productValue}">
          <th scope="row">${id}</th>
          <td>${date}</td>
          <td>${option}</td>
          <td>${name}</td>
          <td>${email}</td>
          <td>${phone}</td>
          <td>
            <div class="badge badge-pill badge-danger">Новый</div>
          </td>
          <td>
            <a id="edit-btn" href="03-crm-edit-bid.html">Редактировать</a>
          </td>
        </tr>`;

    body.insertAdjacentHTML("beforeend", html);
  }
  // Сортировать заявки по названиям продуктов
  function filterProductName() {
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
  // Сортировать заявки по статусам
  function filterSatus() {
    const statusItemContainer = document.querySelector("#filter-status");
    const item = statusItemContainer.querySelectorAll("a");
    const row = document.querySelectorAll("[data]");

    statusItemContainer.addEventListener("click", (e) => {
      const target = e.target.getAttribute("data-status");
      row.forEach((item) => {
        if (target === item.getAttribute("data") || target === "all") {
          item.closest("tr").style.display = "";
        } else {
          item.closest("tr").style.display = "none";
        }
      });

      // Вешаем класс на активную кнопку
      item.forEach((item) => {
        item.classList.remove("active_status");
        if (e.target == item) {
          item.classList.add("active_status");
        }
      });
    });
  }

  // Сделать общий подсчет каждого из статусов на странице
  // и отобразить результат  в левой панели
  function getStatCount() {
    const parentItem = document.querySelector(".left-panel__navigation ul");
    const item = document.querySelectorAll("[data-status]");

    let newItem = document.querySelector('[data-status="new"]');
    let newLength = document.querySelectorAll("[data='new']").length;

    let work = document.querySelector('[data-status="in-work"]');
    let workLength = document.querySelectorAll("[data='in-work']").length;

    let completed = document.querySelector('[data-status="completed"]');
    let completedLength =
      document.querySelectorAll('[data="completed"]').length;

    let arhive = document.querySelector('[data-status="arhive"]');
    let arhiveLength = document.querySelectorAll('[data="arhive"]').length;

    newItem.lastElementChild.textContent = newLength;
    work.lastElementChild.textContent = workLength;
    completed.lastElementChild.textContent = completedLength;
    arhive.lastElementChild.textContent = arhiveLength;

    parentItem.addEventListener("click", (e) => {
      item.forEach((item) => {
        if (e.target === item) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  }

  return {
    displayMarkupAllUserData: displayMarkupAllUserData,
    filterProductName: filterProductName,
    filterSatus: filterSatus,
    getStatCount: getStatCount,
  };
})();
