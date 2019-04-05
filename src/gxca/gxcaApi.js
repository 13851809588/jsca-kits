import http from '../util/http'

const gxcaApi = {

    signdata(url,data){
        return http.get(url,data);
    }

}

export default gxcaApi
