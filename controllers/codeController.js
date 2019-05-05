const axios = require("axios")

module.exports = {
    countryCodeFind: function (req, res) {
        var BASEURL = "https://restcountries.eu/rest/v2/name/";
        // var query = req.body.country;
        var query = req.params.country;
        console.log(query)
        axios.get(BASEURL + query)
            // .then(res => console.log(res.data[0].alpha2Code))
            .then(result => {
                let cCode = result.data[0].alpha2Code;
                res.json(cCode)
            })
    },
    getGenericAvatar: function (req, res) {
        var UrlStart = "https://ui-avatars.com/api/";
        var newName = req.body.displayName;
        console.log(newName);
        var newAvatar = `${UrlStart}?name=${newName}`
        res.json(newAvatar)
    }
    // we might not actually need this on the backend
}

