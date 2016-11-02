import React, { PropTypes } from 'react'

const ApplyReduxToHMRSlide = () => (
    <div>
      <h3 className="ui inverted header">Но как Redux нам поможет?</h3>

      <ul className="ui bulleted list">
        <li className="item">Централизованное изменение состояния — нет event hell</li>
        <li className="item">Immutable — можем путешествовать во времени</li>
        <li className="item">Immutable — можем не делать deep compare</li>
        <li className="item">Сериализовать состояние и сохранить в оффлайн</li>
        <li className="item">Сериализовать состояние при ошибке и отдебажить</li>
      </ul>
    </div>
)

export default ApplyReduxToHMRSlide
