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
    email: '',
    checkout: false,
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
  info = () => {
    channel('get_user_info', {}, (res) => {
    });
  }
  checkout = () => {
    const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (this.state.email.match(reg) === null) {
      this.setState({msg: 'The email address you entered were invalid'});
      return;
    }
    channel('checkEmail', {email: this.state.email}, (res) => {
      if (res.used) {
        this.setState({checkout: true});
      } else {
        const {history, changeRoute} = this.props;
        changeRoute();
        history.push('/signup');
      }
    });
  }
  change = (event) => {
    this.state.email = event.target.value;
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
            {this.state.checkout ?
              <div className="container">
                <div className="title t-a-c">Retrieve Password</div>
                <div className="third t-a-c">
                  Hi,{this.state.email},The verification email was sent successfully <br />
                  Please check the verification email in your mailbox to confirm the email
                </div>
                <div className="button enter" onClick={this.login}>
                  Login email to complete verification
                </div>
              </div> :
              <div className="container">
                <div className="title t-a-c">Retrieve Password</div>
                <div className="subtitle t-a-c">
                  Please enter your email address below and we&#39;ll email
                  you instructions to reset it</div>
                <div>
                  <input type="email" onChange={this.change} placeholder="email address" />
                </div>
                <div className="button enter" onClick={this.checkout}>
                  Next
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
