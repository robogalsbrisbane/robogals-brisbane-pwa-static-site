import React from 'react'
import { addPrefetchExcludes } from 'react-static'

import './app.css'
import Navigation from './components/Navigation/Navigation'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Navigation></Navigation>
  )
}

export default App
