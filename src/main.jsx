import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"//Bootstrap css
import "bootstrap/dist/js/bootstrap.bundle.min"//Bootstrap js
import './styles/main.css'//Main css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
