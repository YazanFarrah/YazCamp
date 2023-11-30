const express = require("express");
const router = express.Router();

const feedController = require("../controller/campground");
const { validateCampground } = require('../middlewares/validate');
const { isLoggedIn } = require('../middlewares/isAuth');
const { isCampAuthor } = require('../middlewares/isAuthor');


router.get("/", feedController.getCampgrounds);

//I put this route before /campgrounds/:id because 'new' would be considered as an id
router.get("/new", isLoggedIn, feedController.getNewCamoground);

router.post("/", isLoggedIn, validateCampground, feedController.postNewCampground);

router.get("/:id", feedController.getOneCampground);

router.get("/:id/edit", isLoggedIn, isCampAuthor, feedController.getEditCampground);

router.put("/:id", isLoggedIn, validateCampground, feedController.editCampground);

router.delete("/:id", isLoggedIn, isCampAuthor, feedController.deleteCampground);


module.exports = router;
