import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './components/Header.jsx'
import { Portal } from './components/Portal.jsx'
import { Footer } from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header className="container" title="Portal DevOps" />
    <Portal className="container"/>
    <Footer className="container"/>
  </React.StrictMode>,
)
