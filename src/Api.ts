import axios from "axios";

const API = {
    async get (url: string, data: object) {
        return this.fetch('/api' + url, data, 'GET')
    },
    async post (url: string, data: object) {
        return this.fetch('/api' + url, data, 'POST')
    },
    async fetch (url: string, data: object, method: string) {
        let res = {data:{}};
        try {
            if (method === 'POST') {
                res = await axios.post(url, data)
            } else {
                res = await axios(url)
            }
        } catch (error) {
            console.log(url, ': AXIOS ERROR', error);

        }
        return res.data;
    }
}

export default API;