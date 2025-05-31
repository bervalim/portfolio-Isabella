import { useState } from "react";
import clusterArrow from "../../assets/cluster-arrow.png";
import arrow from "../../assets/arrow.png";
import { Modal } from "../Modal";
import img from "../../assets/image.png";

import img1 from "../../assets/image (1).png";
import img2 from "../../assets/image (2).png";
import img3 from "../../assets/image (3).png";
import img4 from "../../assets/image (4).png";
import img5 from "../../assets/image (5).png";

const styleCircle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "6px 10px",
  gap: "10px",
  width: "24px",
  height: "24px",
  background: "#FFFFFF",
  // background: "#2C3444",
  "border-radius": "48px",
  flex: "none",
  order: 0,
  flexGrow: 0,
  cursor: "pointer",
};

export function Challenges() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [circle, setCircle] = useState(1);
  const [circle1, setCircle1] = useState(1);

  return (
    <div className="container md font-display w-full mt-[127px]">
      <Modal setShow={setShow1} show={show1}>
        <div className="flex text-left">
          <p className="text-[#384255] font-[700] text-[22px] mb-[25px]">
            User Journey - Supplier
          </p>
        </div>
        <img src={img} />
      </Modal>
      <Modal setShow={setShow2} show={show2}>
        <div className="flex text-left">
          <p className="text-[#384255] font-[700] text-[22px] mb-[25px]">
            User Journey - Buyer
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span
            className={`${circle === 1 && "!bg-[#2C3444] text-[#FFFFFF]"}`}
            style={{
              ...styleCircle,
            }}
            onClick={() => setCircle(1)}
          >
            1
          </span>
          <span
            className={`${circle === 2 && "!bg-[#2C3444] text-[#FFFFFF]"}`}
            style={{ ...styleCircle }}
            onClick={() => setCircle(2)}
          >
            2
          </span>
          <span
            className={`${circle === 3 && "!bg-[#2C3444] text-[#FFFFFF]"}`}
            style={{ ...styleCircle }}
            onClick={() => setCircle(3)}
          >
            3
          </span>
        </div>

        {circle === 1 && <img src={img1} />}
        {circle === 2 && <img src={img2} />}
        {circle === 3 && <img src={img3} />}
      </Modal>
      <Modal setShow={setShow3} show={show3}>
        <div className="flex text-left">
          <p className="text-[#384255] font-[700] text-[22px] mb-[25px]">
            User Journey - Collaboration
          </p>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span
            className={`${circle1 === 1 && "!bg-[#2C3444] text-[#FFFFFF]"}`}
            style={{
              ...styleCircle,
            }}
            onClick={() => setCircle1(1)}
          >
            1
          </span>
          <span
            className={`${circle1 === 2 && "!bg-[#2C3444] text-[#FFFFFF]"}`}
            style={{ ...styleCircle }}
            onClick={() => setCircle1(2)}
          >
            2
          </span>
        </div>

        {circle1 === 1 && <img src={img4} />}
        {circle1 === 2 && <img src={img5} />}
      </Modal>
      <h3 className="title six">2.3 When those challenges occur?</h3>
      <p className="section-text mt-[16px]">
        We then identified where in the user journey these issues arise to
        design the app accordingly.
      </p>

      <div className="flex gap-[16px]">
        <p className="!text-[15px] !text-[#2E3646] font-[600] mt-[20px] cursor-pointer">
          User Journey:
        </p>
        <p
          className="!text-[15px] !text-[#2E3646] font-[600] mt-[20px] cursor-pointer"
          onClick={() => setShow1(true)}
        >
          Supplier
          <img src={arrow} className="ml-[11px]" />
        </p>
        <p
          className="!text-[15px] !text-[#2E3646] font-[600] mt-[20px] cursor-pointer"
          onClick={() => setShow2(true)}
        >
          Buyer
          <img src={arrow} className="ml-[11px]" />
        </p>
        <p
          className="!text-[15px] !text-[#2E3646] font-[600] mt-[20px] cursor-pointer"
          onClick={() => setShow3(true)}
        >
          Collaboration
          <img src={arrow} className="ml-[11px]" />
        </p>
      </div>

      <img src={clusterArrow} className="mt-[44px]" />
    </div>
  );
}
