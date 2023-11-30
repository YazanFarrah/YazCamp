const express = require("express");
const router = express.Router({ mergeParams: true });

const reviewController = require("../controller/reviews");
const { validateReview } = require('../middlewares/validate');
const { isLoggedIn } = require('../middlewares/isAuth');
const { isReviewAuthor } = require('../middlewares/isAuthor');

router.post('/', isLoggedIn, validateReview, reviewController.addReview);

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, reviewController.deleteReview);



module.exports = router;
