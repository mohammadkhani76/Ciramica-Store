import { useState } from "react";
import "./Accordion.css";
import { SvgArrowDown } from "../../assets/icon/SvgArrowDown";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className={`accordion-title ${isActive ? "active" : ""}`}
            onClick={() => setIsActive(!isActive)}
          >
            <div className="arrow">
              <SvgArrowDown />
            </div>
            <div>{title}</div>
          </div>
          {isActive && <p className="accordion-content">{content}</p>}
        </div>
      </div>
    </>
  );
};
