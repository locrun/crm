const controller = (function (model, view) {
  function setupEventListeners() {
    let DOM = view.getDomStrings();
    document.querySelector(DOM.button).addEventListener("click", addItem);
  }

  function addItem(e) {
    e.preventDefault();
    let productName = view.optionValue();
    let input = view.getInput();

    // Заполняем объект Person данными из формы
    if (input.name === "" || input.email === "" || input.phone === "") {
      alert("Заполните пустые поля.");
    } else {
      model.getValuesPerson(
        input.name,
        input.phone,
        input.email,
        productName,
        input.optionValue
      );
      view.clearInput();
    }

    model.addToLocalStorage();
  }

  return {
    init: function () {
      setupEventListeners();
    },
  };
})(model, formView);
controller.init();
