import React from 'react'
import Homepage from './pages/Homepage'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className='bg-red-400 font-extrabold'>
      <Homepage/>
      <Toaster/>
    </div>
  )
}

export default App
