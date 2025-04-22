import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import style from "./style.module.scss";

interface DefaultTemplateProps {
  children: ReactNode;
}

export const DefaultTemplate = ({ children }: DefaultTemplateProps) => {
  return (
    <div className={style.pageWrapper}>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  );
};
