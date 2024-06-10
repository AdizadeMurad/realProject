import React from "react";
import {Link} from "react-router-dom";
import './Navbar.scss'
import NavbarBurger from "../NavbarBurger/index.jsx";
import { useTranslation } from "react-i18next";

function Navbar() {
    const { t } = useTranslation();
    return (
        <>
            <nav>
                <div className="navbar-general">
                    <div className="navbar-logo"><img className="navbar-logo-img"
                                                      src="https://alovservisimages.netlify.app/img/whitelogo.png"
                                                      alt=""/></div>
                    <NavbarBurger/>
                    <ul className="navbar-items">
                        <Link to={'/'}>
                            <li>{t('homepage')}</li>
                        </Link>
                        <Link to={'/combimaster'}>
                            <li>{t('combimasterpage')}</li>
                        </Link>
                        <Link to={'combibrains'}>
                            <li>{t('combibrainspage')}</li>
                        </Link>
                        <Link to={'salesofparts'}>
                            <li>{t('salesofdetailspage')}</li>
                        </Link>
                        <Link to={'contactus'}>
                            <li>{t('contactuspage')}</li>
                        </Link>
                        <select name="language">
                            <option value="Az">Az</option>
                            <option value="Tr" >Tr</option>
                            <option value="Ru" >Ru</option>
                            <option value="En" >En</option>
                        </select>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
