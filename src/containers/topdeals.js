import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import icon06 from '~/assets/icon-6.png';
import preImg from '~/assets/p-1.png';
import nextImg from '~/assets/n-1.png';
import Product from '../components/product';
import channel from '../channel/channel';
import Head from '../components/navigation';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
    index1: 0,
    index2: 0
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
  pre1 = () => {
    this.state.index1--;
    this.setState({index1: Math.max(this.state.index1, 0)});
  }
  pre2 = () => {
    this.state.index2--;
    this.setState({index2: Math.max(this.state.index2, 0)});
  }
  next1 = () => {
    this.state.index1++;
    this.setState({index1: Math.min(this.state.index1, 4)});
  }
  next2 = () => {
    this.state.index2++;
    this.setState({index2: Math.min(this.state.index2, 4)});
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div>
        <Head />
        <div className="product">
          <div className="container">
            <div className="title">
              <span className="title">Featured Deals</span>
              <span className="subtitle">
                <span>Advertiser Disclosure</span>
                <span><img src={icon06} alt="" /></span>
              </span>
            </div>
            <div className="content">
              <div className="list">
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
            <div className="title">
              <span className="title">Just For You</span>
              <span className="subtitle">
                <span>About these deals</span>
                <span><img src={icon06} alt="" /></span>
              </span>
            </div>
            <div className="content content2 bg-trans">
              <div className="pre" onClick={this.pre1} >
                <img src={preImg} alt="" />
              </div>
              <div className="list" style={{marginLeft: `${-this.state.index1 * 236}px`}}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
              <div className="next" onClick={this.next1}>
                <img src={nextImg} alt="" />
              </div>
            </div>
            <div className="title">
              <span className="title">You Have Missed</span>
            </div>
            <div className="content content2 bg-trans">
              <div className="pre" onClick={this.pre2} >
                <img src={preImg} alt="" />
              </div>
              <div className="list" style={{marginLeft: `${-this.state.index2 * 236}px`}}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
              <div className="next" onClick={this.next2}>
                <img src={nextImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
