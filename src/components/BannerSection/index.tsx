import { useEffect, useState } from "react";
import Bella from "../../assets/Bella 1.png";
import style from "./style.module.scss";

export const BannerSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 803);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 803);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className={style.section}>
      <div className="container md">
        <div className={style.flexbox}>
          {isMobile ? (
            <> 
            <div className={style.mobileRow}>
                <div className={style.topMobileRow}>
                    <h1 className="title two">
                        Oi! I’m Isabella Czelusniak. Nice to meet you!
                    </h1>
                    <img src={Bella} alt="profile-picture" />
                </div>
                </div>
                <div className={style.mobileParagraphs}>
                    <p className="paragraph two">
                    I am a dedicated UX Designer who prioritizes teamwork and innovation.
                    </p>
                    <p className="paragraph two">
                    I love working with cross-functional teams, creating innovative, high-quality designs, and managing strategically to ensure a positive result that aligns with both user needs and business objectives.
                    </p>
                    <p className="paragraph two">
                    I’m looking for an opportunity to continue to grow as a UX Designer while being able to showcase my skills and value in product growth.
                    </p>
                </div>
            </>
            
          ) : (
            <>
              <div>
                <h1 className="title two">
                  Oi! I’m Isabella Czelusniak. Nice to meet you!
                </h1>
                <p className="paragraph two" id="text1">
                  I am a dedicated UX Designer who prioritizes teamwork and innovation.
                </p>

                <p className="paragraph two" id="text2">
                  I love working with cross-functional teams, creating innovative, high-quality designs, and managing strategically to ensure a positive result that aligns with both user needs and business objectives.
                </p>

                <p className="paragraph two" id="text3">
                  I’m looking for an opportunity to continue to grow as a UX Designer while being able to showcase my skills and value in product growth.
                </p>
              </div>
              <div>
                <img src={Bella} alt="profile-picture" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}