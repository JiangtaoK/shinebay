import $ from 'jquery';

const ajax = (url, data, success, type, async, fail) => {
  /*-----调用本地---------*/
  let _url = url;
  let _array = _url.split('//');
  _array.splice(0, 1);
  _url = _array.join('//');
  _array = _url.split('/');
  _array.splice(-1, 1);
  _array.splice(0, 1);
  _url = `${_array.join('/')}.json`;
  $.ajax({
    type: 'get',
    async: false,
    url: `/response/${_url}`,
    success: (_data, status) => {
      if (_data.status === 'success') {
        _data.result ? success(_data.result) : success(_data);
      } else {
        success(_data);
      }
    },
    error: (_data) => {
      fail ? fail(_data) : '';
    }
  });
};

export default ajax;
