
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { Footer } from 'rebass'


class Footer2 extends React.Component {
  render () {

    let footerTextStyle = {
      'justify-content': 'flex-end'
    }

    let footerClass = 'flex col-10 mx-auto'

    var indexFooterH5Class = {
      display: 'inline-block',
      fontWeight: 400,
    }

    if (this.props.path == "/") {
      footerClass += ' indexFooter';
      var footerStyle = {
          borderTopColor: this.props.light ? 'black' : 'white',
          transition: 'borderTopColor 0.5s ease'
      }

      var footerH5 = {
        color: this.props.light ? 'black' : 'white',
        transition: 'color 0.5s ease'
      }

      var anchorStyle = {
        display: 'inline-block',
        height: '100%',
        textDecoration: 'none',
        color: this.props.light ? 'black' : 'white',
        fontWeight: 600,
        transition: 'color 0.5s ease'
      }

    } else if(this.props.path == '/about') {

      var footerStyle = {
          borderTopColor: '#007bbd',
      }

      var footerH5 = {
        display: 'inline-block',
        color: '#007bbd',
        fontWeight: 400,
        transition: 'color 0.5s ease'
      }

      var anchorStyle = {
        display: 'inline-block',
        height: '100%',
        textDecoration: 'none',
        color: '#007bbd',
        fontWeight: 600,
        transition: 'color 0.5s ease'
      }

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
            <h5 style={footerH5}>Get in touch: <a style={anchorStyle} href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.io">alexoviedo999@gmail.com</a></h5>
        </Footer>
      </div>
    )
  }
}

Footer.defaultProps = {
  light: false
}

export default Footer2
