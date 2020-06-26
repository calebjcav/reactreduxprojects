import React from 'react'
import logo from './logo.svg'
import './App.css'
import { MovieList, Modal, MovieVideo } from './Containers'
import { Provider } from 'react-redux'
import store from './Store'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <h1>Media Server App</h1>
        <MovieList />    
        <Modal>
          <MovieVideo />
          <p>Comments</p>
        </Modal>
      </header>
    </div>
    </Provider>
  )
}

export default App
