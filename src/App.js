import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { supabase } from './supabase/supabase';
import TOSmodals from './componentes/TOSModal';

function App() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    supabase.auth.onAuthStateChange((event,session)=> {
      if (!session){
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/login" element = {<Login />} />
        <Route path="*" element = {<NotFound />} />
      </Routes>
      <bottom>
        <button onClick={() => setModalOpen(true)}
        >
          Terminos y Servicios
        </button>
        {modalOpen && <TOSmodals setOpenModal={setModalOpen}/>}
      </bottom>
    </div>
  );
}

export default App;
