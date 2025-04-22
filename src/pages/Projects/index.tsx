import { AdvisorSection } from "../../components/AdvisorSection";
import { ClusterSection } from "../../components/ClusterSection";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { IokeeSection } from "../../components/IokeeSection";
import style from "./style.module.scss";

export const Projects = () => {
  return (
    <DefaultTemplate>
      <span className={style.imgux}>UX <br/> Desingn</span>
      <img className={style.imgWeb} src="../src/assets/web-design.png" />
      <AdvisorSection />
      <ClusterSection />
      <IokeeSection />
    </DefaultTemplate>
  );
};
