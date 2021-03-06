var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var MainContainer = require('../components/MainContainer');

function Home () {
  return (
    <MainContainer>
      <h1>Product API Returns</h1>
      <p className='lead'>What even is a jQuery?</p>
      <Link to='/'>
        <button type='button' className='btn btn-lg btn-success'>Get Started</button>
      </Link>
    </MainContainer>
  )
}

module.exports = Home;