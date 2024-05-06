import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './Components/Common/MainLayout'
import HomePage from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />{/* "/" url'i çağrıldığında yani ilk defa sayfa çağrılınca "index" şeklinde işaretlediğimizden ilk olarak HomePage çağrılır */}
              <Route path='/movies' element={<MoviesPage/>} />
            </Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
