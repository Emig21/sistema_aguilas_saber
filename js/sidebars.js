/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()


document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Evita el comportamiento por defecto del enlace

      // Elimina la clase 'active' de todos los enlaces
      navLinks.forEach(link => link.classList.remove('active'));

      // Añade la clase 'active' al enlace clicado
      link.classList.add('active');
    });
  });
});

