import React from "react";

const Womencollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.ladiesFashion;
  return (
    <div className="collectionSection">
      <h2>{title}</h2>
      <div className="bannerBox">
        <img src="assets/LadiesBanner.gif" />
      </div>
      <div className="menImage">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image1" />
        <img src={image3} alt="image1" />
        <img src={image4} alt="image1" />
        <img src={image5} alt="image1" />
        <img src={image6} alt="image1" />
      </div>
    </div>
  );
};

export default Womencollection;
