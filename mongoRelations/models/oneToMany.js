const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
    .connect("mongodb://0.0.0.0/relationsDemo")
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch((err) => {
        console.log("MONGO CONNECTION ERROR");
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     { name: 'Melon', price: 4.99, season: 'Summer' },
//     { name: 'Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ])

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Happy Farm', city: 'Facebook' })
//     const melon = await Product.findOne({ name: 'Melon' })
//     farm.products.push(melon)
//     await farm.save();
//     console.log(farm)
// }

// makeFarm();


const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Happy Farm' });
    const Asparagus = await Product.findOne({ name: 'Asparagus' })
    farm.products.push(Asparagus);
    await farm.save();
    console.log(farm)
}

// addProduct();

//populate to access the object elements instead of it's id only
Farm.findOne({ name: 'Happy Farm' })
    .populate('products')
    .then(farm => {
        // console.log(farm)
        for (let f of farm.products) {
            console.log(f.name)
        }
        // console.log(farm.products.price);
        // console.log(farm.price)
    })
