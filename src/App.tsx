import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Account from './Pages/Account';

function App() {
    return <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/signup" element={<Account formType="Signup"/>} />
                <Route path="/login" element={<Account formType="Login"/>} />
            </Routes>
        </BrowserRouter>
    </>
}

export default App;