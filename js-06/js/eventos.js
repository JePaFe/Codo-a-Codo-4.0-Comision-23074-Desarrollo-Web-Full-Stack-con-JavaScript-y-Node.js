const saludar = () => {
  console.log("Hola");
};

// const h1 = document.querySelector("h1");
// h1.onclick = () => console.log("Click en h1");

const h2 = document.querySelector("h2");
h2.addEventListener("click", () => {
  console.log("Click en h2");
});

const enlace = document.querySelector("a");
enlace.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("click en enlace");
  window.location = event.target.href;
});

// ---

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreError = document.querySelector("#nombre-error");
  nombreError.textContent = "";

  let error = false;

  const nombre = document.querySelector("#nombre");
  if (nombre.value == "") {
    error = true;
    // document.querySelector("form div:nth-child(1)").innerHTML +=
    //   '<span class="error">El nombre es obligatorio</span>';
    nombreError.textContent = "El nombre es obligatorio";
    // nombre.placeholder = "El nombre es obligatorio";
  }

  if (!error) {
    e.target.submit();
  }
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => console.log(user.email));
  });
