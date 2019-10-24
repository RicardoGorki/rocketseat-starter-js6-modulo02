adicionarQuadrado = function() {
  let containerElement = document.querySelector("div#containerElement");
  let listaElement = document.createElement("ul");
  let itemElement = document.createElement("li");
  itemElement.setAttribute("id", "quadrado");
  containerElement.appendChild(listaElement);
  listaElement.appendChild(itemElement);

  itemElement.onmouseover = function() {
    itemElement.style.backgroundColor = getRandomColor();
  };

  console.log("Quadrado Adicionado!");
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var newColor = getRandomColor(); // #E943F0
