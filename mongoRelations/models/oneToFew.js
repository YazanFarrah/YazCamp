const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
    .connect("mongodb://0.0.0.0/relationsDemo")
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch((err) => {
        console.log("MONGO CONNECTION ERROR");
    });

const userSchema = mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true,
            },
        }
    ]
});


const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Bitch',
        last: 'Money',

    });
    u.addresses.push({
        street: '123 Spiderman\'s house.',
        city: 'New York',
        state: 'NY',
        country: 'USA',
    })
    const res = await u.save();
    console.log(res);
}

const addAddress = async (uid) => {
    const user = await User.findById(uid);
    user.addresses.push(
        {
            street: '99',
            city: 'New York',
            state: 'ss',
            country: 'GN',
        }
    )
    const res = await user.save();
    console.log(res);
}
addAddress('6563bc3c38130b7c25a7c320');

makeUser();
