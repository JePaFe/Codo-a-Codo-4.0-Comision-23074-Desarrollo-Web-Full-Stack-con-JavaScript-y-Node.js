// const mensaje = () => {
//   console.log("Hola");
// };

const usuario1 = {
  username: "User 1",
  email: "x@x.com",
  admin: true,
  // saludar: mensaje,
  saludar() {
    console.log("Hola " + this.username);
  },
};

usuario1.saludar();

const usuario2 = {
  username: "User 2",
  email: "y@y.com",
  admin: true,
};

// for (const key in usuario) {
//   console.log(key, usuario[key]);
// }

// delete usuario.email;
// usuario.nombre = "Juan";
// usuario.username = "Usuario 1";

// console.log(usuario.username);
// console.log(usuario["username"]);
