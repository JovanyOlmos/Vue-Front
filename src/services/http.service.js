import axios from "axios"

const uri = "http://localhost:8080/";

export default {
    async get(route) {
        return await axios.get(uri + route);
    },
    async post(route, body) {
        return await axios.post(uri + route, body);
    },
    async delete(route, id) {
        return await axios.delete(uri + route + "?id=" + id);
    }
}