
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { Footer } from 'rebass'


class Footer2 extends React.Component {
  render () {

    var footerH5Class = '';

    var style = {
      'flex': '0.1'
    }

    let footerTextStyle = {
      'display': 'flex',
      'flex': '1',
      'justify-content': 'flex-end'
    }

    let footerClass = 'col-10 mx-auto'

    if (this.props.path == "/") {
      var footerH5Class = 'center white';
      
    } else if(this.props.path == '/about') {
      var footerH5Class = 'center blue';
      
    } else if(this.props.path == '/visual') {
      var footerH5Class = 'center red';
    }

    return (
      <div style={style} className={footerClass}>
        <Footer>
            <h5 className={footerH5Class}>Get in touch: <a href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.io">alexoviedo999@gmail.com</a></h5>
        </Footer>
      </div>
    )
  }
}

Footer.defaultProps = {
  light: false
}

export default Footer2

