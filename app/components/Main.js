var React = require('react');
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
