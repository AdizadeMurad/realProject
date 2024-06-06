import './index.scss'
import {Link} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";
import {FaCalendarAlt, FaUser} from "react-icons/fa";

function CombiDetalsWrapper() {
    const arr = [{
        title: 'Fan',
        imgUrl: 'https://alovservisimages.netlify.app/img/fan.jpg'
    }, {
        title: 'Mator',
        imgUrl: 'https://alovservisimages.netlify.app/img/1.jpg'
    }, {
        title: 'Ana esenjor',
        imgUrl: 'https://alovservisimages.netlify.app/img/newanaesenjor.jpg'
    }, {
        title: 'Esenjor',
        imgUrl: 'https://alovservisimages.netlify.app/img/newesenjor1.jpg'
    }, {
        title: 'Şalter',
        imgUrl: 'https://alovservisimages.netlify.app/img/salter1.jpg'
    }, {
        title: 'NTC',
        imgUrl: 'https://alovservisimages.netlify.app/img/ntc1.jpg'
    }, {
        title: 'Türbin',
        imgUrl: 'https://alovservisimages.netlify.app/img/turbin.jpg'
    }, {
        title: 'Ştok',
        imgUrl: 'https://alovservisimages.netlify.app/img/41dxzebFTXL.jpg'
    }, {
        title: 'Təyziq datçiki',
        imgUrl: 'https://alovservisimages.netlify.app/img/bosch-condens-2000-kombi-basinc-anahtari-1-550x550.jpg'
    }, {
        title: 'Raşedelni balon',
        imgUrl: 'https://alovservisimages.netlify.app/img/balon.jpg'
    }];
    return (
       <>
        <section className='section-detals-img'>
        <div className="section-detals-head">
            <p className="section-detals-text">
            Ehtiyat hissələr
            </p>
        </div>
        </section>
        <section id={"combiDetalsWrapper"}>
            <div className={"container"}>
                <div className={"row"} style={{justifyContent: "center"}}>
                    {arr && arr.map((elem) => (
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div key={elem.id}>
                                <img src={elem.imgUrl} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>{elem.title}</h3>
                                    <h4>Bu tip ehtiyyat hissəsini servisimizə yaxınlaşıb əldə edə bilərsiniz.</h4>
                                    <Link to={'/'} className={"details"}>
                                        Ətraflı məlumat üçün
                                        <FaArrowRightLong/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
       </>
    );
}

export default CombiDetalsWrapper;