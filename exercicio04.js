let nomes = ["Diego", "Gabriel", "Lucas"];

adicionar = function() {
  let containerLista = document.querySelector("div#containerLista");
  let listaElement = document.createElement("ul");
  containerLista.appendChild(listaElement);
  let inputName = document.querySelector("input");
  inputName = inputName.value;

  nomes.push(inputName);

  for (let nome in nomes) {
    let itemElement = document.createElement("li");
    listaElement.appendChild(itemElement);
    itemNome = document.createTextNode(inputName.value);
    itemElement.appendChild(itemNome);
    inputName = ''
  }
};
