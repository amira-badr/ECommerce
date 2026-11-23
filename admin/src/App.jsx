import React from 'react'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './components/Add'
import List from './components/List'
import Orders from './components/Orders'

const App = () => {
  const url = "http://localhost:4000";

  return (
    <div>
      <h1 style={{ padding: '20px', borderBottom: '1px solid #ccc', margin: 0 }}>لوحة التحكم (Admin Panel)</h1>
      <div className="app-content" style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App