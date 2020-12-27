import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';

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
  }
  login = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/login');
  }
  about = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/about');
  }
  render() {
    const {Documentations} = this.state;
    return (
      <div className="head">
        <div className="container">
          <div><img src={logo} alt="" /> </div>
          <div className="menu">
            <div onClick={this.login} className={this.state.pathname === '/login' ? 'current' : ''}>
              Home <div className="acher"> </div></div>
            <div onClick={this.login}>Card library <div className="acher"> </div></div>
            <div onClick={this.login}>Creation Desk <div className="acher"> </div></div>
            <div onClick={this.about} className={this.state.pathname === '/about' ? 'current' : ''}>
              About us <div className="acher"> </div></div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Documentation);
// export default Documentation;
