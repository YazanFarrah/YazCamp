const catchAsync = require("../utils/catchAsync");
const Review = require('../models/review');
const Campground = require('../models/campground')


exports.addReview = catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    review.author = req.user._id;
    await review.save();
    await campground.save();
    console.log(review);
    req.flash('success', 'Review added.');
    res.redirect(`/campgrounds/${campground._id}`);
});

exports.deleteReview = catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    // $pull: is an operator from mongo, it removes from array values that match condition 
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'Review was deleted successfully');
    res.redirect(`/campgrounds/${id}`);

});
