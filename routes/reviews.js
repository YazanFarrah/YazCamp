const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");


const reviewController = require("../controller/reviews");
const { validateReview } = require('../middlewares/validate');
const { isLoggedIn } = require('../middlewares/isAuth');
const { isReviewAuthor } = require('../middlewares/isAuthor');

router.post('/', isLoggedIn, validateReview, catchAsync(reviewController.addReview));


router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviewController.deleteReview));



module.exports = router;
