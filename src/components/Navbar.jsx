import './Navbar.css'
import { useState } from 'react'
import { TfiDropboxAlt } from "react-icons/tfi"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className='navbar'>
      <a href='/#home' className='logo'>
        <div className='logo-iocn'>
         <img  src='https://i.ibb.co/5xYQJVFL/16ec22a5-bc2c-4640-9249-35f514835786.png'
               alt='VR Logo'
               className='logo-image'
         />
        </div>

        <h2>
          <span className='vr-text'>VR</span>{' '}
          <span className='package-text'>PACKAGE</span>
        </h2>
      </a>

    
      <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>

        <li>
          <HashLink  smooth to='/#home' onClick={() => setMenuOpen(false)}> Home </HashLink>
        </li>

        <li>
          <HashLink smooth to='/#about'  onClick={() => setMenuOpen(false)} > About</HashLink>
        </li>

        <li>
          <HashLink smooth to='/#products'  onClick={() => setMenuOpen(false)}>  Products </HashLink>
        </li>

        <li>
          <HashLink smooth to='/#process' onClick={() => setMenuOpen(false)}>  Process </HashLink>
        </li>
        <li>
          <HashLink smooth to='/#gallery'  onClick={() => setMenuOpen(false)} > Gallery </HashLink>
        </li>

        

        <li>
          <HashLink smooth to='/#contact' onClick={() => setMenuOpen(false)}> Contact </HashLink>
        </li>

      </ul>

    <HashLink smooth to='/get-quote'> <button className='nav-btn'>  Get Quote </button> </HashLink>


      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>

        {
          menuOpen
            ? <FaTimes />
            : <FaBars />
        }

      </div>

    </nav>
  )
}

export default Navbar;