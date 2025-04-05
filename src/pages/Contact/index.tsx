import { FaEnvelope, FaPhone } from "react-icons/fa";
import { DefaultTemplate } from "../../components/DefaultTemplate"
import styles from "./styles.module.scss"
import phone from "../../assets/phone.png"
import buttonIcon from "../../assets/Button Icon.png"
import Envelope from "../../assets/envelope.png"

export const Contact = () => {
    return (
      <DefaultTemplate>
        <section className={styles.contact}>
        <div className="container">
            <div className={styles.wrapper}>
            <div className={styles.infoGroup}>
              <div className={styles.infoItem}>
                <div className={styles.label} >
                    <span className="paragraph one" >
                    Email
                    </span>
                   <img src={Envelope}></img>
                </div>
             
                <a className="paragraph links" href="mailto:isabella.czelusniak.ux@gmail.com" >
                  isabella.czelusniak.ux@gmail.com
                </a>
                <hr />
              </div>
  
              <div className={styles.infoItem}>
                <div className={styles.label}>
                    <span  className="paragraph one" >
                        Phone
                    </span>
                   <img src={phone}></img>
                </div>
                <p className="paragraph links">+351 913 533 253</p>
                <hr />
              </div>
  
              <div className={styles.infoItem}>
                <div className={styles.label}>
                    <span className="paragraph one">
                    Resume 
                    </span>
                    <img src={buttonIcon}></img>
                </div>
                <a href="https://example.com/resume.pdf" target="_blank" rel="noreferrer">
                  resume pdf link
                </a>
                <hr />
              </div>
            </div>

            </div>
         
          </div>
        </section>
      </DefaultTemplate>
    );
  };