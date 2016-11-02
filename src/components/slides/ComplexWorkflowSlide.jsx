import React, { PropTypes } from 'react'

const ComplexWorkflowSlide = () => (
  <div>
    <h3 className="ui inverted header">Но что если у меня какой-то сложный воркфлоу?</h3>

    <h4 className="ui inverted header">Процесс</h4>

    <a className="ui basic label">Write</a>
    <i className="arrow right icon" />
    <a className="ui basic label">Save</a>
    <i className="arrow right icon" />
    <a className="ui basic label"><i>autoreload</i></a>
    <i className="arrow right icon" />
    <a className="ui basic label">Routine</a>
    <i className="arrow right icon" />
    <a className="ui basic label">Check</a>
  </div>
)

export default ComplexWorkflowSlide
