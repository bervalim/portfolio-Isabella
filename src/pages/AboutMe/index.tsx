import { BannerSection } from "../../components/BannerSection"
import { DefaultTemplate } from "../../components/DefaultTemplate"
import { EductionSection } from "../../components/EducationSection"
import { ProjectSummary } from "../../components/ProjectSummary"
import { ResumeSection } from "../../components/ResumeSection"
import { TestimonialSection } from "../../components/TestimonialsSection"

export const AboutMe = () => {
    return(
        <DefaultTemplate>
           <BannerSection/>
           <ResumeSection/>
           <ProjectSummary/>
           <EductionSection/>
           <TestimonialSection/>
        </DefaultTemplate>
    )
}