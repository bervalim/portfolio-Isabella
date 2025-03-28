import Politecnico from "../../assets/politecnico.png";
import Senai from "../../assets/senai..png";
import Uxcel from "../../assets/uxcel.png";
import Google from "../../assets/google.png";
import USP from "../../assets/usp.png";
import style from "./style.module.scss";


export const EductionSection = () => {
    return (
        <section className={style.section}>
            <div className="container md">
                <h2 className="title four">Courses and Certificates</h2>
                <hr/>
                <div className={style.flexbox}>
                    <div className={style.leftcontainer}>
                        <div className={style.flexcontainer}>
                            <img src={Politecnico}/>
                            <div>
                                <p className="paragraph four">Graphic Design Bachelor’s Degree</p>
                                <span className="paragraph three">ESAD.CR</span>
                            </div>
                        </div>
                        <div className={style.flexcontainer}>
                            <img src={Senai}/>
                            <div>
                                <p className="paragraph four">Management Associate’s Degree</p>
                                <span  className="paragraph three">SENAI.PR</span>
                            </div>
                        </div>
                        <div className={style.flexcontainer}>
                            <img src={Uxcel}/>
                            <div>
                                <p className="paragraph four">Information Architecture</p>
                                <span  className="paragraph three">Uxcel</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.rightcontainer}>
                        <div className={style.flexcontainer}>
                            <img src={Google}/>
                            <div>
                                <p className="paragraph four">Start the UX Design Process: Empathize, Define, and Ideate</p>
                                <span  className="paragraph three">Google | Coursera</span>
                            </div>
                        </div>
                        <div className={style.flexcontainer}>
                            <img src={Google}/>
                            <div>
                                <p className="paragraph four">Foundations of User Experience (UX) Design</p>
                                <span  className="paragraph three">Google | Coursera</span>
                            </div>
                        </div>
                        <div className={style.flexcontainer}>
                            <img src={USP}/>
                            <div>
                                <p className="paragraph four">UX / UI: Fundamentos para o design de interface</p>
                                <span  className="paragraph three">Universidade de São Paulo | Coursera</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}