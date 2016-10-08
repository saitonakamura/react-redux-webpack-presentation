export const GO_TO_NEXT_SLIDE = 'GO_TO_NEXT_SLIDE'
export const goToNextSlide = () => ({
  type: GO_TO_NEXT_SLIDE,
})

export const GO_TO_PREV_SLIDE = 'GO_TO_PREV_SLIDE'
export const goToPrevSlide = () => ({
  type: GO_TO_PREV_SLIDE,
})

export const SET_SLIDES_COUNT = 'SET_SLIDES_COUNT'
export const setSlidesCount = (slidesCount) => ({
  type: SET_SLIDES_COUNT,
  slidesCount,
})
