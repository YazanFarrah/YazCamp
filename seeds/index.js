const mongoose = require("mongoose");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");
const cities = require("./cities");
const axios = require("axios");
mongoose
  .connect("mongodb://0.0.0.0/yelp-camp")
  .then(() => {
    console.log("MONGO CONNECTION OPEN");
  })
  .catch((err) => {
    console.log("MONGO CONNECTION ERROR");
    console.log(err);
  });
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '6567b044253530c5f02bf7b3',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi numquam aut natus assumenda, dolorum amet sit! Enim corrupti, qui deserunt in exercitationem vero, illo autem distinctio ratione, natus eaque illum.",
      //typing only price is a shortcut for price: price, since they have the same name
      price,
      image: await seedImg(),
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
