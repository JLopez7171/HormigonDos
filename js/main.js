const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
let menuAbierto = false;

// Alternar apertura y cierre del menú
menuIcon.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que se cierre inmediatamente por el listener global

  if (menuAbierto) {
    sidebar.style.right = '-250px';
  } else {
    sidebar.style.right = '0';
  }

  menuAbierto = !menuAbierto;
});
// Cerrar al hacer clic fuera o en enlace
document.addEventListener('click', (e) => {
  if (!sidebar.contains(e.target) && e.target !== menuIcon) {
    sidebar.style.right = '-250px';
  }
});

// Cerrar al hacer clic en cualquier enlace del menú
sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.style.right = '-250px';
  });
});

// Escuchar el scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    sidebar.style.top = '0';
  } else {
    sidebar.style.top = '60px';
  }
});