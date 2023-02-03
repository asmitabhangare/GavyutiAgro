import React from 'react'
import Item from "./Item";
import { ABOUT,BUSINESS} from "./Menus";

const ItemsContainer = () => {
  return (
    <div className='lg:ml-40'>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="ABOUT" />
      <Item Links={BUSINESS}/>
    </div>
    </div>
  )
}

export default ItemsContainer