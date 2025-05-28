import "./style.css";

import img9 from "../../assets/Biblioteca de componentes (2) 2.png";
import img10 from "../../assets/Biblioteca de componentes (2) 3.png";
import img8 from "../../assets/Bibliotecade componentes(2)1.png";

export function Consistent() {
  return (
    <div className="container md font-display w-full mt-[127px]">
      <h3 className="title six">3.2 How did we kept the app consistent?</h3>
      <p className="section-text mt-[16px]">
        We built a component library aligned with the brand guidelines, defining
        key components, patterns for each, and a handoff file for future
        implementation.
      </p>

      <div className="flex gap-[17px]">
        <img src={img8} className="mt-[44px]" />
        <img src={img9} className="mt-[44px]" />
        <img src={img10} className="mt-[44px]" />
      </div>
    </div>
  );
}
