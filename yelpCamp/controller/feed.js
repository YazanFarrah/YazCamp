const Campground = require("../models/campground");
const catchAsync = require("../utils/catchAsync");


exports.getCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

exports.getOneCampground = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  res.render("campgrounds/show", { campground });
});

exports.getNewCamoground = (req, res) => {
  res.render("campgrounds/new");
};

exports.postNewCampground =  catchAsync(async (req, res, next) => {
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

exports.editCampground =  catchAsync(async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/campgrounds/${campground._id}`);
});

exports.deleteCampground = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCamp = await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  } catch (error) {
    console.log(error);
  }
});

//function to get campground id from req.body
//and redirect to a specific path
