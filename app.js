// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres
const amigos = [];

// Función para agregar el nombre del input al array "amigos"
window.agregarAmigo = function () {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();
  if (!nombre) return;     // si está vacío, no hace nada
  amigos.push(nombre);     // agrega al array
  input.value = '';        // limpia el input
};

// Función para actualizar la lista en <ul id="listaAmigos">
window.actualizarListaAmigos = function () {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';
  for (const nombre of amigos) {
    const li = document.createElement('li');
    li.textContent = nombre;
    ul.appendChild(li);
  }
};

// Función para sortear un amigo del array "amigos"
window.sortearAmigo = function () {
  if (amigos.length === 0) return;
  const idx = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[idx];

  const ul = document.getElementById('resultado');
  ul.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = `Tu amigo secreto es: ${elegido}`;
  ul.appendChild(li);
};