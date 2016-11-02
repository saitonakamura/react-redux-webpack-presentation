
import React, { PropTypes } from 'react'

const ActionsSlide = () => (
    <div>
      <h3 className="ui inverted header">Actions</h3>

      <ul className="ui bulleted list">
        <li className="item">Выражают намерение изменить состояние</li>
        <li className="item">Представляют собой простые объекты</li>
      </ul>

      <h3 className="ui inverted header">ActionCreators</h3>

      <ul className="ui bulleted list">
        <li className="item">Представляют собой функции возвращающие Action</li>
        <li className="item">Могут быть не чистыми и не идемпотентными</li>
      </ul>
    </div>
)

export default ActionsSlide
