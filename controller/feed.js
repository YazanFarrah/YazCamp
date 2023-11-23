const Campground = require("../models/campground");

exports.getCampgrounds = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
};

exports.getOneCampground = async (req, res) => {
  await getIdRedirect(req, res, "show");
};

exports.getNewCamoground = (req, res) => {
  res.render("campgrounds/new");
};

exports.postNewCampground = async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
};

exports.getEditCampground = async (req, res) => {
  getIdRedirect(req, res, "edit");
};

exports.editCampground = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/campgrounds/${campground._id}`);
};

exports.deleteCampground = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCamp = await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  } catch (error) {
    console.log(error);
  }
};

//function to get campground id from req.body
//and redirect to a specific path
async function getIdRedirect(req, res, path) {
  try {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if (!campground) {
      console.log("camp not found");
      return res.redirect("/campgrounds");
    } else {
      res.render(`campgrounds/${path}`, { campground });
    }
  } catch (error) {
    console.log("Either Camp not found or failed to load it.");
    return res.redirect("/campgrounds");
  }
}
