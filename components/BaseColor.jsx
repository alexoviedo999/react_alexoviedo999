
import React from 'react'
import Color from 'color'

class BaseColor extends React.Component {

  constructor () {
    super ()
    this.state = {
      base: '#0074D9',
      hue: 205,
      saturation: 100,
      lightness: 60,
      secondsElapsed: 205,
      countUp: true
    }

    {/*this.state = {
      base: '#00ccff',
      hue: 0,
      saturation: 0,
      lightness: 0
    }*/}

    this.changeBase = this.changeBase.bind(this)
    this.changeHue = this.changeHue.bind(this)
    this.changeSaturation = this.changeSaturation.bind(this)
    this.changeLightness = this.changeLightness.bind(this)
    this.updateHSL = this.updateHSL.bind(this)
    this.updateBase = this.updateBase.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.tick = this.tick.bind(this)
    this.setSecondsElapsed = this.setSecondsElapsed.bind(this)
    //this.componentDidMount = this.componentDidMount.bind(this)
  }

  changeBase (e) {
    this.setState({ base: e.target.value })
    this.updateHSL()
    this.props.changeBase(this.state.base)
  }

  changeHue (seconds) {
    this.setState({ hue: seconds })
    this.updateBase()
  }

  changeSaturation (e) {
    this.setState({ saturation: e.target.value })
    this.updateBase()
  }

  changeLightness (e) {
    this.setState({ lightness: e.target.value })
    this.updateBase()
  }

  updateHSL () {
    var base, h, s, l
    base = Color(this.state.base)
    h = base.hsl().h
    s = base.hsl().s
    l = base.hsl().l
    this.setState({
      hue: h,
      saturation: s,
      lightness: l
    })
  }

  updateBase () {
    var base, hsl
    hsl = {
      h: this.state.hue,
      s: this.state.saturation,
      l: this.state.lightness
    }
    base = Color(hsl).hexString()
    this.setState({ base: base })
    this.props.changeBase(this.state.base)
  }

  handleSubmit (e) {
    var base = e.target[1].value || null
    e.preventDefault()
    if (base) {
      this.setState({ base: base })
    }
    this.updateHSL()
    this.props.changeBase(this.state.base)
  }

  componentDidMount () {
    this.updateHSL(),
    this.interval = setInterval(this.tick, 100);
  }

  componentWillUnmount (){
    clearInterval(this.interval);
  }

  setSecondsElapsed () {
    if (this.state.countUp) {
      this.state.secondsElapsed ++;
        if (this.state.secondsElapsed >= 255) {
          this.state.countUp = false;
        }
    } else {
      this.state.secondsElapsed --;
        if (this.state.secondsElapsed <= 0) {
          this.state.countUp = true
        }
    }
  }

  tick () {
    this.setState({secondsElapsed: this.state.secondsElapsed});
    this.setSecondsElapsed ();
    this.changeHue (this.state.secondsElapsed);
  }

  render () {
    let base = this.state.base;
    let hue = this.state.hue;
    let saturation = this.state.saturation;
    let lightness = this.state.lightness;
    console.log(this.state.secondsElapsed);

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset className='fieldset-reset py2 '>
          <div className='flex flex-center mb2'>
            <label className='h4 bold flex-none mr2'>Base Color</label>
            <input type='text'
              value={base}
              onBlur={this.changeBase}
              onChange={this.changeBase}
              className='m0 flex-auto field xfield-light' />
          </div>
          <div className='sm-flex mxn2 no-select'>
            <div className='flex-auto px2'>
              <label className='h5 bold block'>Hue {this.state.secondsElapsed}&deg;</label>
              <input type='range' value={this.state.secondsElapsed}
                className='col-12 dark-gray range-light' />
            </div>
            <div className='flex-auto px2'>
              <label className='h5 bold block'>Saturation {saturation}</label>
              <input type='range' value={saturation}
                min='0' max='100'
                onBlur={this.changeSaturation}
                onChange={this.changeSaturation}
                className='col-12 dark-gray range-light' />
            </div>
            <div className='flex-auto px2'>
              <label className='h5 bold block'>Lightness {lightness}</label>
              <input type='range' value={lightness}
                min='0' max='100'
                onBlur={this.changeLightness}
                onChange={this.changeLightness}
                className='col-12 dark-gray range-light' />
            </div>
          </div>
        </fieldset>
      </form>
    )
  }

}

export default BaseColor
