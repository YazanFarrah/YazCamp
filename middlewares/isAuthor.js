const catchAsync = require("../utils/catchAsync");
const Campground = require('../models/campground');
const Review = require("../models/review");
exports.isCampAuthor = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if (!campground.author.equals(req.user._id)) {
        req.flash('error', 'Not authorized.');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
});


exports.isReviewAuthor = catchAsync(async (req, res, next) => {
    const {id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review.author.equals(req.user._id)) {
        req.flash('error', 'Not authorized.');
        return res.redirect(`/campgrounds/${id}`);
    }
    next();
})