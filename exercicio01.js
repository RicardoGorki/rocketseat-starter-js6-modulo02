function adicionarQuadrado() {
  let containerElement = document.querySelector("div#containerElement")
  let listaElement = document.createElement("ul")
  let itemElement = document.createElement("li")
  itemElement.setAttribute('id', 'quadrado')
  containerElement.appendChild(listaElement);
  listaElement.appendChild(itemElement);
  

  console.log("Quadrado Adicionado!")
}