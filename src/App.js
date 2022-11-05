import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import LogUp from './pages/LogUp';
import Register from './pages/Registrar/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { supabase } from './supabase/supabase';



function App() {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        console.log(event,session);
        navigate('/login')
      } else {
        navigate('/home')
      }
    })
  }, [])

  return (
    <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logup" element={<LogUp />} />
        </Routes>


    </div>
  );
}

export default App;
