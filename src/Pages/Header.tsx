import React, {useState} from 'react';
import { Outlet, Link } from 'react-router-dom';

function Header() {
    let [menuState, setMenu] = useState(0);
    return (
        <header className="flex justify-between border-b-2 border-b-black drop-shadow-md">
            <div className="flex-1 my-2 ml-2" id="logo">
                <Link to="/"><img className="h-auto w-40" src={require("../Images/BusCheck_logo.png")} alt="Logo"/></Link>
            </div>
            <div className="flex flex-initial">
                <button className="mr-3"><Link to="/">About Us</Link></button>
                <button className="mr-3"><Link to="/">Support</Link></button>
                <button className="mr-3"><Link to="/">Contact Us</Link></button>
                <button className="mr-3"><Link to="Signup">Signup</Link></button>
                <button className="mr-3"><Link to="Login">Login</Link></button>
                <Outlet/>
            </div>
        </header>   
    )
}

export default Header;