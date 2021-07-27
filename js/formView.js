const formView = (function () {
  const DOMstrings = {
    button: '[type="submit"]',
    inputName: '[name="name"]',
    inputPhone: '[name="phone"]',
    inputEmail: '[name="email"]',
    selectOption: "#exampleFormControlSelect1",
  };

  // Получил текстовое содержимое из выбранного селекта
  function optionValue() {
    let selind = document.querySelector("#exampleFormControlSelect1");
    let text = selind.options[selind.selectedIndex].text;
    return text;
  }

  return {
    // Получаем значения из формы
    getInput: function () {
      return {
        name: document.querySelector(DOMstrings.inputName).value,
        phone: document.querySelector(DOMstrings.inputPhone).value,
        email: document.querySelector(DOMstrings.inputEmail).value,
        optionValue: document.querySelector(DOMstrings.selectOption).value,
      };
    },

    // Отчищаем поля формы после воода
    clearInput: function () {
      return {
        name: (document.querySelector(DOMstrings.inputName).value = ""),
        phone: (document.querySelector(DOMstrings.inputPhone).value = ""),
        email: (document.querySelector(DOMstrings.inputEmail).value = ""),
        optionValue: document.querySelector(DOMstrings.selectOption).value,
      };
    },

    getDomStrings: function () {
      return DOMstrings;
    },

    optionValue: optionValue,
  };
})();
