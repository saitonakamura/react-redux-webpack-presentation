import React, { PropTypes } from 'react'

const ReducersSlide = () => (
    <div>
      <h3 className="ui inverted header">Reducers</h3>

      <ul className="ui bulleted list">
        <li className="item">Функции принимающие текущий state и action</li>
        <li className="item">Чистые функции</li>
        <li className="item">Иммутабельно меняют state возвращая новый</li>
      </ul>
    </div>
)

export default ReducersSlide
