import video from "../../../assets/7837de75938f3a732029524047c1cbe56c4ab181.mov";
import "./index.css";

export function FinalResult() {
  return (
    <div className="container md font-display relative" id="4.1">
      <h3 className="title six">4.1 What is the final result?</h3>
      <p className="paragraph eleven  mt-[16px] mb-[58px]">
        Finally, we coordinated with the PM team to ticket the work and joined
        the grooming session with the development team to address any questions
        and ensure clear communication.
      </p>

      <video
        className="max-w-[100%] rounded-[16px]"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <span className="font-[600] text-[150px] text-[#FAFBFC] absolute right-[1rem] bottom-[-5rem] z-[-1] text-title">
        Results
      </span>
    </div>
  );
}
