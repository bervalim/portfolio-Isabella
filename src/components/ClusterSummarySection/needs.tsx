import "./style.css";

import img11 from "../../assets/Frame 48097627.png";
import img12 from "../../assets/Frame 48097628.png";


export function Needs() {
  return (
    <div className="container md font-display w-full mt-[127px]" id="4.1">
      <h3 className="title six">
        4.1 How did we make sure that the design was meeting the user’s needs?
      </h3>
      <p className="section-text mt-[16px]">
        After building the full prototype, we conducted usability tests with
        five users and refined the design based on their completion rates,
        feedback, and suggestions.
      </p>

      <div className="flex gap-[17px]">
        <img src={img11} className="mt-[44px]" />
        <img src={img12} className="mt-[44px]" />
      </div>
    </div>
  );
}
