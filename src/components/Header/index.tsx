import { Link } from "react-router-dom";
import Elipse from "../../assets/elipse.png";
import Linkedin from "../../assets/linkedin-square.png";
import Behance from "../../assets/behance-square.png";

export const Header = () => {
    return (
        <header>
            <div className="container"> 
                <div>
                    <div>
                        <img src={ Elipse } alt = "Elipse" width={300}></img>
                        <Link to="">PROJECTS</Link>
                        <Link to="">ABOUT ME</Link>
                        <Link to="">CONTACT</Link>
                    </div>
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
        </header>
    )
}