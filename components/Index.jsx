
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

    let divContainer = {
	    height: '10vh',
	    width: '30vh',
	    border: '2px solid #FFF',
	    borderRadius: '3px',
	    fontWeight: '600',
    }

    let anchorStyle = {
    	display: 'inline-block',
    	height: '100%',
    	width: '100%',
    	textDecoration: 'none'
    }

    let sectionStyle = {
    	textAlign: 'left'
    }


    let lightClass = 'p3 center'
    lightClass += this.props.light ? ' navy' : ' white'
    let cardBorder = 'mb4'
    cardBorder += this.props.light ? ' nightBorder' : ' dayBorder'

    return (
    	<div className="">
    		<section stlye={sectionStyle} className="mb3 flex col-8">
              <div className="h3 left">
                <p>Welcome, I&#8217;m a front-end developer with a passion for visual art and great UX.</p>
                <p>Feel free to get in touch via email: <a href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.io" className='white bold'>alexoviedo999@gmail.com</a> or twitter: <a className='white bold' href="https://twitter.com/alexoviedo999">@alexoviedo999</a>.</p>
              </div>
            </section>
            <div style={flexContainer} className="center">
            	<div style={divContainer} className="m2">
            		<a style={anchorStyle} href="/visual">
            			<div className="h2 white mt3">Visual Experiments</div>
            		</a>
            	</div>
            	<div style={divContainer} className="m2">
            		<a style={anchorStyle} href="https://github.com/alexoviedo999">
            			<div className="h2 white mt3">Github</div>
            		</a>
            	</div>
            	<div style={divContainer} className="m2">
            		<a style={anchorStyle} href="https://alejandrooviedo.com">
            			<div className="h2 white mt3">Tumblr</div>
            		</a>
            	</div>

			</div>
		</div>
    )
  }
});

module.exports = Index


