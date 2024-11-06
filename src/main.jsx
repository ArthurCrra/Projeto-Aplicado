import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
