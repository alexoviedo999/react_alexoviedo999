
var React = require('react')
import Header from './Header.jsx'
import Color from 'color'
import { Row } from 'rebass'
import { Col } from 'rebass'
import { Card } from 'rebass'
import { Media } from 'rebass'


var Visual = React.createClass({
  render: function () {

    let styleH1 = {
      'font-size': '35px',
      'text-align': 'center' 
    }

    let cardStyle = {
      border: 'red 1px solid'
    }


    let flexContainer = {
      display: 'flex',
      WebkitAlignItems: 'center',
      alignItems: 'center',
      WebkitJustifyContent: 'center',
      justifyContent: 'center',
      WebkitFlexDirection: 'row',
      flexDirection: 'row',
      WebkitFlexWrap: 'wrap',
      flexWrap: 'wrap',
      WebkitFlexFlow: 'row wrap',
      flexFlow: 'row wrap',
      WebkitAlignContent: 'flex-end',
      alignContent: 'flex-end',
      color: '#FF4136'
    }

    let divContainer = {
      height: '10vh',
      width: '30vh',
      border: '2px solid #FF4136',
      borderRadius: '3px',
      fontWeight: '600',
    }

    let anchorStyle = {
      display: 'inline-block',
      height: '100%',
      width: '100%',
      textDecoration: 'none',
      color: '#FF4136'
    }


    let hoverCard = 'card';
    let lightClass = 'p3 center'
    lightClass += this.props.light ? ' navy' : ' white'

    return (

      <div style={flexContainer} className="center">
        <div style={divContainer} className="m2">
          <a style={anchorStyle} href="http://alexoviedo999.github.io/cardboard-1/4/">
            <div className="h2 mt3">Mirror Sky</div>
          </a>
        </div>
        <div style={divContainer} className="m2">
          <a style={anchorStyle} href="http://alexoviedo999.github.io/cardboard-1/5/">
            <div className="h2 mt3">Space Mecca</div>
          </a>
        </div>
        <div style={divContainer} className="m2">
          <a style={anchorStyle} href="http://p5-interactive.herokuapp.com/practice">
            <div className="h2 mt3">Discus Tunes</div>
          </a>
        </div>
      </div>

    )

  }
})

module.exports = Visual