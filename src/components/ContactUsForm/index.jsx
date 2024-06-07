import "./index.scss";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function ContactUsForm() {
  return (
    <>
      <section className="section-contactus-img">
        <div className="section-contactus-head">
          <p className="section-contactus-text">Bizimlə Əlaqə</p>
        </div>
      </section>
      <section id={"contactUsForm"}>
        <div className={"container"}>
          <div className={"titles"}>
            <h2>Bizimlə əlaqə</h2>
            <h3>
              Bizimlə hərtərəfli əlaqə üçün aşağıdakı əlaqə üsullarından
              istifadə edə bilərsiniz.
            </h3>
          </div>
          <div className={"row"}>
            <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
              <div className={"square"}>
                <BsFillTelephoneFill />
              </div>
              <h4>Suallarınız üçün zəng edin.</h4>
              <a href={"tel:+9940556008483"}>055-600-84-83</a>
            </div>
            <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
              <div className={"square"}>
                <IoIosMail />
              </div>
              <h4>Gmail vasitəsilə əlaqə üçün.</h4>
              <a href={"mailto:info@alovservis.az"}>info@alovservis.az</a>
            </div>
            <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
              <div className={"square"}>
                <FaLocationDot />
              </div>
              <h4>Servisimizin məkan ünvanı.</h4>
              <a>Bakı,Xırdalan</a>
            </div>
          </div>
          <div className={"row"}>
            <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
              <div className={"row"}>
                <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                  <label>Ad</label>
                  <input />
                </div>
                <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                  <label>Soyad</label>
                  <input />
                </div>
                <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                  <label>Əlaqə nömrəsi</label>
                  <input />
                </div>
                <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                  <label>Email</label>
                  <input />
                </div>
                <div className={"box col-12 col-md-12 col-sm-12 col-xs-12"}>
                  <label>Mesaj</label>
                  <textarea rows={4} />
                </div>
                <div className={"box col-12 col-md-12 col-sm-12 col-xs-12"}>
                  <button>Send</button>
                </div>
              </div>
            </div>
            <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3553.6208525087022!2d49.742754727655225!3d40.460343617208146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDI3JzM3LjciTiA0OcKwNDQnNDMuOCJF!5e0!3m2!1sen!2saz!4v1717795936361!5m2!1sen!2saz"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUsForm;
