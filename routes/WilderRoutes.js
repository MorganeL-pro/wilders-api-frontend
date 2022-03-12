const router = require("express").Router();
const { route } = require("express/lib/application");
const wilderController = require("../controllers/wildersController");

//Homepage GET

router.get('/', wilderController.read);

router.post('/create', wilderController.create);

router.post("/update", wilderController.update);

router.delete("/:id/delete", wilderController.delete);

module.exports = router;