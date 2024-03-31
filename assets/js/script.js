const input = document.getElementById('entrada');
const btnAdd = document.getElementById('add');
const ul = document.querySelector('.list-group');

function criarElemento() {
  const p = document.createElement('p');
  p.classList.add('list-group-item');
  return p;
}

function criarBtnApagar() {
  const btnApagar = document.createElement('button');
  btnApagar.innerText = 'Apagar';
  btnApagar.classList.add('btn');
  btnApagar.classList.add('btn-danger');
  btnApagar.setAttribute('id', 'apagar');
  return btnApagar;
}

function adicionarBtn(pai) {
  pai.appendChild(criarBtnApagar());
}

function apagarTarefa(e) {
  const target = e.target;
  if (target.getAttribute('id') === 'apagar') {
    target.previousElementSibling.remove();
    target.remove();
  }
}

document.addEventListener('click', apagarTarefa);

function addTarefa(e) {
  e.preventDefault();
  const elemento = criarElemento();
  if (input.value) {
    elemento.innerHTML = input.value;
    ul.appendChild(elemento);
    setTimeout(() => {});
    adicionarBtn(ul);
  }
  resetarFocus();
}

function resetarFocus() {
  input.value = '';
  input.focus();
}

btnAdd.addEventListener('click', addTarefa);
