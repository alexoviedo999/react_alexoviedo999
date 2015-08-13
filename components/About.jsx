
var React = require('react')
import Header from './Header.jsx'
import Color from 'color'


var About = React.createClass({
  render: function () {

    let style = {
      margin: '0 auto'
    }

    return (
      <div style={style} className='blue col-6'>
      	
        <h2>A little about myself...</h2>

        <p>My name is Alejandro Oviedo, I&#39;m a front-end developer and I love building beautiful UXs.  Learning and experimenting with making awesome things happen on computer screens gets me excited.</p>
          <p>Currently, I&#39;m a contractor helping CVS/pharmacies build their next generation web applications.</p>
          <p><span>Feel free to get in touch via email: <a href="mailto:alexoviedo999@gmail.com?subject=Message from alexoviedo999.io" className='bold'>alexoviedo999@gmail.com</a> or twitter: <a className='bold' href="https://twitter.com/alexoviedo999">@alexoviedo999</a>.</span></p>

        <h2 className="center mt4">My Skills</h2>

        <h3>Javascript</h3>

        <p>ES5 / ES6</p>
        <p>Node.js</p>

        <p><strong>MV* Frameworks:</strong> AngularJS, React</p>
        <p><strong>Make life easier:</strong> jQuery, underscore.js/lodash</p>
        <p><strong>WebGL:</strong> Three.js</p>
        <p><strong>Canvas:</strong> p5.js</p>
        <p><strong>Package manager:</strong> Npm, Bower</p>
        <p><strong>Dependencies injection:</strong> AMD (requirejs), CommonJS (browserify)</p>
        <p><strong>build tools:</strong> Gulp, Webpack</p>


        <h3>HTML / CSS</h3>

        <p>HTML5 / CSS3</p>

        <p><strong>CSS Frameworks:</strong> Bootstrap, Foundation, BASSCSS</p>
        <p><strong>Preprocessors:</strong> LESS, SASS</p>

        <h3>Misc</h3>

        <p>Ruby, Ruby on Rails</p>
        <p><strong>Version control:</strong> Git</p>
      </div>
    )
  }
})

module.exports = About