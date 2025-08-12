import { useState } from 'react'
import './index.css'
import LoginPage from './pages/LoginPage'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  

  return (
    <>
    <LoginPage/>
    <StudentDashboard/>
    <AdminDashboard/>
    </>
  )
}

export default App
