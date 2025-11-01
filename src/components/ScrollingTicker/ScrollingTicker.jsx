import { useEffect, useRef } from "react";
import brand1 from "./../../assets/pic/1.png";
import brand2 from "./../../assets/pic/2.png";
import brand3 from "./../../assets/pic/3.png";
import brand4 from "./../../assets/pic/4.png";
import brand5 from "./../../assets/pic/5.png";
import brand6 from "./../../assets/pic/6.png";
import "./ScrollingTicker.css";
export const ScrollingTicker = () => {
  const images = [brand1, brand2, brand3, brand4, brand5, brand6];

  //   const doubledImages = images.concat(images);
  //   یا
  const doubledImages = [...images, ...images];

  return (
    <>
      <div className="image-ticker">
        <div className="image-track">
          {doubledImages.map((item, index) => (
            <img key={index} src={item} alt="brand" />
          ))}
        </div>
      </div>
    </>
  );
};
