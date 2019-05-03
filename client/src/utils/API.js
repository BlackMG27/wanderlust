import axios from "axios";

export default {

    createReview: function (query) {
        let data = { data: query };
        console.log("data", data);
        return axios.post("/api/review", data);
    },

    showReview: function (id) {
        //let data = {data: query};
        //console.log("data", data);
        return axios.get("/api/review/" + id)
    }

}
