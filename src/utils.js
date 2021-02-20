/**
 * Imprimir por consola y en la página.
 *
 * @param  {...any} variables Variables a imprimir
 */
function imprimir(...variables) {
    // Imprimo por consola:
    console.info(...variables);
  
    // Obtengo el contenedor para la consola buscando
    // el elemento con ID "consola-html" (en el index.html):
    const consola = document.getElementById('consola-html');
  
    // Creo elemento HTML <hr> para mostrar una línea de
    // separación:
    consola.appendChild(document.createElement('hr'));
  
    // Creo elemento HTML <pre>:
    const linea = document.createElement('pre');
  
    // Uno las variables con "join" separando con un espacio
    // y lo asigno al contenido del elemnto HTML <pre> creado:
    linea.innerText = variables.join(' ');
  
    // Agrego al contenedor "consola":
    consola.appendChild(linea);
  }
  