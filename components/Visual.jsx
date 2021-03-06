
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
      'fontSize': '35px',
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
      alignContent: 'flex-end'
    }

    let divContainer = {
      border: '2px solid #FF4136',
      // borderRadius: '3px',
      fontWeight: '600',
      color: '#FF4136',
      width: '25%',
      height: '50px',
      margin: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }

    let anchorStyle = {
      display: 'inline-block',
      // height: '100%',
      textDecoration: 'none'
    }

    let sectionStyle = {
      textAlign: 'left',
      color: '#FF4136'
    }

    let hoverCard = 'card';
    let lightClass = 'p3 center'
    lightClass += this.props.light ? ' navy' : ' white'

    return (
      <div className="visualCards">
        <section style={sectionStyle} className="flex col-12 lg-col-8 sm-col-8 md-col-8 m1">
          <div className="h3 left">
            <p>These are some of my projects.</p>
          </div>
        </section>
        <div style={flexContainer} className="center">
          <a style={anchorStyle} href="https://alexoviedo999.gitbooks.io/js-distill/content/">
            <div style={divContainer} className="p2 m2 cardText btn btn-outline">JS Distill</div>
          </a>
          <a style={anchorStyle} href="http://alexoviedo999.github.io/vr-carpet-ride/tron-world/">
            <div style={divContainer} className="p2 m2 cardText btn btn-outline">Tron World</div>
          </a>
          <a style={anchorStyle} href="http://alexoviedo999.github.io/cardboard-1/4/">
            <div style={divContainer} className="p2 m2 cardText btn btn-outline">Mirror Sky</div>
          </a>
          <a style={anchorStyle} href="http://alexoviedo999.github.io/cardboard-1/5/">
            <div style={divContainer} className="p2 m2 cardText btn btn-outline">Space Mecca</div>
          </a>
          <a style={anchorStyle} href="http://p5-interactive.herokuapp.com/play/arcs">
            <div style={divContainer} className="p2 m2 cardText btn btn-outline">Sound Arcs</div>
          </a>
          <a style={anchorStyle} href="http://p5-interactive.herokuapp.com/practice">
            <div style={divContainer} className="p2 m2 cardText btn btn-outline">Discus Tunes</div>
          </a>
        </div>
      </div>
    )
  }
})

module.exports = Visual
