class Usuario {
  constructor(username, email, admin) {
    this.username = username;
    this.email = email;
    this.admin = admin;
  }

  //   saludar = function () {
  //     console.log("Hola " + this.username);
  //   };

  saludar() {
    console.log("Hola " + this.username);
  }
}

const usuarios = [];

const usuario1 = new Usuario("User 1", "x@x.com", false);
usuario1.saludar();

usuarios.push(usuario1);

const usuario2 = new Usuario("User 2", "y@y.com", true);

usuarios.push(usuario2);

const usuario3 = new Usuario("User 3", "z@z.com", false);

usuarios.push(usuario3);

const usuario = usuarios.find((usuario) => usuario.email == "y@y.com");

// const user4 = {
//   id: 1,
//   admin: true,
//   tags: [1, "a"],
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };
