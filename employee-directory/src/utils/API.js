import axios from "axios";
const BASEURL = "https://www.randomapi.com/?t=";
const APIKEY = "&apikey=PG8I-ZGN2-DDVL-FM0Z";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};