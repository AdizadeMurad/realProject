import React from "react";
import "./Home.scss";
function Home() {
  return (
    <>
      <section className="section-home-top">
        <div>
          <div>
            <p>ALOV & SERVIS</p>
          </div>
          <div>
            <p>Kombilərin təmiri və yuyulması</p>
          </div>
          <div>
            <button>Kombi ustası</button>
            <button>Bizimlə əlaqə</button>
          </div>
        </div>
      </section>

      <section className="section-home-aboutus">
        <div>
          <div>
            <div>
              <p>HAQQIMIZDA</p>
              <p>
                Ən təcrübəli işçi heyəti və yüksək keyfiyyətli ehtiyyat
                hissələrimizlə xidmətinizdəyik.
              </p>
              <div>
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
                <div></div>
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
        <div>
          <div>
            <p>SERVİSİMİZİN XİDMƏTLƏRİ</p>
            <p>Servisimiz bir neçə xidməti özündə birləşdirir.</p>
          </div>
          <div className="home-cards">
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p>Kombi ustası</p>
              <p>
                Kombilərin yüksək səviyyədə təmiri və istilik sisteminin
                qoşulması və bərpası
              </p>
            </div>
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p>Kombi ustası</p>
              <p>
                Kombilərin yüksək səviyyədə təmiri və istilik sisteminin
                qoşulması və bərpası
              </p>
            </div>
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p>Kombi ustası</p>
              <p>
                Kombilərin yüksək səviyyədə təmiri və istilik sisteminin
                qoşulması və bərpası
              </p>
            </div>
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p>Kombi ustası</p>
              <p>
                Kombilərin yüksək səviyyədə təmiri və istilik sisteminin
                qoşulması və bərpası
              </p>
            </div>
            <div className="home-card">
              <div>
                <i class="fa-solid fa-house"></i>
              </div>
              <p>Kombi ustası</p>
              <p>
                Kombilərin yüksək səviyyədə təmiri və istilik sisteminin
                qoşulması və bərpası
              </p>
            </div>
            <div className="home-card">
              <p>Əlaqə nömrəsi:</p>
              <p>Sürətli şəkildə əlaqə saxlaya bilərsiniz.</p>
              <p>055-600-84-83</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
