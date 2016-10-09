import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import key from 'keymaster'
import mousetrap from 'mousetrap'
import 'semantic-ui-css/components/segment'
import 'semantic-ui-css/components/menu'
import 'semantic-ui-css/components/button'
import 'semantic-ui-css/components/icon'
import slides from './slides/index'
import { goToNextSlide, goToPrevSlide, setSlidesCount, goToFirstSlide, goToLastSlide }
  from '../actions/index'

const SlideStepper = ({ activeSlide, goToNextSlide, goToPrevSlide, goToFirstSlide, goToLastSlide }) => {
  return (
    <div>
      <div className="ui center aligned grid">
        <div className="row">
          <div className="sixteen wide column">
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
          </div>
        </div>
      </div>
      <div className="ui inverted segment" style={{ height: '88vh' }}>
        {slides[activeSlide]}
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
