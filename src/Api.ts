import axios, {AxiosRequestConfig} from "axios";

const clientAxios = axios.create();
clientAxios.interceptors.response.use(
    res => res,
    err => {
        if(err.response.status > 300){
            throw new Error(typeof err.response.data === "object" ? err.response.data.message : err.response.statusText);
        }
        // console.log(err.response)
    }
)

function apiUrl(config: AxiosRequestConfig) {
    config.url = `/api${config.url}`;
    return config;
}

const API = {
    get: async function (url: string, data?: object) {
        const config: AxiosRequestConfig = {url, method: 'GET', data};
        return new Promise<any>((resolve, reject)=>{
            clientAxios(apiUrl(config))
                .then((r)=>resolve(r.data))
                .catch(reject)
        })
    },
    post: async function (url: string, data?: object) {
        const config: AxiosRequestConfig = {url, method: 'POST', data};
        return new Promise<any>((resolve, reject)=>{
            clientAxios(apiUrl(config))
                .then((r)=>resolve(r.data))
                .catch(reject)
        })
    },
    getModelList: function (model: string, filter: object) {
        return new Promise<any>((resolve, reject)=>{
            this.get(`/model/${model}`, filter)
                .then(resolve)
                .catch(reject)
        })

    }
}
export default API;