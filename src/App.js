import { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
 import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Points from "./pages/Points";
import Register from "./pages/Register";
import Shopping from "./pages/Shopping";
import NotFound from "./pages/NotFound";

function App() {
  const [kullanici,setKullanici]=useState(null);
  const [sifre,setSifre]=useState(null);
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Login kullanici={kullanici} setKullanici={setKullanici} sifre={sifre} setSifre={setSifre} />} />
      <Route path='register' element={<Register kullanici={kullanici} setKullanici={setKullanici} sifre={sifre} setSifre={setSifre} />} />
      <Route path='contact' element={<Contact/>} />
      <Route path='home' element={<Home/>} />
      <Route path='news' element={<News/>} />
      <Route path='points' element={<Points/>} />
      <Route path='shopping' element={<Shopping/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
