import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/index'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('main')
  )
}

render(App)
if (module.hot) {
  module.hot.accept('../src/index', () => { render(App) })
}
