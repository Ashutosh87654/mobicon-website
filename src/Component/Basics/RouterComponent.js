import React from 'react'
import {BrowserRouter, Routes} from 'react-router-dom'

const RouterComponent = ( {children}) => {
  return (
    <BrowserRouter>
          <Routes>
            {children}
          </Routes>
      </BrowserRouter>
  )
}

export default RouterComponent