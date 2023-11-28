const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = Schema({
    body: {
        type: String,
    },
    rating: {
        type: Number,

    },
    
});

module.exports = mongoose.model('Review', reviewSchema);