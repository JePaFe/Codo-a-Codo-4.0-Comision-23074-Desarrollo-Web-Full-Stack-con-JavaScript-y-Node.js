// function saludar() {
//   console.log("Hola");
// }

// ---

// let texto = "Otro texto";

// const saludar = function () {
//   let texto = "HOla";
//   return texto;
//   console.log("No se muestra");
// };

// console.log(texto);

// const mensaje = saludar();
// console.log(mensaje);

// console.log(texto);

// ---

let nombre = "Pedro";

const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

let mensaje = saludar(nombre);
console.log(mensaje);

mensaje = saludar("Maria");
console.log(mensaje);

console.log(nombre);
