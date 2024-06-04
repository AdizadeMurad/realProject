import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="container">
        <div className="footer-general">
          <div className="footer-top">
            <div className="footer-col-1">
              <div>
                <img src="https://alovservisimages.netlify.app/img/footer-img-logo-removebg-preview.png" alt="" />
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
                  <p>Əlaqə nömrəsi:</p>
                  <a href="">055-600-84-83</a>
                </div>
            </div>

            <div className="footer-col-2">
              <div>
                <p className="footer-heads">Birbaşa Əlaqə</p>
              </div>
              <div className="footer-col-2-items">
             <div>
             <i class="fa-solid fa-location-dot"></i><p>Xirdalan şəhəri,<br />Mehdi Hüseynzadə küçəsi №26</p>
             </div>
                <p><i class="fa-solid fa-envelope-open"></i> info@alovservis.az</p>
                <a><i class="fa-solid fa-phone"></i> 055-600-84-83</a>
              </div>
              <div>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
            </div>
            <div className="footer-col-3">
              <div>
                <p className="footer-heads">Sürətli Keçid</p>
              </div>
              <div className="footer-items">
                <Link>Ana səhifə</Link>
                <Link>Kombi ustası</Link>
                <Link>Kombi plataları</Link>
                <Link>Ehtiyat hissələrin satışı</Link>
                <Link>Bizimlə əlaqə</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
         <p>©</p><Link to={'/'}>Alov Servis</Link><p>2024</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
