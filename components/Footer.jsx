
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { LinkBtn } from 'rebass'

class Footer extends React.Component {
  render () {

    let style = {
      'flex': '0.3'
    }

    let footerTextStyle = {
      'display': 'flex',
      'flex': '1',
      'justify-content': 'flex-end'
    }

    let footerClass = 'p3 flex'

    if (this.props.path == "/") {
      
    } else if(this.props.path == '/about') {
      
    } else if(this.props.path == '/visual') {
      
    }

    return (
      <footer style={style} className={footerClass}>
        <div style={footerTextStyle}>hello footer</div>
      </footer>
    )
  }
}

Footer.defaultProps = {
  light: false
}

export default Footer

