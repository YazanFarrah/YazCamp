const mongoose = require("mongoose");
const Product = require("./product");
const Schema = mongoose.Schema;

const farmSchema = new Schema({
    name: { type: String, required: [true, 'Farm must have a name'] },
    city: { type: String, },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        }
    ]
})

//using this to delete all related products with the farm being deleted.
//used findOneAndDelete, because in the deletion of a farm we used findByIdAndDelete
//and that's the corresponding method, check mongo docs for more information if it was 
//different method used
farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } })
        console.log(res);
    }

});

//this is the data after deletion that we have access to from farmSchema.post
// POST MIDDLEWARE
// {
//   _id: new ObjectId('65644d6ee47ef219da402a09'),
//   name: 'delete ME',
//   city: 'deleting',
//   email: 'dele@delete.com',
//   products: [],
//   __v: 0
// }


const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;