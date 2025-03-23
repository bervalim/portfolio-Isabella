import { ReactNode } from "react";
import { Footer } from "../Footer"
import { Header } from "../Header"

interface DefaultTemplateProps {
    children: ReactNode;
}

export const DefaultTemplate = ({children}: DefaultTemplateProps) => {
    return (
        <>
        <Header/>
            <main>{children}</main>
        <Footer/>
        </>
    )
}