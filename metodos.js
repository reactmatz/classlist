// Seleciona o elemento com a classe "box"
const box = document.querySelector('.box');

// Adiciona a classe "highlight" ao elemento
box.classList.add('highlight');

// Remove a classe "hidden" do elemento
box.classList.remove('hidden');

// Alterna a classe "hidden" do elemento
box.classList.toggle('hidden');

// Verifica se o elemento possui a classe "hidden"
if (box.classList.contains('hidden')) {
  console.log('O elemento possui a classe "hidden"');
} else {
  console.log('O elemento não possui a classe "hidden"');
}
