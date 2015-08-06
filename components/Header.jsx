
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { LinkBtn } from 'rebass'

class Header extends React.Component {

  render () {
    let navClass1 = '';
    let navClass2 = '';
    if (this.props.path == "/") {
      navClass1 = 'btn btn-outline mb1 black';
      navClass2 = 'btn';
    } else {
      navClass2 = 'btn btn-outline mb1 black';
      navClass1 = 'btn';
    }
    let headerClass = 'flex flex-center flex-wrap mxn2 p2'
    let buttonClass = 'button rounded button-transparent '
    buttonClass += this.props.light ? 'black' : 'bg-darken-2'
    headerClass += this.props.light ? ' navy' : ' silver'

    return (
      <header className={headerClass}>
        
        <div className='flex-auto px2 mb2'>
          <h1 className='m0 headline italic'>
            {this.props.name}
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

