import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Pages/Header';
import Dashboard from './Pages/Dashboard';
import Account from './Pages/Account';

function App() {
    return <div className="max-w-full">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/signup" element={<Account formType="Signup"/>} />
                <Route path="/login" element={<Account formType="Login"/>} />
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;