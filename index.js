import jscaApi from './jsca/jscaApi'
import gxcaApi from './gxca/gxcaApi'
import calibxApi from './calibx/calibxApi'

const getJsca = (url,params) => {
    return jscaApi.signdata(url,params);
}

const getGxca = (url,params) => {
    return gxcaApi.signdata(url,params);
}

const getCalibx = (url,params) => {
    return calibxApi.signdata(url,params);
}

export default {
    getJsca,
    getGxca,
    getCalibx
};