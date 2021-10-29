import axios from "axios";

export default {
    get: async function (url: string, data: object) {
        return this.fetch('/api' + url, data, 'GET')
    },
    post: async function (url: string, data: object) {
        return this.fetch('/api' + url, data, 'POST')
    },
    fetch: async function (url: string, data: object, method: string) {
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