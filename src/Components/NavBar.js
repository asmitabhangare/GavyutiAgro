import React, { useState } from "react";
import Logo from "../asset/Logo.png";
import NavLinks from "./NavLinks";
import {Link} from "react-router-dom"
const NavBar = () => {
const [open,setOpen] = useState(false)
  return (
    
    <nav className="bg-navbg md:drop-shadow-xl z-50">
        <div className="flex items-center font-medium justify-around">
           <div className="z-50 p-5 md:w-auto w-full flex justify-between">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9"/>
            <div className="text-3xl md:hidden" onClick={()=>setOpen(!open)}>
            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
            </div>
           </div> 
           <ul className="md:flex hidden uppercase items-center gap-8 font-serif">
            <NavLinks/>
            <li>
                <Link to="/" className="py-7 px-3 inline-block md:cursor-pointer hover:underline md:underline-offset-8
                decoration-textunder decoration-4">
                    CSR Policy
                </Link>
            </li>
            <li>
                <navLink to="/" className="py-7 px-3 inline-block md:cursor-pointer hover:underline underline-offset-8
                 decoration-textunder decoration-4">
                    Careers
                </navLink>
            </li>
            <li>
                <navLink to="/" className="py-7 px-3 inline-block md:cursor-pointer hover:underline underline-offset-8
                decoration-textunder decoration-4">
                    Contact Us
                </navLink>
            </li>
           </ul>
    {/* Mobile Navbar  */}
           <ul className={`
           md:hidden bg-navbg absolute w-full h-full bottom-0 py-24 p1-4 font-serif uppercase
           duration-500 ${open ? 'left-0' : "left-[-100%]"}
           `}>
            <NavLinks/>
            <li>
                <navLink to="/" className="py-7 px-3 inline-block hover:underline underline-offset-8
                decoration-textunder decoration-4">
                    CSR Policy
                </navLink>
            </li>
            <li>
                <navLink to="/" className="py-7 px-3 inline-block hover:underline underline-offset-8
                decoration-textunder decoration-4">
                    Careers
                </navLink>
            </li>
            <li>
                <navLink to="/" className="py-7 px-3 inline-block hover:underline underline-offset-8
                decoration-textunder decoration-4">
                    Contact Us
                </navLink>
            </li>
           </ul>
        </div>
    </nav>
  )
};

export default NavBar;