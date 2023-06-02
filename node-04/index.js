const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Express");
});

app.get("/personajes", (req, res) => {
  console.log(req.query);
  //   console.log(__dirname + "/data/personajes.json");
  //   console.log(path.join(__dirname, "/data/personajes.json"))
  const buffer = fs.readFileSync("./data/personajes.json");
  //   console.log(buffer);
  const personajes = JSON.parse(buffer);
  //   console.log(personajes);

  if (req.query.status) {
    const status = req.query.status.toLowerCase();

    const filtrados = personajes.filter(
      (personaje) => personaje.status.toLowerCase() == status
    );
    res.send(filtrados);
  } else {
    res.send(personajes);
  }
});

app.get("/personajes/:id", (req, res) => {
  //   console.log(req.params);
  console.log(req.query);
  const buffer = fs.readFileSync("./data/personajes.json");
  const personajes = JSON.parse(buffer);

  const personaje = personajes.find(
    (personaje) => personaje.id == req.params.id
  );

  res.send(personaje);
});

app.post("/personajes", (req, res) => {
  res.status(201).send("Crear personaje");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
