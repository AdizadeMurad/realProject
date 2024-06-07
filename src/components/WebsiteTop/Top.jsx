import React from "react";
import "./Top.scss";
import {FaHome, FaPhone, FaSupple} from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";

function Top() {
    return (
        <>
            <section className="topbar">

                <div className="topbar-items">
                    <div className="topbar-left">
                        <p>Xırdalan şəhəri,Mehdi Hüseynzadə küç №26</p>
                        <p>055-600-84-83</p>
                        <p>info@alovservis.az</p>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '20px', fontSize: '20px'}}>
                        <a href={'/'} style={{color: 'white'}}>
                            <FaHome/>
                        </a>
                        <a href={'/'} style={{color: 'white'}}>
                            <FaPhone/>
                        </a>
                        <a href={'/'} style={{color: 'white'}}>
                            <FaLocationDot/>
                        </a>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Top;
