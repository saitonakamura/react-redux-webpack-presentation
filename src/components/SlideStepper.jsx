import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import mousetrap from 'mousetrap'
import 'semantic-ui-css/semantic.css'
import slides from './slides/index'
import { goToNextSlide, goToPrevSlide, setSlidesCount, goToFirstSlide, goToLastSlide }
  from '../actions/index'
import logo from './logo.png'

const Stepper = ({ goToNextSlide, goToPrevSlide, goToFirstSlide, goToLastSlide }) => (
  <div className="ui large icon buttons">
    <button className="ui button" onClick={goToFirstSlide}>
      <i className="step backward icon"></i>
    </button>
    <button className="ui button" onClick={goToPrevSlide}>
      <i className="step backward icon"></i>
    </button>
    <button className="ui button" onClick={goToNextSlide}>
      <i className="step forward icon"></i>
    </button>
    <button className="ui button" onClick={goToLastSlide}>
      <i className="fast forward icon"></i>
    </button>
  </div>
)

const SlideStepper = (props) => {
  const { activeSlide } = props
  return (
    <div style={{ height: '100vh', padding: '2rem 10rem 4rem 3rem' }}>
      {slides[activeSlide]}
      <div style={{ position: 'fixed', bottom: '1rem', right: '1.5rem' }}>
        <img style={{ height: '4rem' }} src={logo} />
      </div>
    </div>
  )
}

SlideStepper.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  goToFirstSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
  goToLastSlide: PropTypes.func.isRequired,
}

class SlideStepperComplex extends Component {
  componentDidMount() {
    const { setSlidesCount, goToNextSlide, goToPrevSlide, goToFirstSlide, goToLastSlide } = this.props

    setSlidesCount(slides.length)

    mousetrap.bind(['space', 'right'], () => goToNextSlide(), 'keyup')
    mousetrap.bind(['backspace', 'left'], () => goToPrevSlide(), 'keyup')
    mousetrap.bind(['ctrl+left', 'home'], () => goToFirstSlide(), 'keyup')
    mousetrap.bind(['ctrl+right', 'end'], () => goToLastSlide(), 'keyup')
  }

  componentWillUnmount() {
    mousetrap.unbind(['space', 'right'])
    mousetrap.unbind(['backspace', 'left'])
    mousetrap.unbind(['ctrl+left', 'home'])
    mousetrap.unbind(['ctrl+right', 'end'])
  }

  render() {
    return (
      <SlideStepper {...this.props} />
    )
  }
}

SlideStepperComplex.propTypes = {
  goToFirstSlide: PropTypes.func.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
  goToLastSlide: PropTypes.func.isRequired,
  setSlidesCount: PropTypes.func.isRequired,
}

export default connect(
    state => ({
      activeSlide: state.presentation.activeSlide
    }),
    dispatch => ({
      goToNextSlide: () => dispatch(goToNextSlide()),
      goToPrevSlide: () => dispatch(goToPrevSlide()),
      goToFirstSlide: () => dispatch(goToFirstSlide()),
      goToLastSlide: () => dispatch(goToLastSlide()),
      setSlidesCount: (slidesCount) => dispatch(setSlidesCount(slidesCount)),
    })
)(SlideStepperComplex)
