
import React from 'react'
var Color = require('color');

class Background extends React.Component {

  render () {

    var style = {}
    
    console.log('background: '+ this.props.path);
   

    if(this.props.path == '/') {
      var backgroundStyle = 'flex flex-column p1'

      style = {
        backgroundImage: this.props.gradient,
        minHeight: '100vh',
        color: this.props.light ? 'black' : 'white'
      }

    }    

    if(this.props.path == '/about') {
      var backgroundStyle = 'flex flex-column bg-silver'

      style = {
        minHeight: '100vh'
      }

    }

    if(this.props.path == '/visual') {
      var backgroundStyle = 'flex flex-column bg-navy'

      style = {
        minHeight: '100vh'
      }
      
    }

    let preClass = 'h5 right-align p1 m0 '
    preClass += this.props.light ? 'black' : 'white'

    return (
      <div style={style} className={backgroundStyle}>
          {this.props.children}

        {/*<pre className={preClass}>background-image: {this.props.gradient};</pre>*/}

      </div>
    )
  }

}

export default Background

