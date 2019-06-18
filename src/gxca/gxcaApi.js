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
  },

  async put_debug(params) {
    let defaults = {
      method: "put_debug"
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

  async gxShowErrMsg(params) {
    let defaults = {
      method: "gxShowErrMsg"
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

  async get_B64Signature(params) {
    let defaults = {
      method: "get_B64Signature"
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

  async get_B64Certificate(params) {
    let defaults = {
      method: "get_B64Certificate"
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

  /**
   * 
   * @param {cert: *} params 
   */
  async put_B64Certificate(params) {
    let defaults = {
      method: "put_B64Certificate"
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

  async get_B64Input(params) {
    let defaults = {
      method: "get_B64Input"
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

  /**
   * 
   * @param {select:*} params 
   */
  async put_SelectCertAlways(params) {
    let defaults = {
      method: "put_SelectCertAlways"
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

  /**
   * 
   * @param {fingerprint:*} params 
   */
  async put_FingerPrint(params) {
    let defaults = {
      method: "put_FingerPrint"
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

  /**
   * 
   * @param {srcdata:*,datatype:*,certcn:*,usrpin:*} params 
   */
  async gxPKCS1_Silent(params) {
    let defaults = {
      method: "gxPKCS1_Silent"
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

    /**
   * 
   * @param {srcdata:*,datatype:*} params 
   */
  async gxPKCS1(params) {
    let defaults = {
      method: "gxPKCS1"
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

  /**
   * 
   * @param {srcdata:*,certcn:*,usrpin:*} params 
   */
  async gxPKCS7_Silent(params) {
    let defaults = {
      method: "gxPKCS7_Silent"
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

  /**
   * 
   * @param {srcdata:*} params 
   */
  async gxPKCS7(params) {
    let defaults = {
      method: "gxPKCS7"
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

  async gxGetPCSCert(params) {
    let defaults = {
      method: "gxGetPCSCert"
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

  /**
   * 
   * @param {server:*,port:*} params 
   */
  async gxSetServer_sign(params) {
    let defaults = {
      method: "gxSetServer_sign"
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

  /**
   * 
   * @param {data:*,pwd:*} params 
   */
  async gxPCSP1(params) {
    let defaults = {
      method: "gxPCSP1"
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

  async gxPCSP7(params) {
    let defaults = {
      method: "gxPCSP7"
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

  async get_B64TimeStamp(params) {
    let defaults = {
      method: "get_B64TimeStamp"
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

  async get_StampTime(params) {
    let defaults = {
      method: "get_StampTime"
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

  async gxSetServer_Verify(params) {
    let defaults = {
      method: "gxSetServer_Verify"
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

  /**
   * 
   * @param {srcdata:*,certdata:*,signdata:*,type:*} params 
   */
  async gxVerifySignatrue(params) {
    let defaults = {
      method: "gxVerifySignatrue"
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

  /**
   * 
   * @param {srcdata:*} params 
   */
  async gxVerifyPKCS7(params) {
    let defaults = {
      method: "gxVerifyPKCS7"
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

  /**
   * 
   * @param {data:*} params 
   */
  async put_Debug_Verify(params) {
    let defaults = {
      method: "put_Debug_Verify"
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

  async gxShowErrMsg_Verify(params) {
    let defaults = {
      method: "gxShowErrMsg_Verify"
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

  async gxGetVersion_Verify(params) {
    let defaults = {
      method: "gxGetVersion_Verify"
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

  /**
   * 
   * @param {data:*} params 
   */
  async put_Debug_Enc(params) {
    let defaults = {
      method: "put_Debug_Enc"
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

  async gxShowErrMsg_Enc(params) {
    let defaults = {
      method: "gxShowErrMsg_Enc"
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

  async gxGetVersion_Enc(params) {
    let defaults = {
      method: "gxGetVersion_Enc"
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

  /**
   * 
   * @param {certdata:*} params 
   */
  async put_Base64Certificate(params) {
    let defaults = {
      method: "put_Base64Certificate"
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

  async get_B64SessionKey(params) {
    let defaults = {
      method: "get_B64SessionKey"
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

  /**
   * 
   * @param {sessionKey:*} params 
   */
  async put_B64SessionKey(params) {
    let defaults = {
      method: "put_B64SessionKey"
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

  async get_B64Encrypted(params) {
    let defaults = {
      method: "get_B64Encrypted"
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

  async get_StrData(params) {
    let defaults = {
      method: "get_StrData"
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

  /**
   * 
   * @param {inFilePath:*} params 
   */
  async put_FileName(params) {
    let defaults = {
      method: "put_FileName"
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

  /**
   * 
   * @param {encryptFileWithSK:*} params 
   */
  async put_EncryptFileWithSK(params) {
    let defaults = {
      method: "put_EncryptFileWithSK"
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

  /**
   * 
   * @param {fingerPrint:*} params 
   */
  async put_FingerPrintInEnc(params) {
    let defaults = {
      method: "put_FingerPrintInEnc"
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

  /**
   * 
   * @param {srcdata:*,len:*} params 
   */
  async gxEncryptData(params) {
    let defaults = {
      method: "gxEncryptData"
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

  /**
   * 
   * @param {inFilePath:*,destFilePath:*} params 
   */
  async gxEncryptFile(params) {
    let defaults = {
      method: "gxEncryptFile"
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

  /**
   * 
   * @param {cipdata:*,len:*} params 
   */
  async gxDecryptData(params) {
    let defaults = {
      method: "gxDecryptData"
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

  /**
   * 
   * @param {inFilePath:*,destFilePath:*} params 
   */
  async gxDecryptFile(params) {
    let defaults = {
      method: "gxDecryptFile"
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

  async gxEncryptSessionKey(params) {
    let defaults = {
      method: "gxEncryptSessionKey"
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

  async gxDecryptSessionKey(params) {
    let defaults = {
      method: "gxDecryptSessionKey"
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

  /**
   * 
   * @param {srcdata:*} params 
   */
  async gxEncryptStr(params) {
    let defaults = {
      method: "gxEncryptStr"
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

  /**
   * 
   * @param {cipdata:*} params 
   */
  async gxDecryptStr(params) {
    let defaults = {
      method: "gxDecryptStr"
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

  /**
   * 
   * @param {srcdata:*,spwd:*,type:*} params 
   */
  async gxCipher(params) {
    let defaults = {
      method: "gxCipher"
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

  /**
   * 
   * @param {cipdata:*,spwd:*,type:*} params 
   */
  async gxDecipher(params) {
    let defaults = {
      method: "gxDecipher"
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

  /**
   * 
   * @param {data:*} params 
   */
  async put_Debug_Cert(params) {
    let defaults = {
      method: "put_Debug_Cert"
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

  async gxShowErrMsg_Cert(params) {
    let defaults = {
      method: "gxShowErrMsg_Cert"
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

  async gxGetVersion_Cert(params) {
    let defaults = {
      method: "gxGetVersion_Cert"
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

  async get_CertInfo(params) {
    let defaults = {
      method: "get_CertInfo"
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

  /**
   * 
   * @param {type:*} params 
   */
  async put_CertType(params) {
    let defaults = {
      method: "put_CertType"
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

  /**
   * 
   * @param {sel:*} params 
   */
  async put_SelCertAlways(params) {
    let defaults = {
      method: "put_SelCertAlways"
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

  async get_CertsCN(params) {
    let defaults = {
      method: "get_CertsCN"
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

  async gxEnumAllCerts(params) {
    let defaults = {
      method: "gxEnumAllCerts"
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

  /**
   * 
   * @param {certdata:*} params 
   */
  async gxSetB64Cert(params) {
    let defaults = {
      method: "gxSetB64Cert"
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

  /**
   * 
   * @param {certFile:*} params 
   */
  async gxSetCertFile(params) {
    let defaults = {
      method: "gxSetCertFile"
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

  /**
   * 
   * @param {certtype:*} params 
   */
  async gxGetCertInfo(params) {
    let defaults = {
      method: "gxGetCertInfo"
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

  /**
   * 
   * @param {certoid:*} params 
   */
  async gxGetCertInfoByOid(params) {
    let defaults = {
      method: "gxGetCertInfoByOid"
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

  async gxGetCertSubjectIdentifier(params) {
    let defaults = {
      method: "gxGetCertSubjectIdentifier"
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

  /**
   * 
   * @param {src:*,dataType:*} params 
   */
  async gxCreateTimeStamp(params) {
    let defaults = {
      method: "gxCreateTimeStamp"
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

  /**
   * 
   * @param {src:*,dataType:*,timestamp:*} params 
   */
  async gxVerifyTimeStamp(params) {
    let defaults = {
      method: "gxVerifyTimeStamp"
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


};

export default gxcaApi;
