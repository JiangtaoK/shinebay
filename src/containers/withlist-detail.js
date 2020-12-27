import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import preImg from '~/assets/p-1.png';
import nextImg from '~/assets/n-1.png';
import {Radio, Checkbox} from 'antd';
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
        <div className="product withlist">
          <div className="container">
            <div className="title" style={{height: '55px'}}>
              <span>Your Lists</span>
              <span className="subtitle">
                <span>  Shopping List</span>
              </span>
            </div>
            <div className="content bg-trans">
              <textarea
                name=""
                id=""
                placeholder="Wish list description"
              > </textarea>
              <div className="button">
                Import public Amazon Wish List
              </div>
              <hr color="#808080" />
              <div>
                <p>
                  You can creat price watches of all the products
                  on your Amazon Wish List(existing price watches
                  will not be overwritten).The process is simple and just takes two steps.
                </p>
                <p>
                  Open the Amazon Wish List page and navigate to
                  the Amazon Wish you want to import by clicking on
                  its name in the left navigation bar.Once done you
                  should see something like .../wishlist/1T2H314586FGG/...in
                  your current URL.Now simply copy the whole URL into thisfield:
                </p>
              </div>
              <div className="dis-flex">
                <input type="text" /><span className="button inverse">SUBMIT</span>
              </div>
              <hr color="#808080" />
              <div>
                <p>
                  Found items on your Wish List.Go on by setting your tracking options.
                </p>
                <p>
                  The settings below apply for all items on your list.You can set individual
                  product settings late via Track&gt;Tracking Overview.
                </p>
                <p>
                  Specify your desired price change in percent.
                </p>
                <p>
                  You can track Amazon and its Marketplace New and Used offers separately:
                </p>
              </div>
              <div className="track">
                <div>
                  <div>Amazon.com:</div>
                  <div><input type="text" placeholder="not tracked" />% <Radio defaultChecked>or less</Radio></div>
                </div>
                <div>
                  <div>New:</div>
                  <div><input type="text" placeholder="not tracked" />% <Radio defaultChecked>or less</Radio></div>
                </div>
                <div>
                  <div>Used:</div>
                  <div><input type="text" placeholder="not tracked" />% <Radio defaultChecked>or less</Radio></div>
                </div>
              </div>
              <div className="title">
                An example:
              </div>
              <div className="content">
                <p>
                  A product on your list costs $100.lf you specify 3% as the
                  threshold,we&apos;ll notify you once the price drops below $97.
                </p>
                <p>
                  <Checkbox defaultChecked>
                    Impoduct already purchased products
                  </Checkbox>
                </p>
                <p>
                  <Checkbox defaultChecked>
                    Overview exsiting trackings
                  </Checkbox>
                </p>
                <p>
                  <Checkbox defaultChecked>
                    Track even if no current offer for price type(receive an alert once price type has an offer again)
                  </Checkbox>
                </p>
              </div>
              <div className="button" style={{width: '180px'}}>
                Start Tracking
              </div>
            </div>
            <div className="content content2 bg-trans">
              <div className="pre" onClick={this.pre1} >
                <img src={preImg} alt="" />
              </div>
              <div className="list" style={{marginLeft: `${-this.state.index1 * 236}px`}}>
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
                <Product view="Top search results" />
              </div>
              <div className="next" onClick={this.next1}>
                <img src={nextImg} alt="" />
              </div>
            </div>
            <div className="title">
              Recommended products based on your wish list
            </div>
            <div className="content content2 bg-trans">
              <div className="pre" onClick={this.pre2} >
                <img src={preImg} alt="" />
              </div>
              <div className="list" style={{marginLeft: `${-this.state.index2 * 236}px`}}>
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
                <Product view="Add to WishList" />
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
