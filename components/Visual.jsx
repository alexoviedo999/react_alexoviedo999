
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

    let hoverCard = 'card';
    let lightClass = 'p3 center'
    lightClass += this.props.light ? ' navy' : ' white'

    return (
      <div className="p3 red">
        <section className="mb3">
          <h2 className="center">
            Visual Experiments
          </h2>
        </section>
          <Row>
        <Col 
        sm={6}
        md={4}
        style={cardStyle}
        className="visualCard">
          <Card>
              <h2 className="center">
                <a href="http://alexoviedo999.github.io/cardboard-1/4/">Mirror Sky</a>
              </h2>
          </Card>
        </Col>

        <Col
        sm={6}
        md={4}>
        <Card className={hoverCard}>
            <h2 className="center">
                <a href="http://alexoviedo999.github.io/cardboard-1/5/">Space Mecca</a>
              </h2>
        </Card>
        </Col>

        <Col
        sm={6}
        md={4}>
          <Card className={hoverCard}>
              <h2 className="center">
                <a href="http://p5-interactive.herokuapp.com/practice">Discus Tunes</a>
              </h2>
          </Card>
        </Col>
        <Col
        sm={6}
        md={4}>
          <Card className={hoverCard}>
              <h2 className="center">
                <a href="http://p5-interactive.herokuapp.com/play/worm2">Discus Tunes</a>
              </h2>
          </Card>
        </Col>
      </Row>
    </div>
    )

  }
})

module.exports = Visual