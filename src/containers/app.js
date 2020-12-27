import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Bottom from '../components/bottom';
import * as homeActions from '../redux/reduces/home';

@connect(
  state => ({home: state.home}),
  dispatch => bindActionCreators(homeActions, dispatch)
)
class App extends Component {
  state = {
  }
  componentWillMount() {
    const {initalLogo, history, changeRoute} = this.props;
    initalLogo();
    if (history.location.pathname === '/') {
      changeRoute();
      history.push('/login');
    }
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div className="outside">
        {this.props.children}
        {/*<Bottom />*/}
      </div>
    );
  }
}

export default App;
