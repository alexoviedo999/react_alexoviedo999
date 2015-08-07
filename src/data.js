
var pkg = require('../package.json')

var data = {
  name: pkg.name,
  title: pkg.name,
  href: '/about',
  version: pkg.version,
  description: pkg.description,
  keywords: pkg.keywords,
  routes: [
    '/',
    '/about'
  ],
  links: [
    { href: '//github.com/alexoviedo999', text: 'GitHub' }
  ]
}

module.exports = data

