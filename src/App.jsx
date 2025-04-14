import './App.css'
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Cadastro from './pages/cadastro/cadastro.jsx';
import Login from './pages/login/login';
import Editar from './pages/cadastrarSenha/cadastrarSenha';

function App () {

  return (
    <div className="background">
      <img src="https://forbes.com.br/wp-content/uploads/2023/08/ABRE-1-768x512.jpg" />
      <BrowserRouter>
        <Routes>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/' element={<Login />} exact/>
          <Route path='/editar' element={<Editar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
