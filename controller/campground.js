const Campground = require("../models/campground");
const { getTimeDifference } = require('../utils/timeStamps');
const { cloudinary } = require('../cloudinary')
exports.getCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

exports.getOneCampground = async (req, res, next) => {
  const { id } = req.params;
  //populate the reviews, then on each one of them, populate the author.
  //Then separately, populate the author of the campground.
  const campground = await Campground.findById(id).populate({
    path: 'reviews',
    // options: {
    //   sort: { '_id': -1 }
    // },
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
};

exports.getNewCamoground = (req, res) => {
  res.render("campgrounds/new");
};

exports.postNewCampground = async (req, res, next) => {
  const campground = new Campground(req.body.campground);
  campground.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
  campground.author = req.user._id;
  await campground.save();
  console.log(campground);
  req.flash('success', 'Successfully made a new campground');
  res.redirect(`/campgrounds/${campground._id}`);
};

exports.getEditCampground = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    req.flash('error', 'Campground doesn\'t exist or was deleted');
    return res.redirect('/campgrounds');
  }
  res.render("campgrounds/edit", { campground });
};

exports.editCampground = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));

  //I saved the images array in imgs, so I can push to campground.images an image/images
  //instead of another array of images inside the existing array if any. 
  //Then used spread operator to extract those images and save them in the existing array.

  campground.images.push(...imgs);
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      console.log(filename);
      await cloudinary.uploader.destroy(filename);
    }
    await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
  }
  await campground.save();

  req.flash('success', 'Successfully updated campground');
  res.redirect(`/campgrounds/${campground._id}`);
};

exports.deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash('success', 'Successfully deleted campground');

  res.redirect("/campgrounds");

};