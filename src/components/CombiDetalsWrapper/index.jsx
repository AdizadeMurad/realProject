import './index.scss'
import {Link} from "react-router-dom";
import {FaArrowRightLong} from "react-icons/fa6";
import {FaCalendarAlt, FaUser} from "react-icons/fa";
import {useTranslation} from 'react-i18next';

function CombiDetalsWrapper() {
    const {t} = useTranslation();
    return (
        <>
            <section className='section-detals-img'>
                <div className="section-detals-head">
                    <p className="section-detals-text">
                        {t('salesofdetails')}
                    </p>
                </div>
            </section>
            <section id={"combiDetalsWrapper"}>
                <div className={"container"}>
                    <div className={"row"} style={{justifyContent: "center"}}>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/fan.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Fan</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/1.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Mator</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/newanaesenjor.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Ana esenjor</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/newesenjor1.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Esenjor</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/salter1.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Şalter</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/ntc1.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>NTC</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/turbin.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Türbin</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/41dxzebFTXL.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Ştok</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img
                                    src={"https://alovservisimages.netlify.app/img/bosch-condens-2000-kombi-basinc-anahtari-1-550x550.jpg"}
                                    alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Təyziq datçiki</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"card col-4 col-md-6 col-sm-12 col-xs-12"}>
                            <div>
                                <img src={"https://alovservisimages.netlify.app/img/balon.jpg"} alt={"Image"}/>
                                <div className={"titles"}>
                                    <h2>
                                        <FaUser/><span>alovservis.az</span>
                                        <FaCalendarAlt/><span>06.04.2024</span>
                                    </h2>
                                    <h3>Raşedelni balon</h3>
                                    <h4> {t('salesofdetails-dec')}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CombiDetalsWrapper;