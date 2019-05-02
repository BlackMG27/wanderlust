const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestModel = new Schema({
    displayName: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    img: {
        type: String
    },
    program: {
        type: String
    },
    country: {
        type: String
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
        type: String
    },
    dateEnd: {
        type: String
    }
})

const Test = mongoose.model("Test", TestModel);

module.exports = Test;