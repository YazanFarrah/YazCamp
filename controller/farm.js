const Farm = require("../models/farm");
const Product = require("../models/product");
const categories = ["fruit", "vegetable", "dairy"];

exports.getFarms = async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
}

exports.getOneFarm = async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/details', { farm });
}

exports.getNewFarm = (req, res) => {
    res.render('farms/new');
}

exports.addNewFarm = async (req, res) => {
    const { name, city, email } = req.body;
    const farm = new Farm({ name, city, email });
    console.log(farm);
    await farm.save()
    res.redirect('/farms')
}

exports.getAddFarmProduct = async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render('products/new', { categories, farm })
}

exports.addFarmProduct = async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
}

exports.deleteFarm = async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findByIdAndDelete(id);
    // console.log('deleting')
    res.redirect('/farms')
}