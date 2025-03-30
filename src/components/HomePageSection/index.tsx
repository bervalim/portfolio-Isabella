import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { Zoom } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
import Cluster2 from "../../assets/Cluster4.png"
import Iokee from "../../assets/Iooke4.png";

export const HomePageSetion = () => {
  const thereRef = useRef<HTMLSpanElement>(null);
  const [animateThere, setAnimateThere] = useState(false);

  // Ativa no scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateThere(true);
      },
      { threshold: 0.5 }
    );

    if (thereRef.current) observer.observe(thereRef.current);

    return () => {
      if (thereRef.current) observer.unobserve(thereRef.current);
    };
  }, []);

  const triggerAnimation = () => {
    // Remove e reativa a classe pra reiniciar animação
    setAnimateThere(false);
    setTimeout(() => setAnimateThere(true), 10);
  };

  return (
    <section className={style.section}>
      <div className="container">
        <img src={Cluster2} className={style.cluster}/>
        <div className={style.flexbox}>
          <h1 className="title biggest">
            <div className={style.flex} onMouseEnter={triggerAnimation} onClick={triggerAnimation}>
              <Zoom triggerOnce duration={1100} as="span">
                <span className={style.hello}>Hello </span>
              </Zoom>
              <span
                ref={thereRef}
                className={`${style.there} ${animateThere ? style.animateThere : ""}`}
              >
                there
              </span>
            </div>
          </h1>

          <p className="paragraph biggest">
            I’m Isabella Czelusniak, a passioned and determined UX Designer that
            values collaboration, creativity and product vision.
          </p>

          <div className={style.link}>
            <Link to="/projects">
              <span className="paragraph six">Projects</span>
              <FiArrowUpRight size={19} />
            </Link>
          </div>
        </div>
        <img src={Iokee} className={style.iokee}/>
      </div>
    </section>
  );
};
