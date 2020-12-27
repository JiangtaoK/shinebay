import $ from 'jquery';

const scope = 'http://127.0.0.1:5650';
// const scope = 'http://dealpro.westus2.cloudapp.azure.com:5650';

const ajax = (url, data, success, fail, type, async) => {
  $.ajax({
    type: type || 'get',
    // async: async,
    dataType: 'json',
    // timeout:url.indexOf('get_video_url')>-1?20*1000:60*1000,
    // crossDomain: true,
    // xhrFields : {
    //     withCredentials: stager
    // },
    // headers: {token: sessionStorage.signature || ''},
    headers: {Authorization: localStorage.token || ''},
    // contentType: 'application/json',
    url: `${scope}${url}`,
    // xhrFields: {
    //     withCredentials: true
    // },
    // crossDomain: true,
    data: data || {},
    success: (_data) => {
      success(_data);
    },
    error: (_data) => {
      fail(_data);
    }
  });
};

export default ajax;
