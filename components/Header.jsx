
import React from 'react'
var Router = require('react-router')
import About from './About.jsx'
var Link = Router.Link

class Header extends React.Component {

  render () {
    let headerClass = 'flex flex-center flex-wrap mxn2'
    let buttonClass = 'button rounded button-transparent '
    buttonClass += this.props.light ? 'black' : 'bg-darken-2'
    headerClass += this.props.light ? ' black' : ' white'

    return (
      <header className={headerClass}>
      <div className="left">
          <button className="btn btn-outline mb1">
              <Link to='/'>Home</Link>
          </button>
          <button className="btn btn-outline mb1">
            <Link to='/about'>About Me</Link>
          </button>
        </div>
        <div className='flex-auto center italic bold px2 mb2'>
          <h1 className='m0'>
            {this.props.name}
            <span className='h4'> v{this.props.version}</span>
          </h1>
          <p className='m0'>{this.props.description}</p>
        </div>
        
        
      </header>
    )
  }

}

Header.defaultProps = {
  light: false
}

export default Header

