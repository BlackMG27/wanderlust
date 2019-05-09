import axios from "axios";

export default {

    createReview: function (query) {

        return axios.post("/api/review", data);
    },

    showReview: function (id) {

        return axios.post("/api/review/" + id)
    },

    findAllCodes: function () {
        return axios.get("/api/review/code/all")
    },

    getCountryReviews: function (id) {
        return axios.get("/api/review/list/" + id)
    },

    grabCountryCode: function (query) {
        return axios.get("/api/review/grab/" + query)
    },

    getProfile: function (id) {
        return axios.get("/api/users/pop/" + id)
    },
    archiveReview: function (id) {
        return axios.post("/api/review/archive/" + id)
    },
    editReview: function (query) {

        return axios.put("/api/review/edit", query);
    }
}
