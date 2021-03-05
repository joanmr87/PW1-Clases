// Importo la función "imprimir" desde "utils.js".
// Notar el uso de "desestructuración".
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
  constructor(nombre, edad, pass){
    this.name = nombre;
    this.age = edad;
    this.password = pass;
  }
  name = null;
  age = null;
  password = null;
  loggedIn = false;
  mayorEdad = false;
  
  esMayor(){
    if (this.age >= 18){
      return this.mayorEdad === true;
    }
  }
  //ESTE METODO DEBERIA MODIFICAR LA EDAD DE LA INSTANCIA
  
  login(contraseña){
    esMayor();
    if (this.mayorEdad === true){

      if (contraseña === this.password){
      this.loggedIn = true;
      imprimir(`Usuario ${this.name} ha iniciado sesión`);
      }
      else {
      imprimir('Contraseña incorrecta');
      console.log('Contraseña incorrecta');
      } 
    }
    else{
      imprimir('Debe ser mayor de edad para logearse');
     }   
    }
  }
  
    
  

  const Juan = new User("Juan", 30, "1234");
  Juan.login("1234");



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
  productos = [];  
  vender(descripcionProducto){  
    if (this.loggedIn === true){
      this.productos.push(descripcionProducto)
    }
    else{
      imprimir('Debe estar logeado para poder vender');
    }
  };
  
}


const Maria = new Vendedor("Maria", 40, "123")
Maria.login("123");
Maria.vender("Arroz");

 

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
  comprar(Vendedor, descripcionProducto){ 
    if (this.loggedIn === true){
      Vendedor.productos.push(descripcionProducto);
      imprimir([
        `El vendedor ${Vendedor.username},ha vendido ${descripciónProducto},
        a ${this.username}`
      ]);
    }   
  }
}

const Pepe = new Comprador("Pepe", 50, "12");
Pepe.login("12");
Pepe.comprar(Maria, "pan");

 
/*NOTA: EN EL METODO COMPRAR(), NO SE COMO AGREGAR EL PRODUCTO PASADO COMO PARAMETRO AL 
ARRAY DEL VENDEDOR*/


// =====================================================
// 4. Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".

// =====================================================
// 5. Modificar las clases anteriores y agregar un
// método "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).

// =====================================================
// 6. Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".