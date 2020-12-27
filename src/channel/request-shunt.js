import remote from './request-remote';
import local from './request-local';

const shunt = (url, data, success, fail, type, async) => {
  switch (type) {
    case 'self': local(url, data, success, fail, type, async); break;
    default: (type === 'self') && (type = ''); remote(url, data, success, fail, type, async);
  }
};

export default shunt;
