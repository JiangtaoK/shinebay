import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import icon04 from '~/assets/icon-4.png';
import icon05 from '~/assets/icon-5.png';
import hat from '~/assets/hat.jpg';
import hand from '~/assets/hand.png';
import {Rate} from 'antd';
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
    console.info(this.state.pathname);
  }
  render() {
    return (
      <div className="cell1">
        <div className="show">
          <img src={hat} alt="" />
        </div>
        <div className="name">
          <p>NAME sdjkljsdkljlksn amenamena menamenamenamenamename
            NAMEsdjkljsdkljlksnamenamen amenamenamenamenamename</p>
        </div>
        <div className="price">
          <span>$ 55</span>
          <span className="old">$ 55</span>
          <span className="f-r">
            <span><img src={icon04} alt="" /></span>
            <span><img src={icon05} alt="" /></span>
          </span>
        </div>
        <div className="shipping">
          Free Shipping
        </div>
        <div className="mark">
          <span>
            <Rate defaultValue={4} />(4)
          </span>
          <span>
            <img src={hand} alt="" />1000
          </span>
        </div>
        <div style={{display: this.props.view ? '' : 'none'}}>
          <div className="button">
            {this.props.view || 'View Details'}
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Documentation);
// export default Documentation;
