import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { logo } from '../assets'

const Navbar = () => {

  return (
    <nav className={`${styles.paddingXLogo} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      <div className="w-full flex justify-between items-center max-w-7xl max-auto">
        <Link to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <img src={logo} alt='logo' className="w-9 h-9 object-contain" />
          <p className="text-white text-[30px] font-bold cursor-pointer flex">Xzect</p>
        </Link>
      </div>

    </nav>

  )
}

export default Navbar