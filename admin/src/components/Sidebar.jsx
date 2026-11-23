import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar' style={{ width: '20%', borderRight: '1px solid #ccc', minHeight: '100vh', padding: '20px' }}>
      <div className="sidebar-options" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <NavLink to="/add" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
          ➕ Add Items (إضافة منتج)
        </NavLink>
        <NavLink to="/list" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
          📋 List Items (عرض المنتجات)
        </NavLink>
        <NavLink to="/orders" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>
          📦 Orders (الطلبات)
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar