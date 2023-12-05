const mongoose = require("mongoose");
const { places, descriptors, imageUrls } = require("./seedHelpers");
const Campground = require("../models/campground");
const cities = require("./cities");
const axios = require("axios");
const {
  v4: uuidv4
} = require('uuid');

mongoose
  .connect("mongodb://0.0.0.0/yelp-camp")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR");
    console.log(err);
  });
const seeder = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {

  await Campground.deleteMany({});

  for (let i = 0; i < 200; i++) {
    let rand = Math.floor(Math.random() * 164);
    const {
      city,
      lat,
      lng
    } = cities[rand];
    const province = cities[rand].admin_name;
    

    const randomImages = [];
    for (let j = 0; j < 4; j++) {
      randomImages.push({
        url: seeder(imageUrls),
        filename: 'Unsplash-' + uuidv4()
      });
    }
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '6567b044253530c5f02bf7b3',
      location: `${city}, ${province}`,
      title: `${seeder(descriptors)} ${seeder(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam aut natus assumenda, dolorum amet sit! Enim corrupti, qui deserunt in exercitationem vero, illo autem distinctio ratione, natus eaque illum.",
      //typing only price is a shortcut for price: price, since they have the same name
      price,
      images: [...randomImages],
    });
    await camp.save();
  }
};
seedDB().then(() => {
  mongoose.connection.close();
});

async function seedImg() {
  try {
    const res = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: "XEoP8icIPer6_DAKkRfAD2ij11ABJ9dWF8IL7P_uk7U",
        collections: 1114848,
      },
    });
    return res.data.urls.regular;
  } catch (err) {
    console.error(err);
  }
}
