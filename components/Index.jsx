
var React = require('react')
import { Row } from 'rebass'
import { Col } from 'rebass'
import { Card } from 'rebass'
import { Media } from 'rebass'
import { Footer } from 'rebass'
import css from '../src/base.css'


var Index = React.createClass({
  render: function () {

  	let cardStyle = {
  		'border': '1px solid var(--red)'
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

    let sectionStyle = {
    	textAlign: 'left'
    }

    let lightClass = 'p3 center'
    lightClass += this.props.light ? ' navy' : ' white'
    let cardBorder = 'mb4'
    cardBorder += this.props.light ? ' nightBorder' : ' dayBorder'


    if (this.props.path == "/") {

      var divContainer = {
        border: '1px solid',
        // borderRadius: '3px',
        fontWeight: '600',
        color: this.props.light ? 'rgba(0, 0, 0, 0.7)': 'rgba(255, 255, 255, 0.8)',
        borderColor: this.props.light ? 'rgba(0, 0, 0, 0.3)': 'rgba(255, 255, 255, 0.3)',
        backgroundColor: this.props.light ? 'rgba(0, 0, 0, 0.2)': 'rgba(255, 255, 255, 0.2)',
        transition: 'color 0.5s ease, backgroundColor 0.5s ease',
        width: '25%',
        height: '50px',
        margin: '10px',
        display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
      }

      var anchorStyle = {
        display: 'inline-block',
        height: '100%',
        textDecoration: 'none',
        color: this.props.light ? 'rgba(0, 0, 0, 0.8)': 'rgba(255, 255, 255, 0.8)',
        fontWeight: 700,
        transition: 'color 0.5s ease'
      }

      var pIndexStyle = {
        fontWeight: '600',
        color: this.props.light ? 'rgba(0, 0, 0, 0.7)': 'rgba(255, 255, 255, 0.8)',
        transition: 'color 0.5s ease'
      }

    } else if(this.props.path == '/about') {

    } else if(this.props.path == '/visual') {

    }


    return (
    	<div className="indexCards">
    		<section style={sectionStyle} className="flex col-12 lg-col-8 sm-col-8 md-col-8 m1">
          <div className="h3 left">
            <p style={pIndexStyle}>Welcome, I&#8217;m a front-end developer with a passion for visual art and great User Experience.</p>
            <p style={pIndexStyle}>Feel free to get in touch via email: <a style={anchorStyle} href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.com">alexoviedo999@gmail.com</a> or twitter: <a style={anchorStyle} href="https://twitter.com/alexoviedo999">@alexoviedo999</a>.</p>
          </div>
        </section>
        <div style={flexContainer} className="center">
      		<a style={anchorStyle} href="/visual">
      			<div style={divContainer}  className="m2 cardText btn btn-outline">Visual Play</div>
      		</a>
      		<a style={anchorStyle} href="https://github.com/alexoviedo999">
      			<div style={divContainer} className="mt2 m2 cardText btn btn-outline">Github</div>
      		</a>
      		<a style={anchorStyle} href="https://alejandrooviedo.com">
      			<div style={divContainer} className="mt2 m2 cardText btn btn-outline">Tumblr</div>
    		  </a>
			  </div>
		  </div>
    )
  }
});

module.exports = Index
