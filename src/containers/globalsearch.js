import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Pagination} from 'antd';
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
    this.setState({index1: Math.min(this.state.index1, 8)});
  }
  next2 = () => {
    this.state.index2++;
    this.setState({index2: Math.min(this.state.index2, 8)});
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div>
        <Head />
        <div className="product">
          <div className="container">
            <div className="title">
              <span className="title" style={{fontSize: '18px', fontWeight: 'normal'}}>1-45 of over 70,000
                results for &quot;hat&quot;
              </span>
              <hr color="#ebebeb" />
            </div>
            <div className="title" style={{marginTop: '10px'}}>
              <span className="subtitle">
                <span>price and other details may vary based on size and color</span>
              </span>
            </div>
            <div className="content content3 bg-trans">
              <div className="list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
            <Pagination defaultCurrent={6} total={500} showSizeChanger={false} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
