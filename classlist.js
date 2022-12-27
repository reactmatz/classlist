// Seleciona o elemento com a classe "container"
const container = document.querySelector('.container');

// Cria um novo elemento div
const newDiv = document.createElement('div');

// Adiciona a classe "new-div" ao novo elemento div
newDiv.classList.add('new-div');

// Cria um novo texto de nodo e o adiciona ao novo elemento div
const newDivText = document.createTextNode('Este é um novo elemento div');
newDiv.appendChild(newDivText);

// Adiciona o novo elemento div ao elemento container
container.appendChild(newDiv);

// Seleciona todos os elementos com a classe "box"
const boxes = document.querySelectorAll('.box');

// Itera sobre cada elemento selecionado e adiciona a classe "highlight"
boxes.forEach((box) => {
  box.classList.add('highlight');
});

// Remove a classe "container" do elemento container
container.classList.remove('container');

// Altera o atributo "src" da primeira imagem da página
const firstImg = document.querySelector('img');
firstImg.setAttribute('src', 'https://example.com/new-image.jpg');
