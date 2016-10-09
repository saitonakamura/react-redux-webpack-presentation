import React, { PropTypes } from 'react'
import 'semantic-ui-css/components/reset'
import 'semantic-ui-css/components/site'
import 'semantic-ui-css/components/grid'
import 'semantic-ui-css/components/button'
import DevTools from './DevTools'
import SlideStepper from './SlideStepper'

const App = (props) => (
  <div className="ui sixteen column grid" style={{ height: '100vh' }}>
    <div className="sixteen wide column">
      <SlideStepper />
      <DevTools />
    </div>
  </div>
)

App.propTypes = {}

export default App
