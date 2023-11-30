const Campground = require("../models/campground");
const catchAsync = require("../utils/catchAsync");
const Review = require('../models/review')
const { getTimeDifference } = require('../utils/timeStamps');

exports.getCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

exports.getOneCampground = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  //populate the reviews, then on each one of them, populate the author.
  //Then separately, populate the author of the campground.
  const campground = await Campground.findById(id).populate({
    path: 'reviews',
    populate: {
      path: 'author'
    }
  }).populate('author');
  console.log(campground);

  if (!campground) {
    req.flash('error', 'Campground doesn\'t exist or was deleted');
    return res.redirect('/campgrounds');
  }
  res.render("campgrounds/show", { campground, getTimeDifference });
});

exports.getNewCamoground = (req, res) => {
  res.render("campgrounds/new");
};

exports.postNewCampground = catchAsync(async (req, res, next) => {
  const campground = new Campground(req.body.campground);
  campground.author = req.user._id;
  await campground.save();
  req.flash('success', 'Successfully made a new campground');
  res.redirect(`/campgrounds/${campground._id}`);
});

exports.getEditCampground = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    req.flash('error', 'Campground doesn\'t exist or was deleted');
    return res.redirect('/campgrounds');
  }
  res.render("campgrounds/edit", { campground });
});

exports.editCampground = catchAsync(async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });

  req.flash('success', 'Successfully updated campground');
  res.redirect(`/campgrounds/${camp._id}`);
});

exports.deleteCampground = catchAsync(async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash('success', 'Successfully deleted campground');

  res.redirect("/campgrounds");

});
