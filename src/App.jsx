import './App.css'
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Cadastro from './auth/cadastro/cadastro.jsx';
import Login from './auth/login/login.jsx';
import Editar from './auth/cadastrarSenha/cadastrarSenha.jsx';
import Home from './pages/home/home.jsx';
import PrivateRoute from './PrivateRoute.jsx';

function App() {
  return (
    <div className="background">
      <img src="https://forbes.com.br/wp-content/uploads/2023/08/ABRE-1-768x512.jpg" alt="Background" />
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editar' element={<Editar />} />
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;