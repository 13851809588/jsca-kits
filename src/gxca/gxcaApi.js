import merge from "lodash/merge";
import * as socketApi from "../util/socket";

const gxcaApi = {
  async getVersion(params) {
    let defaults = {
      method: "gxGetVersion"
    };
    params = params ? merge(defaults, params) : defaults;
    let response = await new Promise((resolve, reject) => {
      socketApi.sendMsg(params, function(data) {
        console.log(data);
        resolve(data);
      });
    });
    return response;
  },

  async gxGenRandom(params) {
    let defaults = {
      method: "gxGenRandom"
    };
    params = params ? merge(defaults, params) : defaults;
    let response = await new Promise((resolve, reject) => {
      socketApi.sendMsg(params, function(data) {
        console.log(data);
        resolve(data);
      });
    });
    return response;
  }

  
};

export default gxcaApi;
