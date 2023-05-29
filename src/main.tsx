import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './router/index.tsx'
import "styles/index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
