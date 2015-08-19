
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { Footer } from 'rebass'


class Footer2 extends React.Component {
  render () {

    var footerH5Class = '';

    

    let footerTextStyle = {
      
      'justify-content': 'flex-end'
    }

    let footerClass = 'flex col-10 mx-auto'

    if (this.props.path == "/") {
      var footerH5Class = 'center white';
      footerClass += ' indexFooter';
      
    } else if(this.props.path == '/about') {
      var footerH5Class = 'center blue';
      footerClass += ' aboutFooter'
      
    } else if(this.props.path == '/visual') {
      var style = {
        color: '#FF4136'
      }
      var footerH5Class = 'center';
      footerClass += ' visualFooter';
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

