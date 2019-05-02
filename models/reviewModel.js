const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReviewModel = new Schema({
    displayName: {
        type: String,
        trim: true,
    },
    img: {
        type: String
    },
    program: {
        type: String
    },
    country: {
        type: String,
        trim: true
    },
    countryCode: {
        type: String
    },
    tripOrg: {
        type: String
    },
    review: {
        type: String
    },
    dateStart: {
        type: Date
    },
    dateEnd: {
        type: Date
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    userId: {
        type: String
    }
})

const Review = mongoose.model("Review", ReviewModel);

module.exports = Review;