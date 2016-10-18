import React, { PropTypes } from 'react'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/site.css'
import 'semantic-ui-css/components/grid.css'
import 'semantic-ui-css/components/button.css'
import DevTools from './DevTools'
import SlideStepper from './SlideStepper'

const App = (props) => (
  <div>
      <SlideStepper />
      <DevTools />
  </div>
)

App.propTypes = {}

export default App
