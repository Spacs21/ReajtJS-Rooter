// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from './context/index.jsx'
import { initialState, reducer } from './context/reducer.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
  </BrowserRouter>
  // </StrictMode>,
)
