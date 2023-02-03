import React from 'react'
import ItemsContainer from './ItemsContainer'
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <footer className='bg-navbg text-textunder text-xl'>
        
        <ItemsContainer/>
        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-black text-sm pb-8"
      >
        
        <span>Copyright &#169;. "Gavyuti Agro". All rights reserved</span>
        {/* <SocialIcons Icons={Icons} /> */}
      </div>
    </footer>
  )
}

export default Footer