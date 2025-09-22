import React from 'react'
export const backendUrl = import.meta.env.VITE_API_URL;
import {ToastContainer} from 'react-toastify'
import './App.css'
import './styles/theme.css'
import AppRoutes from './routes/AppRoutes'
function App() {


  return (
    <>
      <ToastContainer />
    
      <AppRoutes />
    </>
  )
}

export default App
