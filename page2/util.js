/*
 * @Author: your name
 * @Date: 2019-11-08 20:01:30
 * @LastEditTime: 2019-11-08 20:03:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \fe-helper\fe-helper-store\p_infoPage\util.js
 */
export default {
  name: "util",
  // 节流函数
  throttle (fn, delay) {
    var timer;
    return function () {
      var _this = this;
      var args = arguments;
      if (timer) {
        return;
      }
      timer = setTimeout(function () {
        fn.apply(_this, args);
        timer = null; 
      }, delay)
    }
  },
}