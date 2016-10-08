import { combineReducers } from 'redux'
import { GO_TO_NEXT_SLIDE, GO_TO_PREV_SLIDE, SET_SLIDES_COUNT } from '../actions/index'

const presentation = (state = { activeSlide: 0 }, action) => {
  switch (action.type) {
    case GO_TO_NEXT_SLIDE:
      return { ...state,
        activeSlide: state.activeSlide < state.slidesCount - 1
          ? state.activeSlide + 1
          : state.slidesCount - 1,
      }
    case GO_TO_PREV_SLIDE:
      return { ...state,
        activeSlide: state.activeSlide > 0
          ? state.activeSlide - 1
          : 0,
      }
    case SET_SLIDES_COUNT:
      return { ...state,
        slidesCount: action.slidesCount,
      }
    default:
      return state
  }
}

export default combineReducers({ presentation })
