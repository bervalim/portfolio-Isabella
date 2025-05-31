import "./style.css";

import img11 from "../../assets/Frame 48097627.png";
import img12 from "../../assets/Frame 48097628.png";
import img1 from "../../assets/image (1).png";
import { Modal } from "../Modal";
import { useState } from "react";
import arrow from "../../assets/arrow.png";

export function Needs() {
  const [show1, setShow1] = useState(false);
  return (
    <div className="container md font-display w-full mt-[127px]" id="4.1">
      <Modal setShow={setShow1} show={show1}>
        <div className="flex text-left">
          <p className="text-[#384255] font-[700] text-[22px] mb-[25px]">
            User Journey - Supplier
          </p>
        </div>
        <img src={img1} />
      </Modal>
      <h3 className="title six">
        4.1 How did we make sure that the design was meeting the user’s needs?
      </h3>
      <p className="section-text mt-[16px]">
        After building the full prototype, we conducted usability tests with
        five users and refined the design based on their completion rates,
        feedback, and suggestions.
      </p>
      <p
        className="!text-[15px] !text-[#2E3646] font-[600] mt-[20px] cursor-pointer"
        onClick={() => setShow1(true)}
      >
        Questions
        <img src={arrow} className="ml-[11px]" />
      </p>

      <div className="flex gap-[17px]">
        <img src={img11} className="mt-[44px]" />
        <img src={img12} className="mt-[44px]" />
      </div>
    </div>
  );
}
