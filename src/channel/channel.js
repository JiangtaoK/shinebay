import infoChannel from './request-shunt';

const channel = (url, data, success, fail, auto) => {
  let _url = '';
  const _data = data;
  const _success = success;
  let _method = 'get';
  const _fail = fail;
  const async = true;
  switch (url) {
    case 'get_user_info': _url = '/api/user'; _method = 'get'; break;
    case 'signup': _url = '/api/signup'; _method = 'post'; break;
    case 'signin': _url = '/api/signin'; _method = 'get'; break;
    case 'checkEmail': _url = '/api/checkEmail'; _method = 'get'; break;
    case 'report_error': _url = ''; _method = 'POST'; break;
    default: _url = url; break;
  }
  _url && (infoChannel(_url, _data, _success, _fail, _method, async));
};
export default channel;
