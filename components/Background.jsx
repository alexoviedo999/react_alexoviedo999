
import React from 'react'

class Background extends React.Component {

  render () {
    let style = {
      backgroundImage: this.props.gradient,
      minHeight: '100vh',
      color: this.props.light ? 'black' : 'white'
    }
    console.log('background: '+ this.props.path);

    if(this.props.path == '/about') {
      style.backgroundImage = 'none';
      style.backgroundColor = 'silver';
      style.color = 'blue';
    }

    let preClass = 'h5 right-align p1 m0 '
    preClass += this.props.light ? 'black' : 'white'

    return (
      <div style={style} className='flex flex-column'>
        <div className='p1'>
          {this.props.children}
        </div>
        <div className='flex-auto'></div>
        {/*<pre className={preClass}>background-image: {this.props.gradient};</pre>*/}
      </div>
    )
  }

}

export default Background

