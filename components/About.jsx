
var React = require('react')
import Gradient from './Gradient.jsx'

var About = React.createClass({
  render: function () {
    return (
      <main>
        About component
        <Gradient {...this.props} />
      </main>
    )
  }
})

module.exports = About

