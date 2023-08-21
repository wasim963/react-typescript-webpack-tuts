import React from 'react'
import './styles.css'
import REACT_IMAGE from './react-image.png'
import REACT_LOGO from './react-logo.svg'
import { ClickCounter } from './ClickCounter'

const App = () => {
  const name = 'hello sir'
  return (
    <div>
      <h2>
        Edited React Typescript Webpack Starter Template {process.env.NODE_ENV}{' '}
        {process.env.name} {name}
      </h2>
      <img src={REACT_IMAGE} alt="React PNG" width={300} height={300} />
      <img src={REACT_LOGO} alt="Logo" width={300} />
      <ClickCounter />
    </div>
  )
}

export default App
