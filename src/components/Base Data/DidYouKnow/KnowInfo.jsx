import React, { useState } from "react";
import styles from "./KnowInfo.module.css";

// Original images
import additionalLivingExpenses from "../../common/assets/Did You Know Headers/Additional Expenses _ Heading.png";
import comprehensiveloss from "../../common/assets/Did You Know Headers/COMPREHENSIVE LOSS AND UNDERWRITER EXCHANGE.png";
import creditscore from "../../common/assets/Did You Know Headers/CREDIT SCORE INFLUENCE.png";
import cyber from "../../common/assets/Did You Know Headers/CYBER.png";
import drone from "../../common/assets/Did You Know Headers/DRONE.png";
// import exclusiuonsforho from "../../common/assets/Did You Know Headers/EXCLUSIONS FOR HOME OWNERS.png";
import federalandstate from "../../common/assets/Did You Know Headers/FEDERAL AND STATE.png";
import floodinsurance from "../../common/assets/Did You Know Headers/FLOOD INSURANCE.png";
import homebased from "../../common/assets/Did You Know Headers/HOME BASED BUSINESS COVERAGE.png";
import dentists from "../../common/assets/Did You Know Headers/INTERNATIONAL DENTISTS.png";
import naturaldisasters from "../../common/assets/Did You Know Headers/NATURAL DISASTERS AND COVERAGE.png";
import personalproperty from "../../common/assets/Did You Know Headers/PERSONAL PROPERTY.png";
import pools from "../../common/assets/Did You Know Headers/POOLS.png";
import riskmanagement from "../../common/assets/Did You Know Headers/RISK MANAGEMENT AND INSURANCE.png";
import sr22fr44 from "../../common/assets/Did You Know Headers/SR22,FR44.png";
import starbucks from "../../common/assets/Did You Know Headers/STAR BUCKS.png";
import tortlaw from "../../common/assets/Did You Know Headers/TORT LAW AND LIABILITY INSURANCE.png";
import valuableitems from "../../common/assets/Did You Know Headers/VALUABLE ITEMS COVERAGE.png";

// Alternate images
import alternateImage1 from "../../common/assets/Did You Know Images/ADDITIONAL LIVING EXPENSES.png";
import alternateImage2 from "../../common/assets/Did You Know Images/COMPREHENSIVE LOSS AND UNDERWRITER EXCHANGE.png";
import alternateImage3 from "../../common/assets/Did You Know Images/CREDIT SCORE INFLUENCE.png";
import alternateImage4 from "../../common/assets/Did You Know Images/CYBER.png";
import alternateImage5 from "../../common/assets/Did You Know Images/DRONE.png";
// import alternateImage6 from "../../common/assets/Did You Know Images/EXCLUSIONS FOR HOME OWNERS.png";
import alternateImage7 from "../../common/assets/Did You Know Images/FEDERAL AND STATE.png";
import alternateImage8 from "../../common/assets/Did You Know Images/FLOOD INSURANCE.png";
import alternateImage9 from "../../common/assets/Did You Know Images/HOME BASED BUSINESS COVERAGE.png";
import alternateImage10 from "../../common/assets/Did You Know Images/NATURAL DISASTERS AND COVERAGE.png";
import alternateImage11 from "../../common/assets/Did You Know Images/PERSONAL PROPERTY.png";
import alternateImage12 from "../../common/assets/Did You Know Images/POOLS.png";
import alternateImage13 from "../../common/assets/Did You Know Images/RISK MANAGEMENT AND INSURANCE.png";
import alternateImage14 from "../../common/assets/Did You Know Images/SR22,FR44.png";
import alternateImage15 from "../../common/assets/Did You Know Images/STAR BUCKS.png";
import alternateImage16 from "../../common/assets/Did You Know Images/TORT LAW AND LIABILITY INSURANCE.png";
import alternateImage17 from "../../common/assets/Did You Know Images/VALUABLE ITEMS COVERAGE.png";

const imagePairs = {
  [additionalLivingExpenses]: alternateImage1,
  [comprehensiveloss]: alternateImage2,
  [creditscore]: alternateImage3,
  [cyber]: alternateImage4,
  [drone]: alternateImage5,
  // [exclusiuonsforho]: alternateImage6,
  [federalandstate]: alternateImage7,
  [floodinsurance]: alternateImage8,
  [homebased]: alternateImage9,
  [dentists]: alternateImage10,
  [naturaldisasters]: alternateImage11,
  [personalproperty]: alternateImage12,
  [pools]: alternateImage13,
  [riskmanagement]: alternateImage14,
  [sr22fr44]: alternateImage15,
  [starbucks]: alternateImage16,
  [tortlaw]: alternateImage16,
  [valuableitems]: alternateImage17,
};

const KnowInfo = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (originalSrc) => {
    setActiveImage(originalSrc);
  };

  const handleBack = () => {
    setActiveImage(null);
  };

  if (activeImage) {
    return (
      <div className={styles.enlargedContainer}>
        <img
          className={styles.enlargedImage}
          src={imagePairs[activeImage]}
          alt="Enlarged"
        />
        <button className={styles.backButton} onClick={handleBack}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className={styles.gridContainer}>
      {Object.keys(imagePairs).map((originalSrc, index) => (
        <div
          key={index}
          className={styles.imageWrapper}
          onClick={() => handleImageClick(originalSrc)}
        >
          <img className={styles.image} src={originalSrc} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default KnowInfo;
