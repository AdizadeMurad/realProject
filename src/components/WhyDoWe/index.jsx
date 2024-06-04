import './index.scss'
import {FaDice, FaMedal} from "react-icons/fa";
import {FaPeopleGroup} from "react-icons/fa6";
import {BsFillTelephoneFill} from "react-icons/bs";

function WhyDoWe() {
    return (
        <section id={"whyDoWe"}>
            <div className={"container"}>
                <div className={"titles"}>
                    <h2>NİYƏ BİZİ SEÇMƏLİSİNİZ?</h2>
                    <h3>Servisimizin yüksək səviyyədə xidmətlərindən hərkəsin xəbərdar olub, yararlanmasını
                        istəyirik.</h3>
                </div>
                <div className={"row"} style={{marginTop: "30px"}}>
                    <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
                        <div className={"square"}>
                            <FaDice/>
                        </div>
                        <h4>Yüksək keyfiyyət</h4>
                        <p>Təmir zamanı yeni istilik sistemlərinin quraşdırılması zamanı,həmçinin göstərdiyimiz
                            digər xidmətlər zamanı dayanıqlı,etibarlı və yüksək keyfiyyətli vasitələrdən və ehtiyyat
                            hissələrdən istifadə edirik.</p>
                        <div className={"square"} style={{marginTop: '40px'}}>
                            <FaMedal/>
                        </div>
                        <h4>Görülən işlərə zəmanət</h4>
                        <p>Kombilərin təmiri və yuyulması,istilik sistemlərinin qoşulması,bir sözlə,göstərdiyimiz bütün
                            xidmətlərə zəmanət veririk.</p>
                    </div>
                    <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
                        <img src={"https://alovservisimages.netlify.app/img/combik.png"} alt={"Image"}/>
                    </div>
                    <div className={"col-4 col-md-4 col-sm-12 col-xs-12"}>
                        <div className={"square"}>
                            <FaPeopleGroup/>
                        </div>
                        <h4>Peşəkar Heyət</h4>
                        <p>Qarşılaşdığınız çətinliklər və problemlər yüksək səviyyədə və keyfiyyətdə həmçinin sərfəli
                            qiymətlər ilə servisimizin əmakdaşları tərəfindən yerindəcə həll olunur.</p>
                        <div className={"square"} style={{marginTop: '40px'}}>
                            <BsFillTelephoneFill/>
                        </div>
                        <h4>Dəstək</h4>
                        <p>İstilik sisteminizdə və kombinizdə ,başqa sözlə,bu kimi müxtəlif problemlər ilə qarşılaşsanız
                            servisimizlə istədiyiniz zaman əlaqə saxlya bilərsiniz.Ən qısa zamanda servisimizin
                            əməkdaşları tərəfindən sizə geridönüş ediləcək.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyDoWe;