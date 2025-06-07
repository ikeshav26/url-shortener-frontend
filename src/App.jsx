import React from 'react'
import Homepage from './pages/Homepage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/Loginpage'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import CustomUrl from './pages/CustomUrl'
import AuthProvider, { useAuth } from './context/AuthProvider'

const App = () => {
  const {authuser, setauthuser} = useAuth();
  return (
    <div className='font-extrabold'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/customUrl' element={authuser? <CustomUrl/>:<Navigate to="/"/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
