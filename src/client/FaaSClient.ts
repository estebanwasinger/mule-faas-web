import axios from "axios";
import type {AxiosResponse} from "axios"

let BASE_URL : String = 'https://mule-faas-production.up.railway.app'
// let BASE_URL : String = 'http://0.0.0.0:8080'

export class FaasClient {

    constructor();
    constructor(baseUrl : String);
    public constructor(...params: any[]) {
        if (params.length === 1) {
            BASE_URL = params[0];
        } else {
             if(import.meta.env.API_URL != null) {
                BASE_URL = import.meta.env.API_URL;
            };
        }
    }

    getBaseUrl() {
        return BASE_URL;
    }

    listApps() {
        console.log(import.meta.env)
        console.log(import.meta)
        return axios.get(`${BASE_URL}/api/apps`)
    }

    addApp(appName : String, urlName : String, appCode : String) {
        return axios.post(`${BASE_URL}/api/apps`, {
            name : appName,
            url : urlName,
            app : appCode,
        })
    }

    start(appName : String) {
        return axios.get(`${BASE_URL}/api/apps/${appName}/start`)
    }

    stop(appName : String)  {
        return axios.get(`${BASE_URL}/api/apps/${appName}/stop`)
    }

    remove(appName: String) {
        return axios.delete(`${BASE_URL}/api/apps/${appName}`)
    }

}

export default FaasClient