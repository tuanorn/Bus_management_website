import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Login from "./Account";

function Header() {
    let [menuState, setMenu] = useState(0);
    return (
        <header className="flex justify-between border-b-2 border-b-black drop-shadow-md mb-10">
            <div className="flex-1" id="logo">
                <img className="h-auto w-40" src="https://www.safebus.io/wp-content/uploads/2019/09/logo.png" alt="Logo"/>
            </div>
            <div className="flex flex-initial">
                <button className="bg-white hover:bg-gray-500 mr-3" onClick={() => {
                    setMenu(0)
                }}>About Us</button>
                <button className={(menuState == 1? "active" : "") + "mr-3"}><Link to="/">Support</Link></button>
                <button className={(menuState == 2? "active" : "") + "mr-3"}><Link to="/">Contact Us</Link></button>
                <button className={(menuState == 3? "active" : "") + "mr-3"}><Link to="Signup">Signup</Link></button>
                <button className={(menuState == 4? "active" : "") + "mr-3"}><Link to="Login">Login</Link></button>
                <Outlet/>
            </div>
        </header>
    )
}

export default Header;