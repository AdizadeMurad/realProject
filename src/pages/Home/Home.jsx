import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className="section-home-top">
        <div className="section-home-top-general">
          <div>
            <p className="alovservishead">ALOV & SERVIS</p>
          </div>
          <div className="">
            <p className="alovservistext">Kombilərin təmiri və yuyulması</p>
          </div>
          <div className="section-home-top-btn">
            <button className="kombiustasi-btn">
              <Link to={"/combimaster"}>Kombi ustası</Link>
            </button>
            <button className="bizimleelaqe-btn">
              <Link to={"/contactus"}>Bizimlə əlaqə</Link>
            </button>
          </div>
        </div>
      </section>

      <section className="section-home-aboutus">
        <div className="section-home-about">
          <div className="home-about-general">
            <div>
              <p className="home-about-top">HAQQIMIZDA</p>
              <p className="home-about-head">
                Ən təcrübəli işçi heyəti və yüksək keyfiyyətli ehtiyyat
                hissələrimizlə xidmətinizdəyik.
              </p>
              <div className="services-items-opinion">
                <div>
                  {" "}
                  <p>15 ilə yaxın təcrübə</p>
                  <p>Professional işçi heyəti</p>
                </div>
                <div>
                  <p>Zəmanətli işlər</p>
                  <p>Sərfəli və ucuz qiymət</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Hər hansı sualınız varsa zəng edin</p>
                  <a href="">055-600-84-83</a>
                </div>
                <div>
                  <button>Elə indi zəng edin.</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="home-aboutus-img"
              src="https://alovservisimages.netlify.app/img/kombi-temizli%C4%9Fi-1024x1024.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="section-home-services">
        <div className="home-services-general">
          <div className="services-staff">
            <p className="home-about-top">SERVİSİMİZİN XİDMƏTLƏRİ</p>
            <p className="home-about-head">Servisimiz bir neçə xidməti özündə birləşdirir.</p>
          </div>
          <div className="home-cards">
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p className="home-card-head">Kombi ustası</p>
              <p className="home-card-text">
                Kombilərin yüksək səviyyədə təmiri və istilik sisteminin
                qoşulması və bərpası
              </p>
            </div>
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p className="home-card-head">Kombi plataları</p>
              <p className="home-card-text">
                Kombi platalarını tam şəkildə,təhlükəsiz və sərfəli qiymətə
                təmir edirik.
              </p>
            </div>

            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p className="home-card-head">Ehtiyat hissələrin satışı</p>
              <p className="home-card-text">
                Kombilərə aid hər növ ehtiyyat hissələrinin yüksək keyfiyyətdə
                və sərfəli qiymətə satışı
              </p>
            </div>
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p className="home-card-head">Bizimlə Əlaqə</p>
              <p className="home-card-text">
                Kombinizdə və istilik sisteminizdə hər hansısa problem
                yaranarsa,tez bir şəkildə bizimlə əlaqə saxlaya bilərsiniz.
              </p>
            </div>

            <div className="home-card-tel">
              <p className="home-card-tel-head">Əlaqə nömrəsi:</p>
              <p className="home-card-tel-head">
                Sürətli şəkildə əlaqə saxlaya bilərsiniz.
              </p>
              <p className="home-card-tel-head">055-600-84-83</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
