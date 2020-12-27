import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div>
        <Head />
        <div className="login">
          <div className="container">
            <div className="forth t-a-c">User Policies</div>
            <div className="content ">
              Hi,The verification email was sent successfully <br />
              Please check the verification email in your mailbox to confirm the email
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
