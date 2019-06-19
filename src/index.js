import gxcaApi from "./gxca/gxcaApi";
import jscaApi from "./jsca/jscaApi";

const getVersion = (url, params) => {
  return jscaApi.getVersion(url, params);
};

const login = (url, params) => {
  return jscaApi.login(url, params);
};

const signData = (url, params) => {
  return jscaApi.signData(url, params);
};

const getUserList = (url, params) => {
  return jscaApi.getUserList(url, params);
};

const exportUserCert = (url, params) => {
  return jscaApi.exportUserCert(url, params);
};

const syncTest = (url, params) => {
  jscaApi.synctest(url, params);
  console.log("kkkkkk");
};

const test = (url, params) => {
  return jscaApi.signData(url, params);
};

const getGxVersion = params => {
  return gxcaApi.getVersion();
};

const gxGenRandom = params => {
  return gxcaApi.gxGenRandom(params);
};

const put_debug = params => {
  return gxcaApi.put_debug(params);
};

const ShowErrMsg = params => {
  return gxcaApi.gxShowErrMsg(params);
};

const get_B64Signature = params => {
  return gxcaApi.get_B64Signature(params);
};

const get_B64Certificate = params => {
  return gxcaApi.get_B64Certificate(params);
};

const put_B64Certificate = params => {
  return gxcaApi.put_B64Certificate(params);
};

const get_B64Input = params => {
  return gxcaApi.get_B64Input(params);
};

const put_SelectCertAlways = params => {
  return gxcaApi.put_SelectCertAlways(params);
};

const put_FingerPrint = params => {
  return gxcaApi.put_FingerPrint(params);
};

const gxPKCS1_Silent = params => {
  return gxcaApi.gxPKCS1_Silent(params);
};

const gxPKCS1 = params => {
  return gxcaApi.gxPKCS1(params);
};

const gxPKCS7_Silent = params => {
  return gxcaApi.gxPKCS7_Silent(params);
};

const gxPKCS7 = params => {
  return gxcaApi.gxPKCS7(params);
};

const gxGetPCSCert = params => {
  return gxcaApi.gxGetPCSCert(params);
};

const gxSetServer_sign = params => {
  return gxcaApi.gxSetServer_sign(params);
};

const gxPCSP1 = params => {
  return gxcaApi.gxPCSP1(params);
};

const gxPCSP7 = params => {
  return gxcaApi.gxPCSP7(params);
};

const get_B64TimeStamp = params => {
  return gxcaApi.get_B64TimeStamp(params);
};

const get_StampTime = params => {
  return gxcaApi.get_StampTime(params);
};

const gxSetServer_Verify = params => {
  return gxcaApi.gxSetServer_Verify(params);
};

const gxVerifySignatrue = params => {
  return gxcaApi.gxVerifySignatrue(params);
};

const gxVerifyPKCS7 = params => {
  return gxcaApi.gxVerifyPKCS7(params);
};

const put_Debug_Verify = params => {
  return gxcaApi.put_Debug_Verify(params);
};

const gxShowErrMsg_Verify = params => {
  return gxcaApi.gxShowErrMsg_Verify(params);
};

const gxGetVersion_Verify = params => {
  return gxcaApi.gxGetVersion_Verify(params);
};

const put_Debug_Enc = params => {
  return gxcaApi.put_Debug_Enc(params);
};

const gxShowErrMsg_Enc = params => {
  return gxcaApi.gxShowErrMsg_Enc(params);
};

const gxGetVersion_Enc = params => {
  return gxcaApi.gxGetVersion_Enc(params);
};

const put_Base64Certificate = params => {
  return gxcaApi.put_Base64Certificate(params);
};

const get_B64SessionKey = params => {
  return gxcaApi.get_B64SessionKey(params);
};

const put_B64SessionKey = params => {
  return gxcaApi.put_B64SessionKey(params);
};

const get_B64Encrypted = params => {
  return gxcaApi.get_B64Encrypted(params);
};

const get_StrData = params => {
  return gxcaApi.get_StrData(params);
};

const put_FileName = params => {
  return gxcaApi.put_FileName(params);
};

const put_EncryptFileWithSK = params => {
  return gxcaApi.put_EncryptFileWithSK(params);
};

const put_FingerPrintInEnc = params => {
  return gxcaApi.put_FingerPrintInEnc(params);
};

const gxEncryptData = params => {
  return gxcaApi.gxEncryptData(params);
};

