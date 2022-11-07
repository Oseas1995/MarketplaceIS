import logo from './logo.svg';

import Header from './common/header/Header';
import Footer from './common/footer/Footer';
import {useState, useEff} from "react"



import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/login/Login';
import Home from './pages/home/Home';




function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path = "/Login" element={<Login/>}/>  // una de las rutas donde quiero que vaya mi pagina
          <Route path = "/Home" element={<Home/>}/> // una de las rutas donde quiero que vaya mi pagina

          /*
             el routes es para enlistar todas los links, como si fuera una lista
             y el router es para meter el link especifico
            comment 
          */


          
      </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )

}

export default App;
