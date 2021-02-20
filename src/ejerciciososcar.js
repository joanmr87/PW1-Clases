// Importo la función "imprimir" desde "utils.js".
// Notar el uso de "desestructuración".
import { imprimir } from './utils.js';

// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();
// =====================================================
// 1. Crea una Clase para definir a un Usuario genérica.
// Definir la clase "User".
//
// Debe tener las siguientes características:
//   - "username": Nombre de usuario.
//     Propiedad texto (String).
//     Default: null.
//   - "age": Edad.
//     Propiedad numérica (Number).
//     Default: null.
//   - "password": Contraseña.
//     Propiedad texto (String).
//     Default: null.
//   - "loggedIn": Usuario logueado?
//     Propiedad Booleano (Boolean).
//     Default: false (Falso).
//   - "login(): Debe definirse un método que
//     establezca la propiedad "loggedin" en
//     `true` cuando el valor que se pasa por
//     parámetro es igual al 'password' de la
//     instancia actual.
//     Al llamar al método "login()", debe imprimirse el
//     texto 'Usuario [username] ha iniciado sesión' si
//     el 'password' ingresado es correcto, o el texto
//     'Contraseña incorrecta' si la misma es
//     incorrecta.
class User {
  username = null;
  age = null;   /*acordate que sea Number*/
  password = null;
  loggedIn = false;
  mayorEdad = false;
  constructor(nameusr, pass, agedad) {
    this.username = nameusr;
    this.password = pass;
    this.age = agedad;
  }
  login(usuario, Contrasena) {
    this.loggedIn = (this.password == Contrasena && this.username == usuario);
  }
  esMayor() {
    this.mayorEdad = (this.age >= 18);
  }
}
const usuarioGenerico = new User('invitado', '111', 16);
usuarioGenerico.login('invitado', '111');
if (usuarioGenerico.loggedIn) {
  imprimir(`Usuario ${usuarioGenerico.username} ha iniciado sesión`);
}
else {
  imprimir(`el usuario o contrasenia es incorrecta`)
}
// =====================================================
// 2. Crear la clase "Vendedor" a partir de la clase
// "User".
//
// Ahora, el Vendedor debe poder generar una venta.
// Para ello, se debe agregar un método "vender" al cuál
// se le indique una descripción del producto vendido
// por parámetro. Las ventas deben guardarse en un array
// de ventas interno de la instancia.
//
// Para poder realizar la cción de "vender", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Documentación recomendada:
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push


class Vendedor extends User {
  productoVendido = [];
  vendedoresMayor = false;
  eresMayor() {
    this.vendedoresMayor = (this.age >= 18);
  }
  vender(producto) {
    this.productoVendido.push(producto);
  }
}
const venta = new Vendedor('Vendedor', 123, 21);
venta.eresMayor(venta.age);
if (venta.vendedoresMayor) {
  venta.login('Vendedor', '123');
  if (venta.loggedIn) {
    venta.vender('heladera');
    venta.vender('cocina');
    venta.vender('lavarropa');
    imprimir(`El usuario ${venta.username} ha iniciado sesion y vendió ${venta.productoVendido}`);
  }
  else {
    imprimir(`el usuario o contrasenia es incorrecta`)
  }
}
else
  imprimir(`el usuario no es mayor de edad`)


// =====================================================
// 3. Crear la clase "Comprador" a partir de la clase
// "User".
// Ahora, el Comprador debe poder generar una compra.
// Para ello, se debe agregar un método "comprar",
// al cuál se le indique una instancia de Vendedor
// que será quien le ha vendido el producto, y una
// descripción del producto vendido.
//
// Para poder realizar la cción de "comprar", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Desde el metodo "comprar" se debe agregar el
// producto vendido al vendedor, e imprimir el siguiente
// texto de ejemplo:
class Comprador extends User {
  productoComprado = [];
  compradoresMayor = false;
  eresMayor() {
    this.compradoresMayor = (this.age >= 18);
  }
  comprar(lista) {
    this.productoComprado = lista;
  }
}
const compra = new Comprador('Comprador', '456', 25);
compra.eresMayor(compra.age);
if (compra.compradoresMayor) {
  compra.login('Comprador', '456');
  if (compra.loggedIn) {
    imprimir(`El usuario ${compra.username} ha iniciado sesión`);
    compra.comprar(venta.productoVendido);
    imprimir(`El usuario ${venta.username} ha vendido ${compra.productoComprado} a ${compra.username}`);
  }
  else {
    imprimir(`el usuario o contrasenia es incorrecta`)
  }
}
else
  imprimir(`el usuario no es mayor de edad`)

// =====================================================
// 4. Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".




// =====================================================
// 5. Modificar las clases anteriores y agregar un
// método "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).
usuarioGenerico.esMayor(usuarioGenerico.age);
imprimir(`El usuario ${usuarioGenerico.username} es mayor de Edad? ${usuarioGenerico.mayorEdad}`);
imprimir(`El usuario ${venta.username} es mayor de Edad? ${venta.vendedoresMayor}`);
imprimir(`El usuario ${compra.username} es mayor de Edad? ${compra.compradoresMayor}`);

// =====================================================
// 6. Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".