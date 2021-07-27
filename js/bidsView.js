const view = (function () {
  function displayMarkup(id, date, option, name, email, phone, productValue) {
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

  return {
    displayMarkup: displayMarkup,
  };
})();
