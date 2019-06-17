import jscaApi from "./jsca/jscaApi";
import gxcaApi from "./gxca/gxcaApi";
import calibxApi from "./calibx/calibxApi";

const getVersion = (url, params) => {
  return jscaApi.getVersion(url, params);
}

const login = (url, params) => {
  return jscaApi.login(url, params);
}

const signData = (url,params) =>{
    return jscaApi.signData(url,params);
}

const getUserList =  (url,params) =>{
    return jscaApi.getUserList(url,params);
}

const exportUserCert = (url,params) =>{
    return jscaApi.exportUserCert(url,params);
}

const syncTest = (url,params) =>{
    jscaApi.synctest(url,params);
    console.log("kkkkkk")
}

const test = (url, params) => {
  return jscaApi.signData(url, params);
};

const getGxVersion = (params) => {
  return jscaApi.getGxVersion();
}

export default {
  getVersion,
  login,
  getUserList,
  exportUserCert,
  signData,
  syncTest,
  test,
  getGxVersion
};
