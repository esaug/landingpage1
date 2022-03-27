import { render } from '@testing-library/react';
import React, {useState} from 'react'
import { FiMenu, FiX} from "react-icons/fi"
import "./nav.css"



const Navbar = ({navbarLinks}) => {


    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () =>{
      setMenuClicked(!menuClicked)
    }

  
  return (
    <nav className='navbar'>
        <span className='navbar_logo'> Travell</span>

        {menuClicked ? (
        <FiMenu size={25} className={"navbar_menu"} onClick={toggleMenuClick}/>
        
        ) : (
        <FiX size={25} className={"navbar_menu"} onClick={toggleMenuClick} />
    )}
    <ul className={
        menuClicked ? "navbar_list" : "navbar_list navbar_list -- active"
    }>

    </ul>
        <ul className='navbar_list'>
            {navbarLinks.map((item, index)=>{
                return(
                    <li className='navbar_item' key={index}>
                        <a href={item.url} className='navbar_link'>{item.title}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar