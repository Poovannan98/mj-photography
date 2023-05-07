import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../images/headers/1.jpg";
import img2 from "../images/headers/2.jpg";
import img3 from "../images/headers/3.jpg";
import img4 from "../images/headers/4.jpg";
import img5 from "../images/headers/5.jpg";
import img6 from "../images/headers/6.jpg";
import img7 from "../images/headers/7.jpg";
import img8 from "../images/headers/8.jpg";
import img9 from "../images/headers/9.jpg";
import img10 from "../images/headers/10.jpg";


export const Header = (props) => {
  const images = [
    { url: img1 }, { url: img2 },
    { url: img3 }, { url: img4 }, { url: img5 }, { url: img6 },
    { url: img7 }, { url: img8 }, { url: img9 }, { url: img10 },
  ];

  return (
    <header id="header">
      <center>
        <SimpleImageSlider
          width={1100}
          height={733}
          images={images}
          autoPlay={true}
          slideDuration={1}
          // showBullets={true}
          showNavs={true}
          style={{objectFit: "cover"}}
        />
      </center>
    </header>
  );
};
