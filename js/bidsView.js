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
  // const DOM = {
  //   topPanel: "#filter-status",
  //   leftPanel: ".left-panel__navigation ul",
  //   navItem: "[data-status]",
  //   badges: "[data]",
  // };

  // function getDomStrings() {
  //   return {
  //     topPanel: document.querySelector(DOM.topPanel),
  //     leftPanel: document.querySelector(DOM.leftPanel),
  //     navItem: document.querySelectorAll(DOM.navItem),
  //     badges: document.querySelectorAll(DOM.badges),
  //   };
  // }

  function filterSatus() {
    const topPanel = document.querySelector("#top_panel");
    const topPanelItem = topPanel.querySelectorAll("a");
    const leftPanel = document.querySelector(".left-panel__navigation ul");
    const leftPanelItem = leftPanel.querySelectorAll("a");
    const badges = document.querySelectorAll("[data]");

    // Прослушиваем событие клик по верхней панели навигации
    topPanel.addEventListener("click", (e) => {
      const target = e.target.dataset.status;
      badges.forEach((badge) => {
        if (target === badge.getAttribute("data") || target === "all") {
          badge.closest("tr").style.display = "";
        } else {
          badge.closest("tr").style.display = "none";
        }
      });
      //Вешаем класс на активную кнопку
      topPanelItem.forEach((item, index) => {
        item.classList.remove("active_status");
        leftPanelItem[index].classList.remove("active");
        if (e.target === item) {
          item.classList.add("active_status");
          leftPanelItem[index].classList.add("active");
        }
      });
    });

    // Прослушиваем событие клик по левой панели навигации
    leftPanel.addEventListener("click", (e) => {
      const target = e.target.dataset.status;

      badges.forEach((item) => {
        if (target === item.getAttribute("data") || target === "all") {
          item.closest("tr").style.display = "";
        } else {
          item.closest("tr").style.display = "none";
        }
      });

      //Вешаем класс на активную кнопку
      leftPanelItem.forEach((item, index) => {
        item.classList.remove("active");
        topPanelItem[index].classList.remove("active_status");
        if (e.target === item || e.target === item.lastChild) {
          item.classList.add("active");
          topPanelItem[index].classList.add("active_status");
        }

        // Проверяем клик на дочерний елемент
        if (e.target === item.lastChild) {
          item.lastChild.parentElement.classList.add("active");
        }
      });
    });
  }

  // Сделать общий подсчет каждого из статусов на странице
  // и отобразить результат  в левой панели
  function getStatCount() {
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
  }

  return {
    displayMarkupAllUserData: displayMarkupAllUserData,
    filterProductName: filterProductName,
    filterSatus: filterSatus,
    getStatCount: getStatCount,
  };
})();
