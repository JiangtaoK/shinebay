import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
            <div className="forth t-a-c">ShineBay Terms of Service</div>
            <div className="content bg-trans p-t-10">
              <div className="m-b-30">
                <p className="content0">
                  <hr />
                  advertiser Disctosure at
                  Welcome to ShineBay. For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                </p>
                <p className="bold"> </p>
                <p className="content1">
                  Welcome to ShineBay. For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and
                  recommended products worldwide.Welcome to ShineBay.
                  For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and recommended products worldwide.</p>
                <p className="content1">
                  Welcome to ShineBay. For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and
                  recommended products worldwide.Welcome to ShineBay.
                  For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and recommended products worldwide.</p>
                <p className="content1">
                  Welcome to ShineBay. For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and
                  recommended products worldwide.Welcome to ShineBay.
                  For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and recommended products worldwide.</p>
                <p className="content1">
                  Welcome to ShineBay. For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and
                  recommended products worldwide.Welcome to ShineBay.
                  For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and recommended products worldwide.</p>
                <p className="content1">
                  Welcome to ShineBay. For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and
                  recommended products worldwide.Welcome to ShineBay.
                  For 20 years we have been your number 1 destination for premium beauty,
                  delivering the latest in innovative clinical skincare and luxury spa products.
                  We were one of the first online stores to offer dermatologist-created and recommended products worldwide.</p>
              </div>
              <p className="content0">
                <hr />
                advertiser Disctosure at
                Welcome to ShineBay. For 20 years we have been your number 1 destination for premium beauty,
                delivering the latest in innovative clinical skincare and luxury spa products.
              </p>
            </div>
            <div className="button enter" onClick={this.login}>
              Agree and return to the login page
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
