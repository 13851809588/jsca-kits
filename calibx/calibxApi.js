import http from '../util/http'

const calibxApi = {

    signdata(url,data){
        return http.get(url,data);
    }

}

export default calibxApi
