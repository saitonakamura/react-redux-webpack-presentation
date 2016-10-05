import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import 'semantic-ui-css/components/segment'
import 'semantic-ui-css/components/menu'
import HelloSlide from './slides/HelloSlide'
import EndSlide from './slides/EndSlide'
import { goToNextSlide, goToPrevSlide } from '../actions/index'

const slides = [
  <HelloSlide />,
  <EndSlide />,
]

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

export default connect(
    state => ({
      activeSlide: state.presentation.activeSlide
    }),
    dispatch => ({
      goToNextSlide: () => dispatch(goToNextSlide()),
      goToPrevSlide: () => dispatch(goToPrevSlide()),
    })
)(SlideStepper)
