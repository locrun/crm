const editController = (function (model, view) {
  let user = JSON.parse(localStorage.getItem("requestСhange"));
  const DOM = view.getDomStrings();
  view.noChange(user);
  view.inputContents(user);

  function saveChangesToTheLocalstorage(e) {
    // Получить значения из Select и отобразить на странице редактирования
    let txt = view.getSelText();
    let val = view.getSelVal();

    let status = document.querySelector("#request_status");
    console.log(status.value);

    // Создаем новый объект в Local Storage с измененными значениями
    let changedValues = view.changeValues(user, txt, val);
    localStorage.setItem("saveChanges", JSON.stringify(changedValues));

    // Получаем массив всех заявок для новых данных
    let allOrders = JSON.parse(localStorage.getItem("allOrders"));

    // Отображаем результат измениний на страницы всех заявок
    for (let i = 0; i < allOrders.length; i++) {
      if (allOrders[i].id === changedValues.id) {
        allOrders[i].productName = changedValues.productText;
        allOrders[i].productValue = changedValues.productValue;
        allOrders[i].name = changedValues.name;
        allOrders[i].phone = changedValues.phone;
        allOrders[i].email = changedValues.email;
        allOrders[i].status = changedValues.status;
      }
    }
    // Добваляем измененные значения в массив со всеми заявками
    // и сохраняем в local storage в localStorage
    localStorage.setItem("allOrders", JSON.stringify(allOrders));
  }

  document
    .querySelector(DOM.btnSave)
    .addEventListener("click", saveChangesToTheLocalstorage);
})(model, view);
