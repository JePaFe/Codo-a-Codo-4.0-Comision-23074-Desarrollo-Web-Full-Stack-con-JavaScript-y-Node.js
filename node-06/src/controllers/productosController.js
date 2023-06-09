class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const create = (req, res) => {
  const producto = new Producto(req.body.nombre, req.body.precio);
  console.log(req.body, producto);
  res.send("Producto creado: " + req.body.nombre);
};

const update = (req, res) => {
  console.log(req.body);
  res.send("Producto modificado: " + req.body.nombre);
};

module.exports = {
  create,
  update,
};
