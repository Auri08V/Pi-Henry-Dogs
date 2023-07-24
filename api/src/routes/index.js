const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllDogsController = require("../Controllers/getAllDogsController");
const getDogsByNameController = require("../Controllers/getDogNameController");
const getDogByIdController = require("../Controllers/getDogByIdController");
const getAllTemeperamentsController = require("../Controllers/getTemperamentsController");
const postDogController = require("../Controllers/postDogController");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/dogs/all", getAllDogsController.getAllDogsController);
router.get("/dogs/name", getDogsByNameController.getDogsByNameController);
router.get("/dogs/:id", getDogByIdController.getDogByIdController);
router.get( "/temperaments", getAllTemeperamentsController.getAllTemperamentsController);
router.post("/createDog", postDogController.postDogController);
module.exports = router;
