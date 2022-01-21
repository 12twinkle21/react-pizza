import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';

function App() { 

   document.title = 'React Pizza'
   return (

      <div className='container'>
         <Routes>
            <Route path='*' element={<Header text='Самая вкусная пицца во вселенной' />} />
            <Route path='/cart/*' element={<Header text='Самая реактивная пицца' />} />
            </Routes>
         <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/cart/*' element={<Cart />} />
            </Routes>
      </div>
   )
   
}

export default App;