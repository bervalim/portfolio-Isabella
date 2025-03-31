import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Contact } from "../pages/Contact"
import { AboutMe } from "../pages/AboutMe"
import { Projects } from "../pages/Projects"
import { AdvisorCaseStudy } from "../pages/AdvisorCaseStudy"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/aboutMe" element={<AboutMe/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/adivisor-case-study" element={<AdvisorCaseStudy/>}/>
        </Routes>
    )
}