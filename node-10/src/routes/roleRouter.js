const express = require("express");
const router = express.Router();

const controller = require("../controllers/roleController");

const { body } = require("express-validator");

const roleValidations = [
  body("name").notEmpty().withMessage("El nombre del Role es obligatorio"),
];

router.get("/create", controller.create);
router.post("/", roleValidations, controller.store);

router.get("/edit/:id", controller.edit);
router.put("/", roleValidations, controller.update);

router.get("/", controller.index);
router.get("/:id", controller.show);

router.delete("/:id", controller.destroy);

module.exports = router;
