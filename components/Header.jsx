
import React from 'react'
var Router = require('react-router')
var Link = Router.Link
import { LinkBtn } from 'rebass'

class Header extends React.Component {

  render () {
    let headerClass = 'flex flex-center flex-wrap mxn2 p2'
    let buttonClass = 'button rounded button-transparent '
    buttonClass += this.props.light ? 'black' : 'bg-darken-2'
    headerClass += this.props.light ? ' black' : ' white'

    return (
      <header className={headerClass}>
        
        <div className='flex-auto px2 mb2'>
          <h1 className='m0 headline'>
            {this.props.name}
            {/* <span className='h4'> v{this.props.version}</span> */}
          </h1>
          <p className='m0 right bold'>{this.props.description}</p> 
          <div className="left">
          <h4>
            <span><a href="/" className="btn">Home</a></span>
            <span><a href="/about" className="btn">About Me</a></span>
            
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

