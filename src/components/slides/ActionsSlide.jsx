
import React, { PropTypes } from 'react'

const ActionsSlide = () => (
    <div>
      <h3 className="ui header">Actions</h3>

      <ul className="ui list">
        <li>Выражают намерение изменить состояние</li>
        <li>Представляют собой простые объекты</li>
      </ul>

      <h3 className="ui header">ActionCreators</h3>

      <ul className="ui list">
        <li>Представляют собой функции возвращающие Action</li>
        <li>Могут быть не чистыми и не идемпотентными</li>
      </ul>
    </div>
)

export default ActionsSlide
