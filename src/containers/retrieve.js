import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import error from '~/assets/error.png';
import channel from '../channel/channel';
import Head from '../components/head';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  login = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/login');
  }
  info = () => {
    channel('get_user_info', {}, (res) => {
    });
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div>
        <Head />
        <div className="login">
          <div className="container">
            <div className="msg">
              <img src={error} alt="" />
              <div>The email address or password you entered were invalid </div>
            </div>
            <div className="container">
              <div className="title t-a-c">Retrieve Password</div>
              <div>
                <input type="password" placeholder="Enter a new password" />
              </div>
              <div>
                <input type="password" placeholder="Enter a new password again" />
              </div>
              <div className="button enter">
                Reset Password
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
