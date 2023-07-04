const express = require("express");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});

const uploadFile = multer({ storage });

const controller = require("../controllers/userController");

const { body } = require("express-validator");

const userValidations = [
  body("email")
    .isEmail()
    .withMessage("Ingrese una dirección de correo electrónico válida"),
  body("password")
    .isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage("La contraseña debe tener ..."),
];

router.get("/create", controller.create);
router.post(
  "/",
  uploadFile.single("image"),
  userValidations,
  controller.store
);

router.get("/", controller.index);
router.get("/:id", controller.show);

module.exports = router;
