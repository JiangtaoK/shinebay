import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import Store from '../redux';
import DevTools from '../redux/DevTools';
import Index from '../containers/app';
// import Login from '../containers/login';

const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);
//
// const Signup = Loadable({
//   loader: () => import('../containers/signup'),
//   loading: () => <div>Loading...</div>
// });
// const Retrieve = Loadable({
//   loader: () => import('../containers/retrieve'),
//   loading: () => <div>Loading...</div>
// });
// const Forgot = Loadable({
//   loader: () => import('../containers/forgot'),
//   loading: () => <div>Loading...</div>
// });
// const About = Loadable({
//   loader: () => import('../containers/about'),
//   loading: () => <div>Loading...</div>
// });
// const Service = Loadable({
//   loader: () => import('../containers/service'),
//   loading: () => <div>Loading...</div>
// });
// const Policies = Loadable({
//   loader: () => import('../containers/policies'),
//   loading: () => <div>Loading...</div>
// });
// const Globalsearch = Loadable({
//   loader: () => import('../containers/globalsearch'),
//   loading: () => <div>Loading...</div>
// });
// const Withlist = Loadable({
//   loader: () => import('../containers/withlist'),
//   loading: () => <div>Loading...</div>
// });
// const Topdeals = Loadable({
//   loader: () => import('../containers/topdeals'),
//   loading: () => <div>Loading...</div>
// });
// const Dealtrack = Loadable({
//   loader: () => import('../containers/dealtrack'),
//   loading: () => <div>Loading...</div>
// });
// const WithlistDetail = Loadable({
//   loader: () => import('../containers/withlist-detail'),
//   loading: () => <div>Loading...</div>
// });
// const GlobalsearchDetail = Loadable({
//   loader: () => import('../containers/globalsearch-detail'),
//   loading: () => <div>Loading...</div>
// });
const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <div className="router-content">
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          <Router path="/" component={Index} >
            {/*<Router exact path="/login" component={Login} />*/}
            {/*<Router exact path="/signup" component={Signup} />*/}
            {/*<Router exact path="/forgot" component={Forgot} />*/}
            {/*<Router exact path="/retrieve" component={Retrieve} />*/}
            {/*<Router exact path="/policies" component={Policies} />*/}
            {/*<Router exact path="/globalsearch" component={Globalsearch} />*/}
            {/*<Router exact path="/withlist" component={Withlist} />*/}
            {/*<Router exact path="/withlist-detail" component={WithlistDetail} />*/}
            {/*<Router exact path="/dealtrack" component={Dealtrack} />*/}
            {/*<Router exact path="/globalsearch-detail" component={GlobalsearchDetail} />*/}
            {/*<Router exact path="/topdeals" component={Topdeals} />*/}
            {/*<Router exact path="/service" component={Service} />*/}
            {/*<Router exact path="/about" component={About} />*/}
          </Router>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