const gxEncryptFile = params => {
  return gxcaApi.gxEncryptFile(params);
};

const gxDecryptData = params => {
  return gxcaApi.gxDecryptData(params);
};

const gxDecryptFile = params => {
  return gxcaApi.gxDecryptFile(params);
};

const gxEncryptSessionKey = params => {
  return gxcaApi.gxEncryptSessionKey(params);
};

const gxDecryptSessionKey = params => {
  return gxcaApi.gxDecryptSessionKey(params);
};

const gxEncryptStr = params => {
  return gxcaApi.gxEncryptStr(params);
};

const gxDecryptStr = params => {
  return gxcaApi.gxDecryptStr(params);
};

const gxCipher = params => {
  return gxcaApi.gxCipher(params);
};

const gxDecipher = params => {
  return gxcaApi.gxDecipher(params);
};

const put_Debug_Cert = params => {
  return gxcaApi.put_Debug_Cert(params);
};

const gxShowErrMsg_Cert = params => {
  return gxcaApi.gxShowErrMsg_Cert(params);
};

const gxGetVersion_Cert = params => {
  return gxcaApi.gxGetVersion_Cert(params);
};

const get_CertInfo = params => {
  return gxcaApi.get_CertInfo(params);
};

const put_CertType = params => {
  return gxcaApi.put_CertType(params);
};

const put_SelCertAlways = params => {
  return gxcaApi.put_SelCertAlways(params);
};

const get_CertsCN = params => {
  return gxcaApi.get_CertsCN(params);
};

const gxEnumAllCerts = params => {
  return gxcaApi.gxEnumAllCerts(params);
};

const gxSetB64Cert = params => {
  return gxcaApi.gxSetB64Cert(params);
};

const gxSetCertFile = params => {
  return gxcaApi.gxSetCertFile(params);
};

const gxGetCertInfo = params => {
  return gxcaApi.gxGetCertInfo(params);
};

const gxGetCertInfoByOid = params => {
  return gxcaApi.gxGetCertInfoByOid(params);
};

const gxGetCertSubjectIdentifier = params => {
  return gxcaApi.gxGetCertSubjectIdentifier(params);
};

const gxCreateTimeStamp = params => {
  return gxcaApi.gxCreateTimeStamp(params);
};

const gxVerifyTimeStamp = params => {
  return gxcaApi.gxVerifyTimeStamp(params);
};

export default {
  getVersion,
  login,
  getUserList,
  exportUserCert,
  signData,
  syncTest,
  test,
  getGxVersion,
  gxGenRandom,
  put_debug,
  ShowErrMsg,
  get_B64Signature,
  get_B64Certificate,
  put_B64Certificate,
  get_B64Input,
  put_SelectCertAlways,
  put_FingerPrint,
  gxPKCS1_Silent,
  gxPKCS1,
  gxPKCS7_Silent,
  gxPKCS7,
  gxGetPCSCert,
  gxSetServer_sign,
  gxPCSP1,
  gxPCSP7,
  get_B64TimeStamp,
  get_StampTime,
  gxSetServer_Verify,
  gxVerifySignatrue,
  gxVerifyPKCS7,
  put_Debug_Verify,
  gxShowErrMsg_Verify,
  gxGetVersion_Verify,
  put_Debug_Enc,
  gxShowErrMsg_Enc,
  gxGetVersion_Enc,
  put_Base64Certificate,
  get_B64SessionKey,
  put_B64SessionKey,
  get_B64Encrypted,
  get_StrData,
  put_FileName,
  put_EncryptFileWithSK,
  put_FingerPrintInEnc,
  gxEncryptData,
  gxEncryptFile,
  gxDecryptData,
  gxDecryptFile,
  gxEncryptSessionKey,
  gxDecryptSessionKey,
  gxEncryptStr,
  gxDecryptStr,
  gxCipher,
  gxDecipher,
  put_Debug_Cert,
  gxShowErrMsg_Cert,
  gxGetVersion_Cert,
  get_CertInfo,
  put_CertType,
  put_SelCertAlways,
  get_CertsCN,
  gxEnumAllCerts,
  gxSetB64Cert,
  gxSetCertFile,
  gxGetCertInfo,
  gxGetCertInfoByOid,
  gxGetCertSubjectIdentifier,
  gxCreateTimeStamp,
  gxVerifyTimeStamp
};
