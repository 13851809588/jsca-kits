import http from "../util/http";
import * as socketApi from '../util/socket';
import merge from "lodash/merge";
import $ from "jquery";

const jscaApi = {
  // 获取接口版本信息
  getVersion(url, params) {
    let defaults = {
      url: "GetVersion"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // 证书登录
  login(url, params) {
    let defaults = {
      url: "login"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // 设置签名算法
  setSignMethod(url, params) {
    let defaults = {
      url: "SetSignMethod"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // 获得当前签名算法
  getSignMethod(url, params) {
    let defaults = {
      url: "GetSignMethod"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // 设置加密算法
  SetEncryptMethod(url, params){
    let defaults = {
      url: "SetEncryptMethod"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // 获得加密算法
  GetEncryptMethod(url, params){
    let defaults = {
      url: "GetEncryptMethod"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // 获得证书列表
  getUserList(url, params) {
    let defaults = {
      url: "GetUserList"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // 导出用户签名证书
  exportUserCert(url, params) {
    let defaults = {
      url: "ExportUserCert"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  // PKCS#1签名
  signData(url, params) {
    let defaults = {
      url: "SignData"
    };
    params = params ? merge(defaults, params) : defaults;
    return http.post(url, params);
  },

  async synctest(url, params) {
    let obj = {name:"yajun"};
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("run timeout.....");
        resolve("timeout");
      }, 1000 * 20);
    });
    console.log(" timout end.....");
  },

  ajaxTest(url, params) {
    let defaults = {
      url: "GetVersion"
    };
    params = params ? merge(defaults, params) : defaults;
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        data: JSON.stringify(params),
        success: function(data) {
          console.log(data);
          resolve(data);
        },
        error: function(error) {
          console.log(error);
          reject(error);
        }
      });
    });
  }

};

export default jscaApi;
