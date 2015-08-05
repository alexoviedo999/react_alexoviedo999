
var React = require('react')
import { Row } from 'rebass'
import { Col } from 'rebass'
import { Card } from 'rebass'
import { Media } from 'rebass'


var Index = React.createClass({
  render: function () {

  	let ReactElement1 = <img src='http://placehold.it/300x200&text=slide1'/>;
    let ReactElement2 = <img src='http://placehold.it/40x40&text=slide1'/>;

    return (
    	<div>
	        <h1>home body</h1>

	        <Row>
				<Col
				sm={6}
				md={4}>
					<Card image={ReactElement1}>
					  <Media
					    middle={true}
					    image={ReactElement2}>
					    <h3 className="h4 m0">
					      Nested Hamburger
					    </h3>
					  </Media>
					</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
				<Card image={ReactElement1}>
				  <Media
				    middle={true}
				    image={ReactElement2}>
				    <h3 className="h4 m0">
				      Nested Hamburger
				    </h3>
				  </Media>
				</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
					<Card image={ReactElement1}>
					  <Media
					    middle={true}
					    image={ReactElement2}>
					    <h3 className="h4 m0">
					      Nested Hamburger
					    </h3>
					  </Media>
					</Card>
				</Col>

				<Col
				sm={6}
				md={4}>
					<Card image={ReactElement1}>
					  <Media
					    middle={true}
					    image={ReactElement2}>
					    <h3 className="h4 m0">
					      Nested Hamburger
					    </h3>
					  </Media>
					</Card>
				</Col>
			</Row>
		</div>
    )
  }
})

module.exports = Index

