import React from "react";
import "./Footer.scss";
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {GrUserWorker} from "react-icons/gr";
import {BsFillMotherboardFill, BsFillTelephoneFill} from "react-icons/bs";
import {IoIosSettings} from "react-icons/io";
import {MdContactSupport} from "react-icons/md";
import {FaLocationDot} from "react-icons/fa6";
import {IoMailSharp} from "react-icons/io5";

function Footer() {
    return (
        <>
            <footer className="">
                <div className="footer-general">
                    <div className="footer-top">
                        <div className="footer-col-1">
                            <div>
                                <img
                                    src="https://alovservisimages.netlify.app/img/footer-img-logo-removebg-preview.png"
                                    alt=""
                                />
                            </div>
                            <div>
                                <p>
                                    Bizim saytımızın xidmət məqsədi müştərilərimizə göstərə
                                    biləcəyimiz yüksək səviyyədə xidmətlərimiz haqqında məlumat
                                    vermək,müştərilərimiz hər hansısa bir problem ilə
                                    qarşılaşdıqlarında sürətli bir şəkildə problemi həll
                                    edib,müştəri məmnuniyyəti qazanmaqdır.
                                </p>
                            </div>
                            <div>
                                <p className="footer-bottom-number-head">Əlaqə nömrəsi:</p>
                                <Link className="footer-bottom-number" href="">055-600-84-83</Link>
                            </div>
                        </div>

                        <div className="footer-col-2">
                            <div>
                                <p className="footer-heads">Birbaşa Əlaqə</p>
                            </div>
                            <div className="footer-col-2-items">
                                <div className="footer-col-2-contact-items">
                                    <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                        <FaLocationDot/>

                                        Xirdalan şəhəri,
                                        <br/>
                                        Mehdi Hüseynzadə küçəsi №26
                                    </p>
                                </div>
                                <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <IoMailSharp/>
                                    info@alovservis.az
                                </p>
                                <p style={{display: 'flex', alignItems: 'center', gap: '10px'}}><BsFillTelephoneFill/>

                                    055-600-84-83
                                </p>
                            </div>
                            <div className="footer-logo">
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <FaHome/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <BsFillMotherboardFill/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <GrUserWorker/>
                                    </div>
                                </Link>
                                <Link to={'/'}>
                                    <div className="footer-logo-back">
                                        <MdContactSupport/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="footer-col-3">
                            <div>
                                <p className="footer-heads">Sürətli Keçid</p>
                            </div>
                            <div className="footer-items">
                                <Link to={'/'} style={{display: "flex", alignItems: 'center', gap: '10px'}}>
                                    <FaHome/>
                                    Ana səhifə
                                </Link>
                                <Link to={'/combimaster'} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <GrUserWorker/>
                                    Kombi ustası
                                </Link>
                                <Link to={'/combibrains'} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <BsFillMotherboardFill/>
                                    Kombi plataları
                                </Link>
                                <Link to={'/salesofparts'} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <IoIosSettings/>
                                    Ehtiyat hissələrin satışı
                                </Link>
                                <Link to={'/contactus'}
                                      style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                    <MdContactSupport/>
                                    Bizimlə əlaqə
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>©</p>
                        <Link to={"/"}>Alov Servis</Link>
                        <p>2024</p>
                    </div>
                </div>
            </footer>
        </>
    )
        ;
}

export default Footer;
