
var pkg = require('../package.json')

var data = {
  name: pkg.name,
  title: pkg.name,
  href: '/about',
  version: pkg.version,
  description: pkg.description,
  keywords: pkg.keywords,
  routes: [
    'http://alexoviedo999.github.io/react_alexoviedo999/',
    'http://alexoviedo999.github.io/react_alexoviedo999/about'
  ],
  links: [
    { href: '//github.com/alexoviedo999', text: 'GitHub' }
  ]
}

module.exports = data

