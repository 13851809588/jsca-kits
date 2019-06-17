import websocket from '../util/socket'

const gxcaApi = {
  getVersion(params) {
    let defaults = {
      method: "gxGetVersion"
    };
    params = params ? merge(defaults, params) : defaults;
    websocket.sendMsg(params,function(data){
      new Promise(function(resolve, reject) {
        return resolve(data);
      })
    })
  }

}

export default gxcaApi
