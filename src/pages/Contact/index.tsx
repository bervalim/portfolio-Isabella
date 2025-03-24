import { FaEnvelope, FaPhone } from "react-icons/fa";
import { DefaultTemplate } from "../../components/DefaultTemplate"
import styles from "./styles.module.scss"
import { FiFileText } from "react-icons/fi";

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
                    Email <FaEnvelope />
                    </span>
                </div>
             
                <a className="paragraph links" href="mailto:isabella.czelusniak.ux@gmail.com" >
                  isabella.czelusniak.ux@gmail.com
                </a>
                <hr />
              </div>
  
              <div className={styles.infoItem}>
                <div className={styles.label}>
                    <span  className="paragraph one" >
                        Phone <FaPhone />
                    </span>
                </div>
                <p className="paragraph links">+351 913 533 253</p>
                <hr />
              </div>
  
              <div className={styles.infoItem}>
                <div className={styles.label}>
                    <span className="paragraph one">
                    Resume <FiFileText/>
                    </span>
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