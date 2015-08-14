
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { LinkBtn } from 'rebass'

class Header extends React.Component {
  render () {
    let style = {

    }

    let styleH1 = {
      'font-size': '8vw',
    }

    let styleAtag = {
      'text-decoration': 'none'
    }

    let navClass1 = '';
    let navClass2 = '';
    let headerClass = 'flex flex-colomn'
    let buttonClass = 'button rounded button-transparent '
    let headerClassH1 = 'm0 italic'

    if (this.props.path == "/") {
      navClass1 = 'btn btn-outline mb1 white';
      navClass2 = 'btn';
      buttonClass += this.props.light ? 'navy' : 'white'
      headerClass += this.props.light ? ' navy' : ' white'
      navClass1 += this.props.light ? ' navy' : ' white'
      navClass2 += this.props.light ? ' navy' : ' white'
    } else if(this.props.path == '/about') {
      headerClassH1 += ' blue'
      navClass2 = 'btn btn-outline mb1 blue';
      navClass1 = 'btn blue';
    } else if(this.props.path == '/visual') {
      headerClassH1 += ' red'
      navClass2 = 'btn btn-outline mb1 red';
      navClass1 = 'btn red';
    }

    return (
      <header style={style} className={headerClass}>
        <div className='px3 mt2'>
          <h1 style={styleH1} className={headerClassH1}>
            <a style={styleAtag} href="/">{this.props.name}</a>
            {/* <span className='h4'> v{this.props.version}</span> */}
          </h1>
          {/* <p className='m0 right bold'>{this.props.description}</p> */}
          <div className="left">
            <h4>
              <span><a href="/" className={navClass1}>Home</a></span>
              <span><a href="/about" className={navClass2}>About Me</a></span>
            </h4>
          </div>
        </div>
      </header>
    )
  }
}

Header.defaultProps = {
  light: false
}

export default Header

