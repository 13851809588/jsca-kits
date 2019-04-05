import axios from 'axios';
import Promise from 'bluebird';
import qs from 'qs';

const http = axios.create({
    timeout: 1000 * 30,
    withCredentials: true
})

/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
})

/**
 * 响应拦截
 */
http.interceptors.response.use(response => {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, error => {
    return Promise.reject(error);
})

/**
 * http get 方式
 */
http.get = (url, params,contenType) => {
    params = params === undefined ? {} : params;
    const type = contenType === undefined ? 'json' : contenType;
    params = type === 'json' ? JSON.stringify(params) : qs.stringify(params);
    console.log(type);
    console.log(params);

    return new Promise((resolve, reject) => {
        http({
                url: url,
                method: 'get',
                params: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            })
    })
}

/**
 * http post 方式
 */
http.post = (url, params, contenType) => {
    params = params === undefined ? {} : params;
    const type = contenType === undefined ? 'json' : contenType;
    params = type === 'json' ? JSON.stringify(params) : qs.stringify(params);

    console.log(type);
    console.log(params);

    return new Promise((resolve, reject) => {
        http({
                url: url,
                method: 'post',
                data: params
            })
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error);
            })
    })
}

export default http;