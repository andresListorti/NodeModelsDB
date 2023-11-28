const express = require("express");
const multer = require("multer");
const path = require("path");
const { body } = require("express-validator");
const validacion = require("../middlewares/validation.js");
const mainControllers = require("./../controllers/mainControllers.js");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) =>
    cb(null, path.resolve(__dirname, "../../public/img")),
  filename: (req, file, cb) => cb(null, Date.now() + "_" + file.originalname),
});

const uploadFile = multer({ storage });

const validacionLogin = [
  body("nombre")
    .notEmpty()
    .withMessage("El campo de nombre no puede estar vacio"),
  body("apellido")
    .isLength({ min: 3 })
    .withMessage("El campo de apellido debe tener largo de minimo 3"),
];

router.get("/", mainControllers.root);

router.post("/", validacionLogin, validacion, mainControllers.login);


router.get("/home", mainControllers.home);

router.post("/home", mainControllers.homePost);

router.put("/home", uploadFile.single("archivo"), mainControllers.homePut);

router.get("/tareas/:sku", mainControllers.tareas);

module.exports = router;
