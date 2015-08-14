
var React = require('react')
var Router = require('react-router')
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var About = require('./components/About.jsx')
var Visual = require('./components/Visual.jsx')
import { Footer } from 'rebass'

var Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
    <Route path='/visual' handler={Visual} />
  </Route>
)

module.exports = Routes