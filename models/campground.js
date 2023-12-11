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

const opts = { toJSON: { virtuals: true } };
//adding this option to access mongoose virtuals from inside our mapbox code clusterMap.js

const CampgroundSchema = new Schema({
  title: { type: String },
  price: { type: Number, min: 0 },
  description: { type: String },
  location: { type: String },
  geometry: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
  images: [
    {
      url: String,
      filename: String,
    }
    // ImageSchema
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
  opts,
  { timestamps: true }
);

// using . to nest in virtual 

CampgroundSchema.virtual('properties.popUpMarkup').get(function () {
  return `
  <strong>
  <a href=/campgrounds/${this._id} target=_blank>${this.title}</a>
  </strong>
  <p>${this.description.substring(0,20)}...</p>
  `;
});


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
