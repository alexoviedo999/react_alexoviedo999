
var React = require('react')
var Root = require('./components/Root.jsx')
var Router = require('react-router')
var Routes = require('./Routes.jsx')

if (typeof document !== 'undefined') {
  var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  Router.run(Routes, function (Handler) {
    React.render(React.createElement(Handler, initialProps), document)
  })
}

module.exports = function render(locals, callback) {
  Router.run(Routes, locals.path, function (Handler) {
    var html = React.renderToString(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}





// var handler = function (Handler) {
//   React.render(<Handler/>, document.getElementById('layout'))
// }
//
// module.exports = function render(locals, callback) {
//   if (__production__) {
//   Router.run(Routes, Router.HistoryLocation, locals.path, function (Handler) {
//     var html = React.renderToString(React.createElement(Handler, locals))
//     callback(null, '<!DOCTYPE html>' + html)
//   })
//   }
//   else {
//       Router.run(Routes, locals.path, function (Handler) {
//         var html = React.renderToString(React.createElement(Handler, locals))
//         callback(null, '<!DOCTYPE html>' + html)
//       })
//   }
// }
