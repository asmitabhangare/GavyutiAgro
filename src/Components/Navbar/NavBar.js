import React, { useState } from "react";
import Logo from "../../asset/Logo.png";
import NavLinks from "./NavLinks";
import {Link} from "react-router-dom"
const NavBar = () => {
const [open,setOpen] = useState(false)
  return (
    
    <nav className="bg-navbg md:drop-shadow-xl z-50 md:relative w-full">
        <div className="flex items-center font-medium justify-around">
           <div className="z-50 relative p-5 md:w-auto w-full flex justify-between">
            <Link to="/">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-12 w-auto"/>
            </Link>
            <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
            </div>
           </div> 
           <ul className="md:flex hidden uppercase items-center gap-8 font-serif">
            <NavLinks/>
            
            <li>
                <Link to="/contactus" className="py-7 px-3 inline-block md:cursor-pointer hover:underline underline-offset-8
                decoration-textunder decoration-4 font-body">
                    Contact Us
                </Link>
            </li>
           </ul>
    {/* Mobile Navbar  */}
           <ul className={`
           md:hidden bg-navbg absolute z-40 w-full h-full bottom-0 py-24 p1-4 font-serif uppercase
           duration-500 ${open ? 'left-0' : "left-[-100%]"}
           `}>
            <NavLinks/>
            <li>
                <Link to="/contactus" className="py-7 px-3 inline-block hover:underline underline-offset-8
                decoration-textunder decoration-4 font-body">
                    Contact Us
                </Link>
            </li>
           </ul>
        </div>
    </nav>
  )
};

export default NavBar;