import { BannerSection } from "../../components/BannerSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { ProjectSummary } from "../../components/ProjectSummary"
import { ResumeSection } from "../../components/ResumeSection"

export const AboutMe = () => {
    return(
        <DefaultTemplate>
           <BannerSection/>
           <ResumeSection/>
           <ProjectSummary/>
        </DefaultTemplate>
    )
}