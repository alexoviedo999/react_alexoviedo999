
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { LinkBtn } from 'rebass'
var ReactCSSTransitionGroup = require('react/lib/ReactCSSTransitionGroup')


class Header extends React.Component {
  render () {

    var styleH1;

    var styleHomeH1 = {
      fontSize: '8vw',
      color: this.props.light ? 'rgba(0, 0, 0, 0.7)': 'rgba(255, 255, 255, 0.7)',
      transition: 'color 0.5s ease',
      WebkitTransition: 'color 0.5s ease',
      msTransition: 'color 0.5s ease'
    }

    var styleAboutH1 = {
      fontSize: '8vw'
    }

    var styleVisualH1 = {
      fontSize: '8vw'
    }

    var styleAtag;

    let styleHomeAtag = {
      textDecoration: 'none',
      color: this.props.light ? 'rgba(0, 0, 0, 0.7)': 'rgba(255, 255, 255, 0.8)',
      transition: 'color 0.5s ease'
    }

    let styleAboutAtag = {
      textDecoration: 'none',
      color: '#007bbd',
      fontStyle: 'italic'
    }

    let styleVisualAtag = {
      textDecoration: 'none',
      color: '#FF4136',
      fontStyle: 'italic'
    }

    let navClass1 = '';
    let navClass2 = '';
    let headerClass = 'flex flex-colomn'
    let buttonClass = 'button rounded button-transparent '
    let headerClassH1 = 'm0 italic'

    if (this.props.path == "/") {
      styleH1 = styleHomeH1;
      styleAtag = styleHomeAtag;
      navClass1 = 'btn btn-outline mb1';
      navClass2 = 'btn';
      buttonClass += this.props.light ? 'black' : 'white';
      // navClass1 += this.props.light ? 'black' : 'white';
      // navClass2 += this.props.light ? 'black' : 'white';

      var nav1 = {
        marginRight: '10px',
        backgroundColor: this.props.light ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
        color: this.props.light ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        transition: 'color 0.5s ease, backgroundColor 0.5s ease'
      }
      var nav2 = {
        textDecoration: 'none',
        color: this.props.light ? 'rgba(0, 0, 0, 0.7)': 'rgba(255, 255, 255, 0.8)',
      }
    } else if(this.props.path == '/about') {
      styleH1 = styleAboutH1;
      styleAtag = styleAboutAtag;
      headerClassH1 += 'blue';
      navClass2 = 'btn btn-outline mb1 blue';
      navClass1 = 'btn blue';

      var nav2 = {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        textDecoration: 'none'
      }
    } else if(this.props.path == '/visual') {
      var style = {
        color: '#FF4136',
      }
      styleAtag = styleVisualAtag;
      styleH1 = styleVisualH1;
      navClass2 = 'btn mb1';
      navClass1 = 'btn';
    }

    return (
      <header style={style} className={headerClass}>
        <div className='mt2'>
          <h1 style={styleH1} className={headerClassH1}>
            <a style={styleAtag} href="/">{this.props.name}</a>
            {/* <span className='h4'> v{this.props.version}</span> */}
          </h1>
          {/* <p className='m0 right bold'>{this.props.description}</p> */}
          <div className="left">
            <h4>
              <span><a href="/" className={navClass1} style={nav1}>Home</a></span>
              <span><a href="/about" className={navClass2} style={nav2}>About Me</a></span>
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
