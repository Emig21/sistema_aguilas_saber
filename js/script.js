function mostrarContenido(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('.content section');
    secciones.forEach(function(seccion) {
      seccion.classList.remove('active');
    });
  
    // Mostrar la sección correspondiente
    var seccionMostrar = document.getElementById(id);
    if (seccionMostrar) {
      seccionMostrar.classList.add('active');
    }
  }

//   function mostrarContenido(seccion) {
//     // Aquí puedes manejar la lógica para mostrar el contenido correspondiente
//     document.getElementById('contenido').innerHTML = '<h2>' + seccion + '</h2><p>Contenido para ' + seccion + '</p>';
// }