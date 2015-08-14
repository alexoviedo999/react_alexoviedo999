
var React = require('react')
import { Row } from 'rebass'
import { Col } from 'rebass'
import { Card } from 'rebass'
import { Media } from 'rebass'
import { Footer } from 'rebass'


var Index = React.createClass({
  render: function () {

    let styleH1 = {
      'font-size': '35px',
      'text-align': 'center'
    }

  	let hoverCard = 'card bg-navy';
    let lightClass = 'p3 center'
    lightClass += this.props.light ? ' navy' : ' white'
    let cardBorder = 'mb4'
    cardBorder += this.props.light ? ' nightBorder' : ' dayBorder'

    return (
    	<div className="p3">
    		<section className="mb3">
              <p className="h3">
                <span>Welcome, I&#8217;m a front-end developer with a passion for visual art and great UX.</span><br/>
                <span>Feel free to get in touch via email: <a href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.io" className='white bold'>alexoviedo999@gmail.com</a> or twitter: <a className='white bold' href="https://twitter.com/alexoviedo999">@alexoviedo999</a>.</span>
              </p>
            </section>
	        <Row>
				<Col 
				sm={6}
				md={4}>
					<Card>
					    <h2 className="center p1">
					    	<a href="/visual">Visual Experiments</a>
					    </h2>
					</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
				<Card className={hoverCard}>
				    <h2 className="center p1">
				      <a href="https://github.com/alexoviedo999">Github</a>
				    </h2>
				</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
					<Card className={hoverCard}>
					    <h2 className="center p1">
					    	<a href="http://alejandrooviedo.com">Tumblr</a>
					    </h2>
					</Card>
				</Col>
			</Row>
		</div>
    )
  }
})

module.exports = Index

