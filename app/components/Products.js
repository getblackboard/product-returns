var React = require('react');
var PropTypes = React.PropTypes;

// function puke(obj) {
// 	return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
// }


function Products (props) {
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
      <h1>{props.header}</h1>
    </div>
  )
}

Products.propTypes = {
  header: PropTypes.string.isRequired,
}

module.exports = Products;