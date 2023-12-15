const express = require("express");
const router = express.Router();

const feedController = require("../controller/campground");
const { validateCampground } = require('../middlewares/validate');
const { isLoggedIn } = require('../middlewares/isAuth');
const { isCampAuthor } = require('../middlewares/isAuthor');
const catchAsync = require("../utils/catchAsync");
const multer = require('multer');
const { storage } = require('../cloudinary/index');
const upload = multer({ storage });

//since both have same route '/', I can use a shorter way with router.route:

router.route('/')
    .get(catchAsync(feedController.getCampgrounds))
    .post(isLoggedIn, upload.array('image'), validateCampground, catchAsync(feedController.postNewCampground));


//I put this route before /campgrounds/:id because 'new' would be considered as an id
router.get("/new", isLoggedIn, feedController.getNewCamoground);

router.get("/users", catchAsync(feedController.getCamogroundUsers));

router.route('/:id')
    .get(catchAsync(feedController.getOneCampground))
    .put(isLoggedIn, isCampAuthor, upload.array('image'), validateCampground, catchAsync(feedController.editCampground))
    .delete(isLoggedIn, isCampAuthor, catchAsync(feedController.deleteCampground));

router.get("/:id/edit", isLoggedIn, isCampAuthor, catchAsync(feedController.getEditCampground));


module.exports = router;
