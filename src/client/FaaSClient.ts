import axios from "axios";
import type {AxiosResponse} from "axios"

export interface AppDescription {
    name: String,
    app : String
}

let BASE_URL : String = 'http://0.0.0.0:8080'

class FaasClient {

    constructor();
    constructor(baseUrl : String);
    public constructor(...params: any[]) {
        if (params.length === 1) {
            BASE_URL = params[0];
        } else {
            BASE_URL = 'http://0.0.0.0:8080'
        }
    }



    listApps() {
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

}

export default FaasClient