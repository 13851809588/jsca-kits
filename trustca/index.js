import $ from 'jquery'
import http from './util/http'

const add = (a, b) => {
    return a + b
};

const multiply = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(input * input)
        }, 100);
    })
};

const getbook = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            type:"get",
            url:"http://localhost:3000/users1",
            data:{user_id:1},
            success:function(data){
                resolve(data);
            },
            error:function(error) {
                reject(error);
            }
        })
    })
}

const signdata = (url,data)=>{
    return http.get(url,data);
}

const getbook2 = () => {
    return signdata('http://localhost:3000/users',{type:2,postid:1000},'kk');
}



const getbook22 = function (data) {
    return new Promise(function (resolve, reject) {
        axios({
            url: 'http://localhost:3000/users',
            method: 'get',
            params: {
                type: 2,
                postid: 1000
            }
        }).then(function (res) {
            resolve(res.data);
        }).catch(function (error) {
            reject(error);
        })
    })
}

// var getbook2 = function () {
//     return new Promise(function (resolve, reject) {
//         http.get('http://localhost:3000/users')
//             .then(function (res) {
//                 resolve(res.data);
//             }).catch(function (error) {
//                 reject(error);
//             })
//     })
// }

export default {
    add,
    multiply,
    getbook,
    getbook2
};