const model = (function () {
  let requests = [];
  if (localStorage.getItem("allOrders")) {
    requests = JSON.parse(localStorage.getItem("allOrders"));
  } else {
    [];
  }

  function Person(id, date, name, phone, email, productName, productValue) {
    this.id = id;
    this.date = date;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.productName = productName;
    this.productValue = productValue;
  }

  function getValuesPerson(name, phone, email, productName, productValue) {
    let id = getId(requests);
    let date = new Date().toLocaleDateString();
    let data = new Person(
      id,
      date,
      name,
      phone,
      email,
      productName,
      productValue
    );

    requests.push(data);
  }

  // сохранить данные в Local storage
  function addToLocalStorage() {
    localStorage.setItem("allOrders", JSON.stringify(requests));
  }

  //получить id для новой заявки
  function getId(dataArray) {
    let id;
    if (dataArray.length) {
      id = dataArray[dataArray.length - 1].id + 1;
    } else {
      id = dataArray.length + 1;
    }
    return id;
  }

  return {
    requests: requests,
    addToLocalStorage: addToLocalStorage,
    getValuesPerson: getValuesPerson,
  };
})();
