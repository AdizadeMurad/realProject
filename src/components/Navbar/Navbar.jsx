import React from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'
function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar-general">
          <div className="navbar-logo"><img className="navbar-logo-img" src="https://alovservisimages.netlify.app/img/whitelogo.png" alt="" /></div>
          <ul className="navbar-items">
            <Link to={'/'}>
              <li>Ana səhifə</li>
            </Link >
            <Link to={'/combimaster'}>
              <li>Kombi ustası</li>
            </Link>
            <Link to={'combibrains'}>
              <li>Kombi plataları</li>
            </Link>
            <Link to={'salesofparts'}>
              <li>Ehtiyat hissələrin satışı</li>
            </Link>
            <Link to={'contactus'}>
              <li>Bizimlə Əlaqə</li>
            </Link>

            <select name="language">
                <option value="Az">Az</option>
                <option value="Tr">Tr</option>
                <option value="Ru">Ru</option>
                <option value="Eng">Eng</option>
              </select>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
