import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import mousetrap from 'mousetrap'
import 'semantic-ui-css/components/segment.css'
import 'semantic-ui-css/components/menu.css'
import 'semantic-ui-css/components/button.css'
import 'semantic-ui-css/components/icon.css'
import slides from './slides/index'
import { goToNextSlide, goToPrevSlide, setSlidesCount, goToFirstSlide, goToLastSlide }
  from '../actions/index'

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
    <div style={{ height: '100vh', padding: '4.5em' }}>
      {slides[activeSlide]}
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
    this.props.setSlidesCount(slides.length)

    mousetrap.bind(['space', 'right'], () => this.props.goToNextSlide(), 'keyup')
    mousetrap.bind(['backspace', 'left'], () => this.props.goToPrevSlide(), 'keyup')
    mousetrap.bind(['ctrl+left', 'home'], () => this.props.goToFirstSlide(), 'keyup')
    mousetrap.bind(['ctrl+right', 'end'], () => this.props.goToLastSlide(), 'keyup')
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
