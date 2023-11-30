const express = require("express");
const router = express.Router({mergeParams: true});

const reviewController = require("../controller/reviews");
const { validateReview } = require('../middleware');
const { isLoggedIn } = require('../middlewares/isAuth');

router.post('/',isLoggedIn, validateReview, reviewController.addReview);

router.delete('/:reviewId',isLoggedIn, reviewController.deleteReview);



module.exports = router;
