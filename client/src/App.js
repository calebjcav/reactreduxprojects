import React from 'react'
import logo from './logo.svg'
import './App.css'
import { MovieList, Modal, MovieVideo } from './Containers'
import { Provider } from 'react-redux'
import store from './Store'
import { ActivePage } from './Containers'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <ActivePage.LoginPage />
        <ActivePage.VideoPage />
      </header>
    </div>
    </Provider>
  )
}

export default App
