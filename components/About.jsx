
var React = require('react')
import Header from './Header.jsx'
import Color from 'color'



var About = React.createClass({
  render: function () {

    let style = {

    }

    return (
      <div style={style} className='flex blue'>
      	
        <div className="p3 mx-auto col-12 sm-col-8">
          <h2 className="center">A little about myself...</h2>

          <p className="m1">My name is Alejandro Oviedo, I&#39;m a front-end developer and I love building beautiful UXs.  Learning and experimenting with making awesome things happen on computer screens gets me excited.</p>
          <p className="m1">Currently, I&#39;m a contractor helping CVS/pharmacies build their next generation web applications.</p>
          <p className="m1"><span>Feel free to get in touch via email: <a href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.io" className='bold'>alexoviedo999@gmail.com</a> or twitter: <a className='bold' href="https://twitter.com/alexoviedo999">@alexoviedo999</a>.</span></p>
        </div>

        <div className="p3 mx-auto">
          <h2 className="center mt3">My Skills</h2>

          <h3>Javascript</h3>

          <p className="m1">ES5 / ES6</p>
          <p className="m1">Node.js</p>

          <p className="m1"><strong>MV* Frameworks:</strong> AngularJS, React</p>
          <p className="m1"><strong>Make life easier:</strong> jQuery, underscore.js/lodash</p>
          <p className="m1"><strong>WebGL:</strong> Three.js</p>
          <p className="m1"><strong>Canvas:</strong> p5.js</p>
          <p className="m1"><strong>Package manager:</strong> Npm, Bower</p>
          <p className="m1"><strong>Dependencies injection:</strong> AMD (requirejs), CommonJS (browserify)</p>
          <p className="m1"><strong>build tools:</strong> Gulp, Webpack</p>


          <h3>HTML / CSS</h3>

          <p className="m1">HTML5 / CSS3</p>

          <p className="m1"><strong>CSS Frameworks:</strong> Bootstrap, Foundation, BASSCSS</p>
          <p className="m1"><strong>Preprocessors:</strong> LESS, SASS</p>

          <h3>Misc</h3>

          <p className="m1">Ruby, Ruby on Rails</p>
          <p className="m1"><strong>Version control:</strong> Git</p>
        </div>
      </div>
    )
  }
})

module.exports = About