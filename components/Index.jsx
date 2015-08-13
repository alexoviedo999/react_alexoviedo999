
var React = require('react')
import { Row } from 'rebass'
import { Col } from 'rebass'
import { Card } from 'rebass'
import { Media } from 'rebass'


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
	        <Row>
				<Col 
				sm={6}
				md={4}>
					<Card >
					    <h2 className="center">
					    	<a href="/visual">Visual Experiments</a>
					    </h2>
					</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
				<Card className={hoverCard}>
				    <h2 className="center">
				      <a href="https://github.com/alexoviedo999">Github</a>
				    </h2>
				</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
					<Card className={hoverCard}>
					    <h2 className="center">
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

