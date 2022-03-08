import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages';
import page1 from './pages/page1';
import page2 from './pages/page2';
import page3 from './pages/page3';
import page4 from './pages/page4';
import page2_1 from './pages/page2_1';
import page2_2 from './pages/page2_2';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={Home} />
        <Route path='/page1' element={page1} />
        <Route path='/page2' element={page2} />
        <Route path='/page3' element={page3} />
        <Route path='/page4' element={page4} />
        <Route path='/page2_2' element={page2_2} />
        <Route path='/page2_1' element={page2_1} />
        <Route path='/*' element={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
