const view = (function () {
  const DOMstrings = {
    name: "#changeName",
    email: "#changeEmail",
    phone: "#changePhone",
    productName: "#product_name",
    status: "#request_status",
    btnSave: "#saveArhive",
  };

  function getSelText() {
    let selind = document.querySelector(DOMstrings.productName);
    let text = selind.options[selind.selectedIndex].text;
    return text;
  }

  function getSelVal() {
    let selind = document.querySelector(DOMstrings.productName);
    let value = selind.options[selind.selectedIndex].value;
    return value;
  }

  function noChange(user) {
    document.querySelector("#changeId").innerText = user.id;
    document.querySelector("#changeDate").innerText = user.date;
  }

  return {
    inputContents: function (user) {
      return {
        product: (document.querySelector(DOMstrings.productName).value =
          user.productValue),
        name: (document.querySelector(DOMstrings.name).value = user.name),
        email: (document.querySelector(DOMstrings.email).value = user.email),
        phone: (document.querySelector(DOMstrings.phone).value = user.phone),
      };
    },

    changeValues: function (user, txt, val) {
      return {
        id: user.id,
        productText: (document.querySelector(DOMstrings.productName).txt = txt),
        productValue: (document.querySelector(DOMstrings.productName).val =
          val),
        name: document.querySelector(DOMstrings.name).value,
        email: document.querySelector(DOMstrings.email).value,
        phone: document.querySelector(DOMstrings.phone).value,
        status: document.querySelector(DOMstrings.status).value,
      };
    },

    getDomStrings: function () {
      return DOMstrings;
    },
    noChange: noChange,
    getSelText: getSelText,
    getSelVal: getSelVal,
  };
})();
