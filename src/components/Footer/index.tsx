import LinkedinGrey from "../../assets/linkedin-square-grey.png";
import BehanceGrey from "../../assets/behance-square-grey.png";
import style from "./style.module.scss";


export const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.flexbox}>
                    <p className="paragraph links">You can also find more projects on my social accounts</p>
                    <div className={style.icons}>
                            <a href="https://www.behance.net/bellazelus" target="_blank">
                                <img src={ BehanceGrey } alt="Behance" />
                            </a>
                            <a href="https://www.linkedin.com/in/isabella-czelusniak-7692a8181/" target="_blank">
                                <img src={ LinkedinGrey } alt="Linkedin" />
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}