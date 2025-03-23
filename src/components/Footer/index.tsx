import Linkedin from "../../assets/linkedin-square.png";
import Behance from "../../assets/behance-square.png";


export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <p>You can also find more projects on my social accounts</p>
                    <div>
                            <a href="https://www.behance.net/bellazelus" target="_blank">
                                <img src={ Behance } alt="Behance" />
                            </a>
                            <a href="https://www.linkedin.com/in/isabella-czelusniak-7692a8181/" target="_blank">
                                <img src={ Linkedin } alt="Linkedin" />
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}