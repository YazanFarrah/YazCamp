const express = require("express");
const router = express.Router();

const feedController = require("../controller/feed");
const { validateCampground, validateReview } = require('../middleware');

router.get("/", feedController.getCampgrounds);

//I put this route before /campgrounds/:id because 'new' would be considered as an id
router.get("/new", feedController.getNewCamoground);

router.post("/", validateCampground, feedController.postNewCampground);

router.get("/:id", feedController.getOneCampground);

router.get("/:id/edit", feedController.getEditCampground);

router.put("/:id", validateCampground, feedController.editCampground);

router.delete("/:id", feedController.deleteCampground);

//rating 

router.post('/:id/reviews', validateReview, feedController.addReview);


router.delete('/:id/reviews/:reviewId', feedController.deleteReview);

module.exports = router;
