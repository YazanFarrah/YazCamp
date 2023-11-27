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

const userSchema = new Schema({
    username: String,
    age: Number,
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'UserModel' }
})

const User = mongoose.model('UserModel', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({ username: 'Jack', age: 50 })
//     const user = await User.findById('6563dac9c1ddec89d4d52044');
//     const tweet1 = new Tweet({ text: 'Laetitia will marry me and be a muslim', likes: 312 })
//     tweet1.user = user;
//     await tweet1.save();
//     // await user.save();
// }
// makeTweets()

const findTweets = async () => {
    const tweet = await Tweet.find({})
        // .populate('user'); // name of the field not model ('user')
        .populate('user', 'username');// this way it returns only the username 
        // .populate('user', 'username -_id'); this way without _id
        //with the _id ofc
    console.log(tweet);
}

findTweets();