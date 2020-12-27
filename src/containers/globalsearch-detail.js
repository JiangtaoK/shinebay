import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import handImg from '~/assets/handB.png';
import eyeImg from '~/assets/eyeB.png';
import share1 from '~/assets/share1.png';
import share2 from '~/assets/share2.png';
import share3 from '~/assets/share3.png';
import share4 from '~/assets/share4.png';
import gooddeal1 from '~/assets/gooddeal1.png';
import gooddeal12 from '~/assets/gooddeal1-2.png';
import gooddeal2 from '~/assets/gooddeal2.png';
import gooddeal22 from '~/assets/gooddeal2-2.png';
import hatImg from '~/assets/hat.jpg';
import preImg from '~/assets/p-1.png';
import nextImg from '~/assets/n-1.png';
import Product from '../components/product';
import channel from '../channel/channel';
import Head from '../components/navigation';
import Charts from '../components/charts';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
    index1: 0,
    index2: 0,
    tab: 0
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
        <div className="product detail">
          <div className="container">
            <div className="nav">
              <p>Global Search <span className="sub">/ details</span></p>
            </div>
          </div>
          <div className="container-large">
            <div className="container">
              <div className="title" style={{lineHeight: '28px', height: '45px'}}>
                REETENE 2020 Super Warm Men Winter Boots For Men Warm Fur Men&apos;S Boots
                Plush Men&apos;S Ankle Snow Boots Waterproof
                Men&apos;S Winter Shoes
              </div>
              <div className="detail-container">
                <div className="detail-left">
                  <div className="price-big">
                    <span className="new">$55</span><span className="old">$65.5</span>  <span>Free shipping</span>
                  </div>
                  <hr color="#ebebeb" />
                  <div className="views">
                    <span><img src={handImg} alt="" /></span>
                    <span>8080980</span>
                    <span> </span>
                    <span><img src={eyeImg} alt="" /></span>
                    <span>100000 Views</span>
                  </div>
                  <hr color="#ebebeb" />
                  <div className="content">
                    <p>
                      <span className="link">JackRabbit.com</span> has REETENE 2020 Super Warm Men Winter Boots For Men Warm Fur Men&apos;S Boots Plush
                      Men&apos;S Ankle Snow Boots Waterproof Men&apos;S Winter Shoes on sale for $65.5(price
                      reflected in cart).Shipping is free.Thanks TattyBear
                    </p>
                    <p>
                      Note,must add tu cart for the sale price.Availability may vary by size/color
                    </p>
                  </div>
                  <div className="tab">
                    <div className={this.state.tab ? 'button' : 'button current'} onClick={() => { this.setState({tab: 0}); }}>Historical price chart</div>
                    <div className={this.state.tab ? 'button current' : 'button'} onClick={() => { this.setState({tab: 1}); }}>Detailed analysis</div>
                  </div>
                  <div className="charts" style={{display: this.state.tab ? 'none' : ''}}>
                    <Charts />
                  </div>
                  <div className="anal" style={{display: this.state.tab ? '' : 'none'}}>
                    <div className="content">
                      Price trend analysis results
                    </div>
                    <div className="price">
                      <div>
                        <div>  </div>
                        <div>Current price </div>
                        <div>Lowest Frice in history </div>
                        <div>Black friday prices </div>
                        <div>30-day lowest price </div>
                        <div>30-day average price </div>
                      </div>
                      <div>
                        <div>Price </div>
                        <div>$55 </div>
                        <div>$55 </div>
                        <div>$55 </div>
                        <div>$55 </div>
                        <div>$55 </div>
                      </div>
                      <div>
                        <div>Ups and downs </div>
                        <div><span className="up"> </span>$55 </div>
                        <div><span className="up"> </span>$55 </div>
                        <div><span className="up"> </span>$55 </div>
                        <div><span className="up"> </span>$55 </div>
                        <div><span className="up"> </span>$55 </div>
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <p>
                      Missed the historical low price? <span className="link">Add the current product to the Deal Track</span>, the good price will not be missed
                    </p>
                  </div>
                </div>
                <div className="detail-right">
                  <div className="show-big"><img src={hatImg} alt="" /> </div>
                  <div className="show-list">
                    <div><img src={hatImg} alt="" /> </div>
                    <div><img src={hatImg} alt="" /> </div>
                    <div><img src={hatImg} alt="" /> </div>
                    <div className="current"><img src={hatImg} alt="" /> </div>
                    <div><img src={hatImg} alt="" /> </div>
                    <div><img src={hatImg} alt="" /> </div>
                  </div>
                  <div>
                    <div className="button">See Deal</div>
                    <div className="button">Add to Wish List</div>
                  </div>
                  <hr color="#ebebeb" />
                  <div className="share">
                    <div>
                      <div>Share</div>
                      <div className="list">
                        <img src={share1} alt="" />
                        <img src={share2} alt="" />
                        <img src={share3} alt="" />
                        <img src={share4} alt="" />
                      </div>
                    </div>
                    <div>
                      <div>Good deal</div>
                      <div className="li">
                        <img src={gooddeal1} alt="" />
                        <img src={gooddeal2} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="title">
              <span className="title">You May Also Like</span>
            </div>
            <div className="content content2 bg-trans">
              <div className="pre" onClick={this.pre1} >
                <img src={preImg} alt="" />
              </div>
              <div className="list" style={{marginLeft: `${-this.state.index1 * 236}px`}}>
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
              </div>
              <div className="next" onClick={this.next1}>
                <img src={nextImg} alt="" />
              </div>
            </div>
            <div className="title">
              <span className="title">More</span>
            </div>
            <div className="content content2 bg-trans">
              <div className="pre" onClick={this.pre2} >
                <img src={preImg} alt="" />
              </div>
              <div className="list" style={{marginLeft: `${-this.state.index2 * 236}px`}}>
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
                <Product view="View Details" />
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
