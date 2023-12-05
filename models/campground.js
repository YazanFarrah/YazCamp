const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;


//used bootstrap design instead of virtual below, it has some issues, check the latest
//cloudinary updates.
// const ImageSchema = new Schema({
//   url: String,
//   filename: String
// });

// ImageSchema.virtual('thumbnail').get(function () {
//   console.log(url);
//   return this.url.replace('/upload', '/upload/c_thumb,h_150,w_150');
// });

const CampgroundSchema = new Schema({
  title: { type: String },
  price: { type: Number, min: 0 },
  description: { type: String },
  location: { type: String },
  images: [
    {
      url: String,
      filename: String,
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }

},
  { timestamps: true }
);

CampgroundSchema.post('findOneAndDelete', async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews
      }
    })
  }
});

module.exports = mongoose.model("Campground", CampgroundSchema);
