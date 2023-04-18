// const sumar = (num1, num2, output) => {
//   const result = num1 + num2;

//   if (output == "console") {
//     console.log(result);
//   } else if (output == "alert") {
//     alert(result);
//   } else if (output == "write") {
//     document.write(`<p>${result}</p>`);
//   } else {
//     console.log("No existe la salida");
//   }
// };

// const sumar = (num1, num2, output) => {
//   const result = num1 + num2;

//   if (typeof output == "function") {
//     output(result);
//   }
// };

// const write = (suma) => document.write(suma);

// sumar(3, 4, alert);
// sumar(1, 2, console.log);
// sumar(5, 6, write);
// sumar(5, 8);

// const sumarConsole = function (num1, num2) {
//   const result = num1 + num2;
//   console.log(result);
// };

// const sumarAlert = function (num1, num2) {
//   const result = num1 + num2;
//   alert(result);
// };

// const sumarWrite = function (num1, num2) {
//   const result = num1 + num2;
//   document.write(`<p>${result}</p>`);
// };

// sumarConsole(1, 2);
// sumarAlert(3, 4);
// sumarWrite(5, 6);

// ---

const saludar = function (nombre) {
  console.log(`Hola ${nombre}`);
};

const ingresarNombre = function (callback) {
  const nombre = prompt("Ingrese su nombre: ");
  callback(nombre);
};

console.log(1);
ingresarNombre(saludar);
console.log(2);
