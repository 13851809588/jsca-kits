!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jQuery"),require("bluebird"),require("axios")):"function"==typeof define&&define.amd?define(["jQuery","bluebird","axios"],t):"object"==typeof exports?exports.JscaPKI=t(require("jQuery"),require("bluebird"),require("axios")):e.JscaPKI=t(e.jQuery,e.Promise,e.axios)}(this,function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(r(1));var n=o(r(2));o(r(3));function o(e){return e&&e.__esModule?e:{default:e}}t.default={add:function(e,t){return e+t},multiply:function(e){return new n.default(function(t,r){setTimeout(function(){t(e*e)},100)})}},e.exports=t.default},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r}])});