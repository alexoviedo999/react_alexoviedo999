
var pkg = require('../package.json')

var data = {
  name: pkg.name,
  title: pkg.name,
  href: '/about',
  href: '/visual',
  version: pkg.version,
  description: pkg.description,
  keywords: pkg.keywords,
  routes: [
    '/',
    '/about',
    '/visual'
  ],
  links: [
    { href: '//github.com/alexoviedo999', text: 'GitHub' }
  ]
}

module.exports = data

