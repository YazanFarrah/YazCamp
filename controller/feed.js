const Campground = require("../models/campground");
const catchAsync = require("../utils/catchAsync");
const Review = require('../models/review')

exports.getCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

exports.getOneCampground = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id).populate('reviews');
  res.render("campgrounds/show", { campground });
});

exports.getNewCamoground = (req, res) => {
  res.render("campgrounds/new");
};

exports.postNewCampground = catchAsync(async (req, res, next) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
});

exports.getEditCampground = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  // if (!campground) {
  // throw new ExpressError("Camp not found", 404);
  // } else {
  res.render("campgrounds/edit", { campground });
  // }
});

exports.editCampground = catchAsync(async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/campgrounds/${campground._id}`);
});

exports.deleteCampground = catchAsync(async (req, res) => {

  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");

});

//reviews

exports.addReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  const review = new Review(req.body.review);
  campground.reviews.push(review);
  await review.save();
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
});

exports.deleteReview = catchAsync(async (req, res) => {
  const { id, reviewId } = req.params;
  // $pull: is an operator from mongo, it removes from array values that match condition 
  await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/campgrounds/${id}`);

});
