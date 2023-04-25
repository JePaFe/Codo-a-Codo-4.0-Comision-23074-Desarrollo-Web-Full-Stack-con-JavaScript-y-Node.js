function Usuario(username, email, admin) {
  this.username = username;
  this.email = email;
  this.admin = admin;

  this.saludar = function () {
    console.log("Hola " + this.username);
  };
}

// Usuario.prototype.saludar = function () {
//   console.log("Hola " + this.username);
// };

const usuario1 = new Usuario("User 1", "x@x.com", false);
delete usuario1.email;
usuario1.nombre = "Juan";
usuario1.saludar();

const usuario2 = new Usuario("User 2", "y@y.com", true);
