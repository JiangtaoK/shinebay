import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Icon, {AudioOutlined, UserOutlined, DownOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {Menu, Dropdown, Input} from 'antd';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';

const {Search} = Input;
@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Documentation extends Component {
  state = {
    pathname: 'login'
  };
  componentWillMount() {
    const {history} = this.props;
    this.state.pathname = history.location.pathname;
    console.info(this.state.pathname);
  }
  topdeals = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/topdeals');
  }
  withlist = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/withlist');
  }
  dealtrack = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/dealtrack');
  }
  onSearch = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/globalsearch');
  }
  sigout = () => {
    localStorage.token = '';
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/login');
  }
  render() {
    return (
      <div className="head">
        <div className="container">
          <div><img src={logo} alt="" /> </div>
          <div className="globalsearch"> <Search
            placeholder="Search deals,coupons"
            allowClear
            onSearch={this.onSearch}
            size="large"
            style={{width: 440, height: 40}}
          />
          </div>
          <div className="menu" style={{marginRight: 0, flexBasis: '400px'}}>
            <div onClick={this.topdeals} className={this.state.pathname === '/topdeals' ? 'current' : ''}>Top Deals <div className="acher"> </div></div>
            <div onClick={this.withlist} className={this.state.pathname === '/withlist' ? 'current' : ''}>With List<div className="acher"> </div></div>
            <div onClick={this.dealtrack} className={this.state.pathname === '/dealtrack' ? 'current' : ''}>Deal Track <div className="acher"> </div></div>
            <div>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item>
                      <a target="_blank" rel="noopener noreferrer" onClick={this.sigout}>
                        Sigout
                      </a>
                    </Menu.Item>
                  </Menu>
                }
                placement="bottomRight"
              >
                <Icon component={UserOutlined} />
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Documentation);
// export default Documentation;
