const express = require("express");
const router = express.Router();

const feedController = require("../controller/feed");

router.get("/campgrounds", feedController.getCampgrounds);

//I put this route before /campgrounds/:id because 'new' would be considered as an id
router.get("/campgrounds/new", feedController.getNewCamoground);

router.post("/campgrounds", feedController.postNewCampground);

router.get("/campgrounds/:id", feedController.getOneCampground);

router.get("/campgrounds/:id/edit", feedController.getEditCampground);

router.put("/campgrounds/:id", feedController.editCampground);

router.delete("/campgrounds/:id", feedController.deleteCampground);

module.exports = router;