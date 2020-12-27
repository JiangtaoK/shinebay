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
    msg: ''
  }
  componentWillMount() {
    const {initalLogo} = this.props;
    initalLogo();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  signup = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/signup');
  }
  forgot = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/forgot');
  }
  policies = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/policies');
  }
  service = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/service');
  }
  login = () => {
    const {history, changeRoute} = this.props;
    const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (this.state.email.match(reg) === null) {
      this.setState({msg: 'The email address you entered were invalid'});
      return;
    }
    channel('signin', {email: this.state.email, password: this.state.password}, (res) => {
      if (res.status === 200) {
        localStorage.token = res.token;
        changeRoute();
        history.push('/topdeals');
      } else {
        this.setState({msg: res.msg});
      }
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
            <div className="title t-a-c">Welcome Back</div>
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
            <div className="button enter" onClick={this.login}>
              Login
            </div>
            <div className="">
              <span onClick={this.forgot}>Forgot Password?</span>
            </div>
            <div className="member t-a-c">
              Not a member? <span onClick={this.signup}>signup</span>
            </div>
            <div>
              <hr />
            </div>
            <div>
              By clicking Login,you have read and agree to the
              <span onClick={this.service}> ShineBay Term of Service</span> and
              <span onClick={this.policies}> Acceptable User Policies</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
