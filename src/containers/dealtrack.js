import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Select} from 'antd';
import Charts from '../components/charts';
import channel from '../channel/channel';
import Head from '../components/navigation';
import * as homeActions from '../redux/reduces/home';

const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
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
        <div className="product withlist">
          <div className="container">
            <div className="title" style={{height: '40px'}}>
              <span>Deal Track</span>
            </div>
            <div className="content bg-trans">
              <textarea
                name=""
                id=""
                value=""
                placeholder="Deal track description"
              > </textarea>
              <hr color="#808080" style={{margin: '25px 0'}} />
              <div >
                <input
                  style={{width: '100%', textIndent: '5px'}}
                  placeholder="Please copy the web address of the product"
                  type="text"
                />
              </div>
              <div className="button" style={{width: '360px', margin: '25px 0 40px'}}>
                Commodity historical price query
              </div>
              <div className="content">
                <p style={{fontSize: '14px'}}>
                  Product address currently inquired：htts://www.amazon.com/apple
                </p>
                <p className="title" style={{fontSize: '20px', marginBottom: '25px'}}>
                  Historical price chart
                </p>
                <p className="t-a-c">
                  Apple iphone 11(A2223) 128G Black Mobile Unicom Telecom 4G Phone Dual SIM Dual Standby
                </p>
                <p className="t-a-c smaller">
                  Lowest in history:4739(2020-11-10) Current price:4739
                  <span className="button inverse">Direct link</span>
                </p>
                <Charts width={1180} height={450} />
                <p className="t-a-c smaller smaller2">
                  Analysis: The current 4739 yuan, the lowest in history.
                </p>
                <p className="t-a-l smaller smaller2">
                  Based on historical data analysis,we predict that there will be an increase in the future.
                  <span className="button inverse">Direct link</span>
                </p>
                <p className="title" style={{fontSize: '20px', marginBottom: '25px'}}>
                  History query record
                </p>
                <p>
                  1、Apple iPhone 11(A2223)128GB Black Mobile Unicom Telecom 4G Phone Dual SIM Dual Standy
                  <span className="del">delete</span>
                </p>
                <p>
                  2、Apple iPhone 11(A2222)128GB Black Mobile Unicom Telecom 4G Phone Dual SIM Dual Standy
                  <span className="del">delete</span>
                </p>
              </div>
              <div className="content" style={{marginTop: '30px'}}>
                <p className="title" style={{fontSize: '20px', marginBottom: '25px'}}>
                  Tired of missing out on great deals?
                </p>
                <p style={{color: '#808080', marginTop: '-25px'}}>
                  Tell us what you want to buy and we&apos;ll send you great deals that match!
                </p>
                <p style={{margin: '30px 0 25px'}}>
                  Add a Custom Deal Alert
                </p>
                <div className="track">
                  <div>
                    <div>Target</div>
                    <Select defaultValue="Hot Deals" style={{width: 180}} onChange={handleChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Hot Deals">Hot Deals</Option>
                    </Select>
                  </div>
                  <div>
                    <div>Notification Method</div>
                    <Select defaultValue="Email" style={{width: 180}} onChange={handleChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Email">Email</Option>
                    </Select>
                  </div>
                  <div>
                    <div>When</div>
                    <Select defaultValue="Instant" style={{width: 180}} onChange={handleChange}>
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Instant">Instant</Option>
                    </Select>
                  </div>
                </div>
                <div className="button" style={{width: '180px'}}>
                  Add Alert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
