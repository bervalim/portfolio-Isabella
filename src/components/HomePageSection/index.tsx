import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Cluster2 from "../../assets/Cluster4.png";
import Iokee from "../../assets/Iooke4.png";
import Arrow from "../../assets/arrow.png";
import style from "./style.module.scss";

export const HomePageSetion = () => {
  const thereRef = useRef<HTMLSpanElement>(null);
  const [animateThere, setAnimateThere] = useState(false);
  const [animateHello, setAnimateHello] = useState(false);
  const [animateCluster, setAnimateCluster] = useState(false);
  const [animateIokee, setAnimateIokee] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const triggerAnimation = () => {
    setAnimateThere(false);
    setAnimateHello(false);
    setAnimateCluster(false);
    setAnimateIokee(false);

    setTimeout(() => {
      setAnimateThere(true);
      setAnimateHello(true);
      setAnimateCluster(true);
      setAnimateIokee(true);
    }, 10);
  };

  useEffect(() => {
    triggerAnimation();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1100);
    };

    handleResize(); // Executa no load inicial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.flexcontainer}>
          <img
            src={Cluster2}
            onMouseEnter={triggerAnimation}
            onClick={triggerAnimation}
            className={`
        ${style.cluster}
        ${animateCluster ? style.animateCluster : ""}
        ${isMobile ? style.mobileImage : ""}
      `}
          />
          <div className={style.flexbox}>
            <h1 className="title biggest">
              <div
                className={style.flex}
                onMouseEnter={triggerAnimation}
                onClick={triggerAnimation}
              >
                <span
                  className={`${style.hello} ${
                    animateHello ? style.animateHello : ""
                  }`}
                >
                  Hello{" "}
                </span>
                <span
                  ref={thereRef}
                  className={`${style.there} ${
                    animateThere ? style.animateThere : ""
                  }`}
                >
                  there
                </span>
              </div>
            </h1>

            <p className="paragraph biggest">
              I’m Isabella Czelusniak, a passioned and determined UX Designer
              that values collaboration, creativity and product vision.
            </p>

            <div className={style.link}>
              <Link to="/projects">
                <div className={style.label}>
                  <span className="paragraph six">Projects</span>
                  <img src={Arrow}></img>
                </div>
              </Link>
            </div>
          </div>
          <img
            onMouseEnter={triggerAnimation}
            onClick={triggerAnimation}
            src={Iokee}
            className={`
                ${style.iokee}
                ${animateIokee ? style.animateIokee : ""}
                ${isMobile ? style.mobileImage : ""}
              `}
          />
        </div>
      </div>
    </section>
  );
};
