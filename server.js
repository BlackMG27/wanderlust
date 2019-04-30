const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/wanderlust", { useNewUrlParser: true });

// db.Test.create({
//     displayName: "Sam",
//     img: "http://d2a5vhda9v4n4x.cloudfront.net/wp-content/uploads/2018/04/american-green-tree-frog.jpg",
//     program: "Awesome Trip",
//     country: "Italy",
//     countryCode: "ITA",
//     tripOrg: "University of Cool",
//     review: "This was an awesome trip! I'm so glad I went....!",
//     dateStart: "01/12/2016",
//     dateEnd: "05/02/2016"
// }).then(function (dbTest) {
//     console.log(dbTest)
// }).catch(function (err) {
//     console.log(err.message);
// });



// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
