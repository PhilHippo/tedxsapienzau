import React from "react";
import Image from "../images/ACT2022.gif";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Edizione2022() {
  return (
    <>
      <div>
      <LazyLoadImage src={Image}        
        alt="ACT2022"
      />
     </div>
    </>
  );
}
