// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// // Create Schema
// const UserSchema = new Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     userCreated: {
//         type: Date,
//         default: Date.now
//     },
//     review: [{
//         type: Schema.Types.ObjectId, ref: "Review"
//     }],
//     nickTable: {
//         type: Boolean,
//         default: true
//     }
// });

// const User = mongoose.model("users", UserSchema)
// module.exports = User;