import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Routes,Route} from 'react-router-dom';
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
import axios from 'axios';
import CoinPage from './routes/CoinPage';
import Footer from './component/Footer'
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [coin,setCoin] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'
  
  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoin(response.data)
      console.log(response.data)
    })
  },[url])
  return (
    <>
      <ThemeProvider>
      <AuthContextProvider>

        <Navbar/>
        <Routes>
          <Route path='/' element={<Home coin={coin}/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/coin/:coinId' element={<CoinPage/>}>
            <Route path=':coinId' />
            <Route/>
          </Route>
        </Routes>
        <Footer/>
      </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
