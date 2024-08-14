import React from 'react'

import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AdminScreen from './pages/AdminScreen';
import LoginScreen from './pages/LoginScreen';
import HomeScreen from './pages/HomeScreen';
import ErrorScreen from './pages/ErrorScreen';
import AboutScreen from './pages/AboutScreen';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={ <HomeScreen/>} />
      <Route path='/admin' element={<AdminScreen/>} />
      <Route path='/login' element={<LoginScreen/>} />
      <Route path='/About' element={<AboutScreen/>} />
      <Route path='*' element={<ErrorScreen/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
