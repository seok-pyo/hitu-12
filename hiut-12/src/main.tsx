import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Detail from './pages/detail'
import './styles/index.css'
import Archive from './pages/archive'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)