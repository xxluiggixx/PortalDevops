import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/Header.jsx'
import { Portal } from './components/Portal.jsx'
import { Footer } from './components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header  title="Portal DevOps" />
    <Portal />
    <Footer />
  </React.StrictMode>,
)
