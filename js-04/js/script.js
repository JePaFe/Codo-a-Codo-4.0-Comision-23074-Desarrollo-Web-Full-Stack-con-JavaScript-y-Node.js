const numeros = [3, 12, 6, 6, 1, 51, 8, 5];
const letras = ["a", "b", "c"];
const months = ["Jan", "April", "June"];

// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   // a debe ser igual b
//   return 0;
// }

console.log(numeros.sort((a, b) => a - b));

// months.splice(1, 0, "Feb", "March");
// months.splice(1, 1);
// months.splice(4, 1, "May");
// months[4] = "May";

// console.log(months.sort().reverse());

// ---

// const numeros_slice = numeros.slice(2, 4);

// const numeros_letras = numeros.concat(letras);
// const numeros_join = numeros.join(", ");
// const numeros_split = numeros_join.split(", ");

// ---

// const numero = numeros.pop();
// const numero = numeros.shift();
// console.log(numero);
// numeros.unshift(-10);
// numeros[5] = 3;
// numeros[numeros.length] = 4;
// numeros.push(2);

// ---

// numeros[3] = 88;
// console.log(numeros[3]);
// console.log(numeros[numeros.length - 2]);
// console.log(numeros.at(3));
