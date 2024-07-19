import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Account from './Account';

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