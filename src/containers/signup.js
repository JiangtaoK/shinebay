import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import error from '~/assets/error.png';
import google from '~/assets/google.png';
import facebook from '~/assets/facebook.png';
import channel from '../channel/channel';
import Head from '../components/head';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
    email: '',
    password: '',
    repassword: '',
    msg: ''
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
  forgot = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/forgot');
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
            <div style={{display: this.state.msg ? '' : 'none'}} className="msg">
              <img src={error} alt="" />
              <div> {this.state.msg}</div>
            </div>
            <div className="title t-a-c">Join Shinebay</div>
            <div className="subtitle t-a-c">
              Be a Smarter Buyer
            </div>
            <div className="button facebook">
              <img src={facebook} alt="" />
              <div>Continue width Facebook </div>
            </div>
            <div className="button google">
              <img src={google} alt="" />
              <div>Continue width Google </div>
            </div>
            <div className="or">
              <div className="o">OR </div>
              <div className="line"> </div>
            </div>
            <div>
              <input
                type="text"
                onBlur={(e) => {
                  this.state.email = e.target.value;
                }}
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                type="password"
                onBlur={(e) => {
                  this.state.password = e.target.value;
                }}
                placeholder="Password"
              />
            </div>
            <div>
              <input
                type="password"
                onBlur={(e) => {
                  this.state.repassword = e.target.value;
                }}
                placeholder="Enter the password again"
              />
            </div>
            <div
              className="button enter"
              onClick={(e) => {
                const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
                if (this.state.email.match(reg) === null) {
                  this.setState({msg: 'The email address you entered were invalid'});
                } else if (this.state.password === '') {
                  this.setState({msg: 'Please enter the password'});
                } else if (this.state.password !== this.state.repassword) {
                  this.setState({msg: 'Two input password inconsistent, please confirm to re-enter'});
                } else {
                  channel('checkEmail', {email: this.state.email}, (res) => {
                    if (res.used) {
                      this.setState({msg: 'The mailbox has been occupied '});
                      return;
                    }
                    channel('signup', {email: this.state.email, password: this.state.password}, (re) => {
                      console.info(this.state.email);
                      this.login();
                    });
                  });
                }
              }}
            >
              Signup
            </div>
            <div className="">
              <span onClick={this.forgot}>Forgot Password?</span>
            </div>
            <div className="member t-a-c">
              Already a member? <span onClick={this.login}>Login</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
