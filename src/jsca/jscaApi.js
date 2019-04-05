import http from '../util/http'

const jscaApi = {

    signdata(url,data){
        return http.get(url,data);
    }

}

export default jscaApi
