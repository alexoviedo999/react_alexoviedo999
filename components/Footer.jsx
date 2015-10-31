
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { Footer } from 'rebass'


class Footer2 extends React.Component {
  render () {

    let footerTextStyle = {
      'justify-content': 'flex-end'
    }

    let indexFooterH5Class = {
      display: 'inline-block',
      color: this.props.light ? 'black' : 'white',
      fontWeight: 400
    }

    let footerClass = 'flex col-10 mx-auto'

    if (this.props.path == "/") {
      var footerH5Class = indexFooterH5Class;
      footerClass += ' indexFooter';
      var footerStyle = {
          borderTopColor: this.props.light ? 'black' : 'white'
      }

      var anchorStyle = {
        display: 'inline-block',
        height: '100%',
        textDecoration: 'none',
        color: this.props.light ? 'black' : 'white',
        fontWeight: 600
      }

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
        <Footer style={footerStyle}>
            <h5 className={footerH5Class}>Get in touch: <a style={anchorStyle} href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.io">alexoviedo999@gmail.com</a></h5>
        </Footer>
      </div>
    )
  }
}

Footer.defaultProps = {
  light: false
}

export default Footer2
