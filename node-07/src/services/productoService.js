const producto = require("../models/Producto");

const getProducto = async (params) => {
  const item = await producto.getProducto(params);

  if (item.length > 0) {
    return item[0];
  }

  return "El producto no existe";
};

module.exports = {
  getProducto,
};
