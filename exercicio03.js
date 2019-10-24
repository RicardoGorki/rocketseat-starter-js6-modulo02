let containerLista = document.querySelector("div#containerLista");
let listaElement = document.createElement("ul");
containerLista.appendChild(listaElement);

let nomes = ["Diego", "Gabriel", "Lucas"];
for (let nome in nomes) {
  let itemElement = document.createElement("li");
  listaElement.appendChild(itemElement);
  itemNome = document.createTextNode(nomes[nome]);
  itemElement.appendChild(itemNome);
  
}
