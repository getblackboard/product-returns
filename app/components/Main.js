var React = require('react');
var Products = require('../utils/products');
require('../main.css');

var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
        <div>
           {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </div>
      </div>
    )
  }
});

module.exports = Main;
