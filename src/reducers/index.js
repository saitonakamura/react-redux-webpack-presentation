import { combineReducers } from 'redux'
import { GO_TO_NEXT_SLIDE, GO_TO_PREV_SLIDE, } from '../actions/index'

const presentation = (state = { activeSlide: 0 }, action) => {
  switch (action.type) {
    case GO_TO_NEXT_SLIDE:
      return { ...state,
        activeSlide: state.activeSlide + 1,
      }
    case GO_TO_PREV_SLIDE:
      return { ...state,
        activeSlide: state.activeSlide - 1,
      }
    default:
      return state
  }
}

export default combineReducers({ presentation })
