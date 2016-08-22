var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// Components
var Main = require('../components/Main');
var Home = require('../components/Home');

// Containers
var ProductsContainer = require('../containers/ProductsContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={ProductsContainer} header="Products"/>
    </Route>
  </Router>
);

module.exports = routes;