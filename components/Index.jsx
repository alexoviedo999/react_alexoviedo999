
var React = require('react')
import { Row } from 'rebass'
import { Col } from 'rebass'
import { Card } from 'rebass'
import { Media } from 'rebass'


var Index = React.createClass({
  render: function () {
  	let hoverCard = 'card bg-navy';
  	let ReactElement1 = <img src='http://placehold.it/300x200&text=slide1'/>;
    let ReactElement2 = <img src='http://placehold.it/40x40&text=slide1'/>;

    let lightClass = 'p4 center'

    lightClass += this.props.light ? ' navy' : ' silver'

    let cardBorder = 'mb4'

    cardBorder += this.props.light ? ' nightBorder' : ' dayBorder'

    return (
    	<div>
	        <Row>
				<Col 
				sm={6}
				md={4}>
					<Card >
					    <h1 className={lightClass}>
					      About Me
					    </h1>
					</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
				<Card className={hoverCard}>
				    <h1 className={lightClass}>
				      Github
				    </h1>
				</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
					<Card className="card">
					    <h1 className={lightClass}>
					      Tumblr
					    </h1>
					</Card>
				</Col>
			</Row>
		</div>
    )
  }
})

module.exports = Index

