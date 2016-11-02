import React, { PropTypes } from 'react'
import redux from './redux.svg'

const ReduxSlide = () => (
  <div>
    <h3 className="ui inverted header">Redux</h3>
    <ul className="ui bulleted list">
      <li className="item">State</li>
      <li className="item">Actions & Action creators</li>
      <li className="item">Reducers</li>
    </ul>
    <p>
      <img src={redux} />
    </p>
  </div>
)

export default ReduxSlide
