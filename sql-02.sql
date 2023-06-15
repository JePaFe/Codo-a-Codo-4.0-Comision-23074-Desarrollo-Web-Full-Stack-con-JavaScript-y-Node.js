INSERT INTO `productos` (`id`, `nombre`, `descripcion`) 
    VALUES (NULL, 'Producto 1', 'Descripción Producto 1');

INSERT INTO `productos` (`nombre`, `descripcion`) 
    VALUES ('Producto 2', 'Descripción Producto 2');

-- INSERT INTO `productos` VALUES (NULL, 'Producto 1', 'Descripción Producto 1');

INSERT INTO `productos` (`nombre`, `descripcion`) 
    VALUES ('Producto 3', 'Descripción Producto 3'),
            ('Producto 4', 'Descripción Producto 4'),
            ('Producto 5', 'Descripción Producto 5');

INSERT INTO `productos` (`id`, `nombre`, `descripcion`) VALUE (NULL, 'Producto 1', 'Descripción Producto 1');

---

SELECT * FROM `productos`

SELECT id, nombre FROM `productos` WHERE id != 3;

SELECT * FROM `productos` WHERE precio > 0 LIMIT 2;

---

UPDATE `productos` SET nombre = 'Prod X', `precio` = '275' WHERE `id` = 2;

---

DELETE FROM productos WHERE nombre LIKE '%Nro%';

---

SELECT productos.nombre AS Producto, categorias.nombre AS Categoría 
FROM productos
INNER JOIN categorias ON categorias.id = productos.categoria_id;
