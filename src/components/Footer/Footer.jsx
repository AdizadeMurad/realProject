import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-general">
          <div className="footer-top container">
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
                <p  className="footer-bottom-number-head">Əlaqə nömrəsi:</p>
                <Link className="footer-bottom-number" href="">055-600-84-83</Link>
              </div>
            </div>

          <div className="footer-col2-col3">
          <div className="footer-col-2">
              <div>
                <p className="footer-heads">Birbaşa Əlaqə</p>
              </div>
              <div className="footer-col-2-items">
                <div className="footer-col-2-contact-items">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>
                    Xirdalan şəhəri,
                    <br />
                    Mehdi Hüseynzadə küçəsi №26
                  </p>
                </div>
                <p>
                  <i class="fa-solid fa-envelope-open"></i> info@alovservis.az
                </p>
                <p>
                  <i class="fa-solid fa-phone"></i> 055-600-84-83
                </p>
              </div>
              <div className="footer-logo">
               <Link> <div className="footer-logo-back">
                  
                    <i class="fa-brands fa-facebook"></i>
                  
                </div></Link>
                  <Link> <div className="footer-logo-back">
               
                    {" "}
                    <i class="fa-brands fa-instagram"></i>
                  
                </div></Link>
                <Link> <div className="footer-logo-back">
                 
                    <i class="fa-brands fa-twitter"></i>
                  
                </div></Link>
               <Link> <div className="footer-logo-back">
                  
                    <i class="fa-brands fa-linkedin-in"></i>
                  
                </div></Link>
              </div>
            </div>
            <div className="footer-col-3">
              <div>
                <p className="footer-heads">Sürətli Keçid</p>
              </div>
              <div className="footer-items">
                <Link to={'/'}>
                  <i class="fa-solid fa-arrow-right-long"></i> Ana səhifə
                </Link>
                <Link  to={'/combimaster'}>
                  <i class="fa-solid fa-arrow-right-long"></i> Kombi ustası
                </Link>
                <Link  to={'/combibrains'}>
                  <i class="fa-solid fa-arrow-right-long"></i> Kombi plataları
                </Link>
                <Link  to={'/salesofparts'}>
                  <i class="fa-solid fa-arrow-right-long"></i> Ehtiyat
                  hissələrin satışı
                </Link>
                <Link  to={'/contactus'}>
                  <i class="fa-solid fa-arrow-right-long"></i> Bizimlə əlaqə
                </Link>
              </div>
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
  );
}

export default Footer;
