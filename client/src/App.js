import React from 'react'
import logo from './logo.svg'
import './App.css'
import { MovieList, Modal, MovieVideo } from './Containers'
import { Provider } from 'react-redux'
import store from './Store'
import { VideoPage } from './Pages'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <VideoPage />
      </header>
    </div>
    </Provider>
  )
}

export default App
