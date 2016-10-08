import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import 'semantic-ui-css/components/segment'
import 'semantic-ui-css/components/menu'
import slides from './slides/index'
import { goToNextSlide, goToPrevSlide, setSlidesCount } from '../actions/index'

const SlideStepper = ({ activeSlide, goToNextSlide, goToPrevSlide }) => {
  return (
    <div>
      <div className="ui inverted menu">
        <a className="item" onClick={goToPrevSlide}>Prev slide</a>
        <a className="item" onClick={goToNextSlide}>Next slide</a>
    </div>
      <div className="ui inverted segment">
        {slides[activeSlide]}
      </div>
    </div>
  )
}

SlideStepper.propTypes = {
  activeSlide: PropTypes.number.isRequired,
  goToNextSlide: PropTypes.func.isRequired,
  goToPrevSlide: PropTypes.func.isRequired,
}

class SlideStepperComplex extends Component {
  componentDidMount() {
    this.props.setSlidesCount(slides.length)
  }
  render() {
    return (
      <SlideStepper {...this.props} />
    )
  }
}

SlideStepperComplex.propTypes = {
  setSlidesCount: PropTypes.func.isRequired,
}

export default connect(
    state => ({
      activeSlide: state.presentation.activeSlide
    }),
    dispatch => ({
      goToNextSlide: () => dispatch(goToNextSlide()),
      goToPrevSlide: () => dispatch(goToPrevSlide()),
      setSlidesCount: (slidesCount) => dispatch(setSlidesCount(slidesCount)),
    })
)(SlideStepperComplex)
