
var React = require('react')
import Gradient from './Gradient.jsx'
import About from './About.jsx'


var Index = React.createClass({
  render: function () {
    return (
      <main>
        Index component
        <Gradient {...this.props} />
      </main>
    )
  }
})

module.exports = Index

