// function Usuario(username, email) {
//   let _username = username;
//   let _email = email;

//   return {
//     username: function () {
//       return _username;
//     },
//   };
// }

// const usuario1 = new Usuario("User 1", "x@x.com");

class Usuario {
  constructor(username) {
    this.username = username;
  }
  setUsername(value) {
    this.username = value;
  }
  getUsername() {
    return this.username;
  }
}

const usuario = new Usuario("User 1");
console.log(usuario);
console.log(usuario.getUsername());

console.log(usuario.username);
