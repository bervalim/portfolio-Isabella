import { AdvisorSection } from "../../components/AdvisorSection";
import { ClusterSection } from "../../components/ClusterSection";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { IokeeSection } from "../../components/IokeeSection";

export const Projects = () => {
  return (
    <DefaultTemplate>
      {/* <span className={style.imgux}>UX <br/> Design</span> */}
      {/* <img className={style.imgWeb} src="../src/assets/web-design.png" /> */}
      <AdvisorSection />
      <ClusterSection />
      <IokeeSection />
    </DefaultTemplate>
  );
};
