import "./style.css";

import img from "../../assets/Frame 48097627 (2).png";
import img2 from "../../assets/Frame 48097628 (2).png";
import img3 from "../../assets/Frame 48097685.png";
import arrow from "../../assets/arrow.png";
import { Modal } from "../Modal";
import { useState } from "react";

export function TwoPersonas() {
  const [show, setShow] = useState(false);

  return (
    <div className="container md font-display w-full mt-[127px]" id="2.1">
      <Modal setShow={setShow} show={show}>
        <div className="flex text-left">
          <p className="text-[#384255] font-[700] text-[22px] mb-[25px]">
            Personas
          </p>
        </div>
        <img src={img3} />
      </Modal>
      <h3 className="title six">
        2.1 What is the user trying to accomplish with the app?
      </h3>
      <p className="mt-[16px] text-[18px] text-[#49556D] font-[400]">
        Cluster serves two key personas—the buyer and the supplier—each with
        distinct goals and needs. We mapped out their specific requirements to
        address both perspectives.
      </p>
      <p
        className="!text-[15px] !text-[#2E3646] font-[600] mt-[20px] cursor-pointer"
        onClick={() => setShow(true)}
      >
        View Detailed Personas
        <img src={arrow} className="ml-[11px]"/>
      </p>

      <div className="flex mt-[58px] justify-between items-start">
        <img src={img} className="h-auto w-auto max-w-[48%]" alt="Imagem 1" />
        <img src={img2} className="h-auto w-auto max-w-[48%]" alt="Imagem 2" />
      </div>
    </div>
  );
}
