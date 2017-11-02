function arrastrar(evento) {
  //almacenamos la informacion del elemento que estamos arrastrando.
  //el evento.target es como si hubiesemos pasado el this para sacar el id
  evento.dataTransfer.setData("Text", evento.target.id);
}

function pasar(evento) {
  //quitar la configuracion por defecto de lo q hace el navegador cuando sueltas una imagen
  evento.preventDefault();
}

function soltar(evento) {
  evento.preventDefault();
  //recuperamos el elemento que estabamos arrastrando y lo soltamos ahi
  var elemento = evento.dataTransfer.getData("Text");
  //ponemos dentro del contenedor el objeto que estamos arrastrando.
  evento.target.appendChild(document.getElementById(elemento));
}
