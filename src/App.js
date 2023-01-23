import React from 'react'
import { addPrefetchExcludes } from 'react-static'

import './app.css'
import Footer from './components/Footer/Footer'
import Navigation from './components/Navigation/Navigation'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <div className='fill-area'>
      <Navigation></Navigation>
      <Footer></Footer>
    </div>
  );
}

export default App
