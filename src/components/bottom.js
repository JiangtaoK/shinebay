import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logoB from '~/assets/bottom-logo.png';
import chrome from '~/assets/chrome.png';
import googleplay from '~/assets/googleplay.png';
import appstore from '~/assets/appstore.png';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class Documentation extends Component {
  state = {
  };
  render() {
    const {Documentations} = this.state;
    return (
      <div className="bottom">
        <div className="main">
          <div className="container">
            <div className="list">
              <div>Follow Us</div>
              <div>Twitter</div>
              <div>Facebook</div>
            </div>
            <div className="list">
              <div>About Us</div>
              <div>FAQ</div>
              <div>Advertising Opportunites</div>
              <div>Careers</div>
              <div>Contact Us</div>
            </div>
            <div className="list">
              <div>More</div>
              <div>Deal Alerts</div>
              <div>Slickdeals Live</div>
              <div>Cyber Monday Deals2020</div>
            </div>
            <div className="list">
              <div>Legai</div>
              <div>Privacy Policy</div>
              <div>Other Terms and Policcies</div>
              <div>Interest-Based Ads</div>
              <div>Do Not Sell My Personal InforMation</div>
              <div>Website Accessibility</div>
            </div>
            <div className=" store">
              <div><div><img src={chrome} alt="" /></div><div>Chrome Web Store</div></div>
              <div><div><img src={googleplay} alt="" /></div><div>Google Play</div></div>
              <div><div><img src={appstore} alt="" /></div><div>App Store</div></div>
            </div>
          </div>
        </div>
        <div className="feet">
          <div className="container">
            <div><img src={logoB} alt="" /> </div>
            <div className="copyright">
              Copyright 2020-2021.shineBay,LLC.All Right Reserverd.Resibonsive | Mobile | Classic
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Documentation);
